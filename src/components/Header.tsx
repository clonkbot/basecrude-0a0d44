import { useState, useEffect } from 'react';

export default function Header() {
  const [copied, setCopied] = useState(false);
  const ca = "0x21FD44bE608F1D18689CDcC8861AE74571Ae8888";
  const buyLink = "https://base.meme/coin/base:0x21FD44bE608F1D18689CDcC8861AE74571Ae8888?referrer=0xFCE86e6A615B40A620b1a666ff4B866Cd273c476";

  const copyCA = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative border-b border-[#0052FF]/30 bg-gradient-to-r from-[#0a0e17]/95 via-[#0d1525]/95 to-[#0a0e17]/95 backdrop-blur-md">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0052FF] to-transparent" />

      <div className="container mx-auto px-4 py-3 md:py-4">
        {/* Main header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
          {/* Logo and title */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#0052FF] to-[#0033cc] flex items-center justify-center shadow-lg shadow-[#0052FF]/30">
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 border-2 border-[#0a0e17] ${pulse ? 'animate-ping' : ''}`} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <span className="text-white">BASE</span>
                <span className="text-[#0052FF]">CRUDE</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">Real-Time Oil Analytics</p>
            </div>
          </div>

          {/* CA Display */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 bg-[#0052FF]/10 border border-[#0052FF]/30 rounded-lg px-3 py-2 w-full sm:w-auto">
              <span className="text-[#0052FF] font-bold text-xs md:text-sm whitespace-nowrap">BASE.MEME $OIL CA:</span>
              <button
                onClick={copyCA}
                className="flex items-center gap-2 hover:text-[#0052FF] transition-colors group"
              >
                <span className="font-mono text-xs text-gray-400 group-hover:text-white transition-colors truncate max-w-[120px] md:max-w-[180px]">
                  {ca}
                </span>
                {copied ? (
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Buy Button */}
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center gap-2 bg-gradient-to-r from-[#0052FF] to-[#0066FF] hover:from-[#0066FF] hover:to-[#0052FF] px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 shadow-lg shadow-[#0052FF]/30 hover:shadow-[#0052FF]/50 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF] to-[#0066FF] rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                BUY $OIL
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
