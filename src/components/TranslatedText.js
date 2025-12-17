import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TranslatedText = ({ text }) => {
  const { language, translateText } = useLanguage();
  // शुरुआत में हमेशा original text (English) दिखाएं
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let isMounted = true;

    // अगर इंग्लिश है, तो सीधे सेट करें
    if (language === 'en') {
      setDisplayText(text);
      return;
    }

    // API कॉल करें (बैकग्राउंड में)
    const fetchTranslation = async () => {
      const translated = await translateText(text);
      if (isMounted) {
        setDisplayText(translated);
      }
    };

    fetchTranslation();

    return () => { isMounted = false; };
  }, [language, text]); // जब भी भाषा या टेक्स्ट बदले, यह चलेगा

  // यहाँ कोई Loading Spinner नहीं है, सिर्फ टेक्स्ट है
  return <>{displayText}</>;
};

export default TranslatedText;