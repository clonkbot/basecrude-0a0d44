import { useEffect, useState } from 'react';

interface PriceDisplayProps {
  oilPrice: number;
  goldPrice: number;
  oilChange: number;
  goldChange: number;
}

export default function PriceDisplay({ oilPrice, goldPrice, oilChange, goldChange }: PriceDisplayProps) {
  const [oilFlash, setOilFlash] = useState(false);
  const [goldFlash, setGoldFlash] = useState(false);

  useEffect(() => {
    setOilFlash(true);
    const timer = setTimeout(() => setOilFlash(false), 300);
    return () => clearTimeout(timer);
  }, [oilPrice]);

  useEffect(() => {
    setGoldFlash(true);
    const timer = setTimeout(() => setGoldFlash(false), 300);
    return () => clearTimeout(timer);
  }, [goldPrice]);

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Section title */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-[#0052FF]/50 to-transparent" />
        <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 font-medium" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Live Commodity Prices
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-[#0052FF]/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* OIL Card - Featured */}
        <div className={`relative col-span-1 md:col-span-1 bg-gradient-to-br from-[#0d1525] to-[#0a0e17] border border-[#0052FF]/40 rounded-2xl p-4 md:p-6 overflow-hidden transition-all duration-300 ${oilFlash ? 'border-[#0052FF] shadow-lg shadow-[#0052FF]/30' : ''}`}>
          {/* Oil drop decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#0052FF]">
              <path d="M50 0C50 0 20 40 20 65C20 82 33 95 50 95C67 95 80 82 80 65C80 40 50 0 50 0Z"/>
            </svg>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#0052FF] to-[#1a1a2e] flex items-center justify-center">
                  <span className="text-lg md:text-xl">🛢️</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>$OIL</h3>
                  <p className="text-[10px] md:text-xs text-gray-500">Crude Oil WTI</p>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] md:text-xs text-green-500 font-medium">LIVE</span>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  ${oilPrice.toFixed(2)}
                </div>
                <div className={`flex items-center gap-1 text-base md:text-lg font-bold ${oilChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {oilChange >= 0 ? (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {oilChange >= 0 ? '+' : ''}{oilChange.toFixed(2)}%
                </div>
              </div>

              {/* Mini chart visualization */}
              <div className="hidden sm:flex items-end gap-1 h-12 md:h-16">
                {[65, 45, 70, 55, 80, 60, 75, 85, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 md:w-2 bg-gradient-to-t from-[#0052FF] to-[#0052FF]/30 rounded-full"
                    style={{ height: `${h}%`, opacity: 0.3 + (i * 0.07) }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GOLD Card */}
        <div className={`relative bg-gradient-to-br from-[#0d1525] to-[#0a0e17] border border-amber-500/20 rounded-2xl p-4 md:p-6 overflow-hidden transition-all duration-300 ${goldFlash ? 'border-amber-500/50 shadow-lg shadow-amber-500/20' : ''}`}>
          <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 opacity-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="text-amber-500">
              <rect x="20" y="30" width="60" height="40" rx="5"/>
              <rect x="30" y="20" width="40" height="15" rx="3"/>
            </svg>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                  <span className="text-lg md:text-xl">🪙</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>$GOLD</h3>
                  <p className="text-[10px] md:text-xs text-gray-500">Gold XAU/USD</p>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] md:text-xs text-green-500 font-medium">LIVE</span>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  ${goldPrice.toFixed(2)}
                </div>
                <div className={`flex items-center gap-1 text-sm md:text-base font-bold ${goldChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {goldChange >= 0 ? (
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {goldChange >= 0 ? '+' : ''}{goldChange.toFixed(2)}%
                </div>
              </div>

              {/* Mini chart visualization */}
              <div className="hidden sm:flex items-end gap-1 h-10 md:h-12">
                {[55, 60, 45, 70, 65, 50, 75, 60, 80, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 md:w-1.5 bg-gradient-to-t from-amber-500 to-amber-500/30 rounded-full"
                    style={{ height: `${h}%`, opacity: 0.3 + (i * 0.07) }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
