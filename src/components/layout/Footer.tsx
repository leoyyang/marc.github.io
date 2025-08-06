/**
 * MARC 页脚组件
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-12 mt-16">
      <div className="container">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src="/dsp-logo.png" 
              alt="Digital Science Platform" 
              className="h-6 w-auto opacity-60"
            />
          </div>
          
          <div className="text-sm text-dsp-gray">
            © 2024 Digital Science Platform
          </div>
          
          <div className="text-xs text-dsp-gray">
            Powered by AI-driven salary analysis
          </div>
        </div>
      </div>
    </footer>
  );
};