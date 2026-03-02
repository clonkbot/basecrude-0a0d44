import { useState, useEffect } from 'react';
import Header from './components/Header';
import PriceDisplay from './components/PriceDisplay';
import MarketCapSidebar from './components/MarketCapSidebar';
import NewsSection from './components/NewsSection';
import OilBubbles from './components/OilBubbles';
import Footer from './components/Footer';

function App() {
  const [oilPrice, setOilPrice] = useState(78.45);
  const [goldPrice, setGoldPrice] = useState(2341.20);
  const [marketCap, setMarketCap] = useState(1247890);
  const [oilChange, setOilChange] = useState(2.34);
  const [goldChange, setGoldChange] = useState(-0.12);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOilPrice(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(60, Math.min(100, prev + change));
      });
      setGoldPrice(prev => {
        const change = (Math.random() - 0.5) * 5;
        return Math.max(2000, Math.min(2500, prev + change));
      });
      setMarketCap(prev => {
        const change = (Math.random() - 0.5) * 50000;
        return Math.max(500000, prev + change);
      });
      setOilChange(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(-5, Math.min(10, prev + change));
      });
      setGoldChange(prev => {
        const change = (Math.random() - 0.5) * 0.3;
        return Math.max(-3, Math.min(3, prev + change));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e17] via-[#0d1525] to-[#081020]" />
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(0, 82, 255, 0.15) 0%, transparent 50%),
                            radial-gradient(ellipse at 70% 80%, rgba(0, 82, 255, 0.1) 0%, transparent 40%)`
        }} />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 82, 255, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 82, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <OilBubbles />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main content - 3 cols */}
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              <PriceDisplay
                oilPrice={oilPrice}
                goldPrice={goldPrice}
                oilChange={oilChange}
                goldChange={goldChange}
              />
              <NewsSection />
            </div>

            {/* Sidebar - 1 col */}
            <div className="lg:col-span-1">
              <MarketCapSidebar marketCap={marketCap} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
