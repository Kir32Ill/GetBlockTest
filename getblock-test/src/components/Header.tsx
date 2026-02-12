"use client";
import { ConnectKitButton } from "connectkit";
import { Wallet2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-tr from-blue-600 to-purple-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Wallet2 className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            GetBlock.io App
          </span>
        </div>
        
        <ConnectKitButton />
      </div>
    </header>
  );
};