import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Jo humne pehle banaya tha
import Link from 'next/link';

// Ye layout Header/Footer nahi dikhayega, sirf Sidebar dikhayega
const PanelLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        {/* Top Header for Admin (Optional) */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Attorney Dashboard</h2>
          <Link href="/" className="text-blue-600 text-sm">Back to Website</Link>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
           {children}
        </main>
      </div>
    </div>
  );
};

export default PanelLayout;