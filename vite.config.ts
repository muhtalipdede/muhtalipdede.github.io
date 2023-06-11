import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

const config: UserConfig = {
  base: "/",
  plugins: [sveltekit(), SvelteKitPWA()],
};

export default config;
