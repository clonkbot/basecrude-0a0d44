export default function Footer() {
  return (
    <footer className="relative border-t border-[#0052FF]/10 bg-[#0a0e17]/80 backdrop-blur-sm py-4 md:py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-xs md:text-sm">
          Requested by{' '}
          <a
            href="https://x.com/ehkkkow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#0052FF] transition-colors"
          >
            @ehkkkow
          </a>
          {' · '}
          Built by{' '}
          <a
            href="https://x.com/clonkbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#0052FF] transition-colors"
          >
            @clonkbot
          </a>
        </p>
      </div>
    </footer>
  );
}
