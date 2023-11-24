const shell = require("shelljs");

// copy files to dist for publishing
shell.cp("./package.json", "./dist/");
shell.cp("./postcss.config.js", "./dist/");
shell.cp("./tailwind.config.ts", "./dist/");
shell.cp("./.eslintrc.js", "./dist/");
shell.cp("./.stylelintrc", "./dist/");
shell.cp("./tsconfig.json", "./dist/");
shell.cp("./tsconfig.node.json", "./dist/");
shell.cp("./plugin.ts", "./dist/");
shell.mkdir("-p", "./dist/src/_styles");
shell.cp("./src/_styles/*", "./dist/src/_styles/");
