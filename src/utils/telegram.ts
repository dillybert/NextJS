declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready(): void;
        expand(): void;
        close(): void;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          show(): void;
          hide(): void;
          onClick(callback: () => void): void;
        };
      };
    };
  }
}

export const tg = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;

// Theme variables with fallbacks
export const theme = {
  bg: 'var(--tg-theme-bg-color, #fff)',
  text: 'var(--tg-theme-text-color, #000)',
  hint: 'var(--tg-theme-hint-color, #999)',
  link: 'var(--tg-theme-link-color, #2481cc)',
  button: 'var(--tg-theme-button-color, #2481cc)',
  buttonText: 'var(--tg-theme-button-text-color, #fff)',
  secondary: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
};

// Common button styles
export const buttonClasses = `
  w-full py-3.5 px-4 rounded-xl font-medium text-center text-base
  bg-[#007AFF] text-white
  disabled:opacity-60 disabled:cursor-not-allowed
  active:opacity-80 select-none
  transition-opacity
`;

// Common input styles
export const inputClasses = `
  w-full px-4 py-3.5 rounded-xl text-base
  bg-[#F2F2F7] text-[#000000]
  placeholder:text-[#8E8E93]
  focus:outline-none focus:bg-[#E5E5EA]
  transition-colors
`;

// Common card styles
export const cardClasses = `
  p-4 rounded-xl bg-white
  border border-[#E5E5EA]
`;

// Common section styles
export const sectionClasses = `
  p-4 space-y-4
`;

// Common heading styles
export const headingClasses = {
  h1: 'text-2xl font-bold text-[#000000] mb-1',
  h2: 'text-xl font-semibold text-[#000000] mb-1',
  h3: 'text-lg font-medium text-[#000000] mb-1',
};

// Common text styles
export const textClasses = {
  primary: 'text-[#000000]',
  secondary: 'text-[#8E8E93]',
  small: 'text-sm',
  base: 'text-base',
};

// Common icon styles
export const iconClasses = `
  w-6 h-6 text-[#007AFF]
`;

// Initialize Telegram WebApp
export const initTelegramWebApp = () => {
  if (tg) {
    tg.ready();
  }
}; 