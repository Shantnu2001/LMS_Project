import type { Config } from 'tailwindcss';

const config: Config = {
  corePlugins: {
    preflight: false // to make mantine styles and tailwind styles compatible.
  },
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],

  plugins: []
};
export default config;
