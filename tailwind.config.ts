import type { Config } from "tailwindcss";
import bonkersPlugin from "./plugin";

const config = {
	content: [
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	plugins: [
		bonkersPlugin
	],
} satisfies Config;

export default config;
