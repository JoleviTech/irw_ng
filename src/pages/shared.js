export const container = 'mx-auto max-w-7xl px-5 lg:px-10';
export const section = 'py-16 lg:py-24';
export const btnPrimary = 'inline-flex items-center justify-center rounded-full bg-[#0C000E] px-6 py-3 text-sm font-semibold text-white no-underline transition-all hover:bg-[#251B27] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E]';
export const btnSecondary = 'inline-flex items-center justify-center rounded-full border border-[#0C000E]/20 px-6 py-3 text-sm font-semibold text-[#0C000E] no-underline transition-all hover:border-[#0C000E] hover:bg-[#0C000E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E]';
export const btnGreen = 'inline-flex items-center justify-center rounded-full bg-[#00FF00] px-6 py-3 text-sm font-semibold text-[#0C000E] no-underline transition-all hover:bg-[#0C000E] hover:text-[#00FF00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E]';
export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap');
.irw { font-family: 'Instrument Sans', system-ui, sans-serif; }
.irw .display { font-family: 'Bricolage Grotesque', 'Instrument Sans', sans-serif; letter-spacing: -0.02em; }
.irw a { color: inherit; text-decoration: none !important; }
.irw a:focus-visible, .irw button:focus-visible, .irw input:focus-visible, .irw select:focus-visible, .irw textarea:focus-visible { outline: 2px solid #00FF00; outline-offset: 3px; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@keyframes floaty { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)); } 50% { transform: translateY(-8px) rotate(var(--r,0deg)); } }
@keyframes spin-slow { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .irw * { animation: none !important; transition: none !important; } }
`;