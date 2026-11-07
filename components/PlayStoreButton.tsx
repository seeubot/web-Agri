export default function PlayStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.agriagent.app"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black hover:bg-gray-900 text-white font-medium shadow-lg transition-all hover:scale-[1.02] ${className}`}
      aria-label="Get it on Google Play"
    >
      {/* Play icon */}
      <svg className="w-7 h-7" viewBox="0 0 512 512" fill="none">
        <path d="M325.3 234.3 104.6 13l280.8 161.2-60.1 60.1zM47 0c-4 2.6-7 7.4-7 13.6v484.8c0 6.2 3 11 7 13.6l275-256L47 0zm339 240-60 60 60 60 106-61.5c18-12.2 18-30.8 0-43L386 240zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z" fill="currentColor" />
      </svg>
      <div className="leading-tight text-left">
        <div className="text-[10px] text-white/80 uppercase tracking-wide">Get it on</div>
        <div className="text-base font-semibold">Google Play</div>
      </div>
    </a>
  );
}
