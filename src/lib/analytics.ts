interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === "undefined") return;

  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track Page Views
export const pageview = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track Events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
