import { useEffect, useState } from 'react';

interface MarketCapSidebarProps {
  marketCap: number;
}

export default function MarketCapSidebar({ marketCap }: MarketCapSidebarProps) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 300);
    return () => clearTimeout(timer);
  }, [marketCap]);

  const formatMarketCap = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(2)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Market Cap Card */}
      <div className={`relative bg-gradient-to-br from-[#0d1525] to-[#0a0e17] border border-[#0052FF]/40 rounded-2xl p-4 md:p-6 overflow-hidden transition-all duration-300 ${flash ? 'border-[#0052FF] shadow-lg shadow-[#0052FF]/30' : ''}`}>
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052FF]/5 to-transparent animate-pulse" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0052FF]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 font-medium" style={{ fontFamily: 'Oswald, sans-serif' }}>
              $OIL Market Cap
            </h3>
          </div>

          <div className="text-2xl md:text-3xl font-black text-[#0052FF] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
            {formatMarketCap(marketCap)}
          </div>

          <div className="flex items-center gap-1 text-green-500 text-xs md:text-sm font-medium">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            Live on Base
          </div>

          {/* Contract Address */}
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#0052FF]/20">
            <p className="text-[10px] md:text-xs text-gray-500 mb-1">Contract</p>
            <p className="font-mono text-[10px] md:text-xs text-gray-400 break-all">
              0x21FD...8888
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Card */}
      <div className="bg-gradient-to-br from-[#0d1525] to-[#0a0e17] border border-[#0052FF]/20 rounded-2xl p-4 md:p-6">
        <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 font-medium mb-3 md:mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Official Links
        </h3>

        <div className="space-y-2 md:space-y-3">
          <a
            href="https://x.com/Basecrude"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 md:p-3 bg-[#0a0e17] border border-[#0052FF]/20 rounded-xl hover:border-[#0052FF]/50 hover:bg-[#0052FF]/5 transition-all group"
          >
            {/* X Logo */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm md:text-base">@Basecrude</p>
              <p className="text-[10px] md:text-xs text-gray-500">Follow on X</p>
            </div>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 ml-auto group-hover:text-[#0052FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="https://base.meme/coin/base:0x21FD44bE608F1D18689CDcC8861AE74571Ae8888?referrer=0xFCE86e6A615B40A620b1a666ff4B866Cd273c476"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 md:p-3 bg-gradient-to-r from-[#0052FF]/20 to-[#0052FF]/10 border border-[#0052FF]/40 rounded-xl hover:border-[#0052FF] hover:from-[#0052FF]/30 hover:to-[#0052FF]/20 transition-all group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#0052FF] to-[#0033cc] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-sm md:text-base">Base.meme</p>
              <p className="text-[10px] md:text-xs text-gray-500">Trade $OIL</p>
            </div>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0052FF] ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-br from-[#0d1525] to-[#0a0e17] border border-[#0052FF]/20 rounded-2xl p-4 md:p-6">
        <h3 className="text-xs md:text-sm uppercase tracking-wider text-gray-400 font-medium mb-3 md:mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Token Info
        </h3>
        <div className="space-y-2 md:space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-gray-500">Chain</span>
            <span className="text-xs md:text-sm text-[#0052FF] font-medium">Base</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-gray-500">Symbol</span>
            <span className="text-xs md:text-sm text-white font-medium">$OIL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-gray-500">Platform</span>
            <span className="text-xs md:text-sm text-white font-medium">Base.meme</span>
          </div>
        </div>
      </div>
    </div>
  );
}
