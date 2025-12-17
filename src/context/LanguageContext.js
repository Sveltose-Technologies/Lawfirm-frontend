import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { Client } from "@gradio/client";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translationsCache, setTranslationsCache] = useState({});
  
  // API Connection को सेव करके रखेंगे ताकि बार-बार connect न करना पड़े
  const clientRef = useRef(null);

  // 1. वेबसाइट खुलते ही API से कनेक्ट कर लो (Background में)
  useEffect(() => {
    const initClient = async () => {
      try {
        clientRef.current = await Client.connect("shankarshiva7/language_translation");
        console.log("Translation API Connected!");
      } catch (err) {
        console.error("API Connection Failed", err);
      }
    };
    initClient();
  }, []);

  const translateText = async (text) => {
    // अगर इंग्लिश है तो तुरंत वापस कर दो
    if (language === 'en') return text;

    // Cache चेक करें (अगर पहले कभी ट्रांसलेट किया है तो 0 सेकंड लगेगा)
    const cacheKey = `${text}_${language}`;
    if (translationsCache[cacheKey]) {
      return translationsCache[cacheKey];
    }

    try {
      // अगर क्लाइंट कनेक्ट नहीं है, तो वेट करें या कनेक्ट करें
      if (!clientRef.current) {
        clientRef.current = await Client.connect("shankarshiva7/language_translation");
      }

      // API को कॉल करें
      const result = await clientRef.current.predict("/translate_text", { text: text });
      const data = result.data;
      
      let translatedText = text;

      // [0]=Telugu, [1]=Tamil, [2]=Hindi, [3]=Marathi, [4]=Malayalam, [5]=Urdu
      switch(language) {
        case 'te': translatedText = data[0]; break;
        case 'ta': translatedText = data[1]; break;
        case 'hi': translatedText = data[2]; break;
        case 'mr': translatedText = data[3]; break;
        case 'ml': translatedText = data[4]; break;
        case 'ur': translatedText = data[5]; break;
        default: translatedText = text;
      }

      // कैश में सेव करें और रिटर्न करें
      setTranslationsCache(prev => ({ ...prev, [cacheKey]: translatedText }));
      return translatedText;

    } catch (error) {
      console.error("Translation Error:", error);
      return text; // एरर आए तो इंग्लिश ही रहने दो (खाली नहीं दिखेगा)
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translateText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);