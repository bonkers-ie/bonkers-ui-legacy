
import { readdir } from "node:fs/promises";

// copy files to dist for publishing
Bun.write("./dist/package.json", Bun.file("./package.json"));
Bun.write("./dist/postcss.config.js", Bun.file("./postcss.config.js"));
Bun.write("./dist/tailwind.config.ts", Bun.file("./tailwind.config.ts"));
Bun.write("./dist/.eslintrc.js", Bun.file("./.eslintrc.js"));
Bun.write("./dist/.stylelintrc", Bun.file("./.stylelintrc"));
Bun.write("./dist/plugin.ts", Bun.file("./plugin.ts"));
Bun.write("./dist/README.md", Bun.file("./README.md"));
Bun.write("./dist/LICENCE", Bun.file("./LICENCE"));

const styleFiles = await readdir("./src/_styles");
for (const file of styleFiles) {
	await Bun.write(`./dist/src/_styles/${file}`, Bun.file(`./src/_styles/${file}`));
}
