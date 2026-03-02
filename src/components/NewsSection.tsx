import { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  content: string;
  author: string;
  handle: string;
  time: string;
  likes: number;
  retweets: number;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    content: "BREAKING: Crude oil prices surge as OPEC+ announces production cuts. $OIL looking strong heading into Q2! 🛢️📈",
    author: "Oil Market Watch",
    handle: "@OilMarketWatch",
    time: "2m",
    likes: 234,
    retweets: 89
  },
  {
    id: 2,
    content: "WTI crude breaking through key resistance levels. Technical analysis suggests bullish momentum continuing. $OIL holders eating good! 🔥",
    author: "Crypto Commodities",
    handle: "@CryptoCommodity",
    time: "15m",
    likes: 567,
    retweets: 156
  },
  {
    id: 3,
    content: "Energy sector showing strength as geopolitical tensions rise. $OIL is the play for macro traders. NFA but look at these charts! 📊",
    author: "DeFi Degen",
    handle: "@DeFiDegenAlpha",
    time: "32m",
    likes: 890,
    retweets: 234
  },
  {
    id: 4,
    content: "Base chain ecosystem growing rapidly. $OIL on Base.meme is the next 100x? Community is based and building! 🚀",
    author: "Base Maxi",
    handle: "@BaseMaxiAlpha",
    time: "1h",
    likes: 1234,
    retweets: 456
  },
  {
    id: 5,
    content: "Oil inventories report dropping faster than expected. Supply crunch incoming. $OIL is literally black gold right now! 🖤💰",
    author: "Commodity Trader",
    handle: "@CommodityTraderX",
    time: "2h",
    likes: 678,
    retweets: 189
  }
];

export default function NewsSection() {
  const [news, setNews] = useState(mockNews);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate new tweets coming in
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true);
      setTimeout(() => {
        setNews(prev => {
          const newItem: NewsItem = {
            id: Date.now(),
            content: getRandomTweet(),
            author: getRandomAuthor(),
            handle: getRandomHandle(),
            time: "Just now",
            likes: Math.floor(Math.random() * 500),
            retweets: Math.floor(Math.random() * 100)
          };
          return [newItem, ...prev.slice(0, 4)];
        });
        setIsLoading(false);
      }, 500);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Section title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-black text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Live $OIL News Feed
            </h2>
            <p className="text-[10px] md:text-xs text-gray-500">Real-time updates from X</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isLoading ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`} />
          <span className="text-[10px] md:text-xs text-green-500 font-medium">{isLoading ? 'UPDATING' : 'LIVE'}</span>
        </div>
      </div>

      {/* News feed */}
      <div className="space-y-3 md:space-y-4">
        {news.map((item, index) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#0d1525] to-[#0a0e17] border border-[#0052FF]/20 rounded-xl p-3 md:p-4 hover:border-[#0052FF]/40 transition-all"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: index === 0 && isLoading ? 'fadeIn 0.5s ease-out' : undefined
            }}
          >
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#0052FF] to-[#0033cc] flex-shrink-0 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                {item.author.charAt(0)}
              </div>

              <div className="flex-1 min-w-0">
                {/* Author info */}
                <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                  <span className="font-bold text-white text-sm md:text-base truncate">{item.author}</span>
                  <span className="text-gray-500 text-xs md:text-sm truncate">{item.handle}</span>
                  <span className="text-gray-600 text-xs md:text-sm">·</span>
                  <span className="text-gray-500 text-xs md:text-sm">{item.time}</span>
                </div>

                {/* Tweet content */}
                <p className="text-gray-300 mt-1.5 md:mt-2 text-sm md:text-base leading-relaxed">{item.content}</p>

                {/* Engagement */}
                <div className="flex items-center gap-4 md:gap-6 mt-2 md:mt-3">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0052FF] transition-colors group">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-xs">{Math.floor(Math.random() * 50)}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-green-500 transition-colors">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-xs">{item.retweets}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-xs">{item.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0052FF] transition-colors ml-auto">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getRandomTweet(): string {
  const tweets = [
    "Crude prices looking absolutely bullish! $OIL holders are in for a treat this week 🛢️🚀",
    "OPEC meeting results just dropped - expect major moves in oil markets tomorrow. $OIL 📊",
    "The Base chain is absolutely cooking. $OIL on base.meme is my biggest bag right now 💰",
    "Energy stocks ripping alongside crypto. $OIL is the perfect bridge between TradFi and DeFi 🌉",
    "Just loaded up more $OIL. This is the commodity play of the cycle. DYOR but I'm bullish! 🔥",
    "Breaking: Major refinery shutdown expected to impact supply. $OIL to the moon? 🌙"
  ];
  return tweets[Math.floor(Math.random() * tweets.length)];
}

function getRandomAuthor(): string {
  const authors = ["Oil Bull", "Crypto Degen", "Base Trader", "Commodity King", "DeFi Alpha", "Energy Maxi"];
  return authors[Math.floor(Math.random() * authors.length)];
}

function getRandomHandle(): string {
  const handles = ["@OilBullAlpha", "@CryptoDegenX", "@BaseTrader_", "@CommodityKingX", "@DeFiAlphaHQ", "@EnergyMaxi"];
  return handles[Math.floor(Math.random() * handles.length)];
}
