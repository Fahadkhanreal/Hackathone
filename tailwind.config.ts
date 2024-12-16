import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
     bannerImg : "url(/y.png)",
     headImg : "url(/un1.png)",
     menImg : "url(/lk.png)",
     brImg : "url(/fr1.png)",
     bagImg : "url(/kg1.png)",
     perImg : "url(/per.png)",
     loc : "url(/loc.png)",
     ema: "url(/ema.png)"
      },
      colors: {
        primary : "#ff9f0d" ,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
