import type { Config } from "tailwindcss";
import bonkersPlugin from "./plugin";

const config = {
	content: [],
	plugins: [
		bonkersPlugin
	],
} satisfies Config;

export default config;
