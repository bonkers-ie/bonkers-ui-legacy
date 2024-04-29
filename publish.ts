
const DIR_VARIABLE = `${process.cwd()}/dist`;
const VERSION_TO_UPDATE = "patch";

const setVersionToJson = async(version: string) => {
	const packageFile = Bun.file(`${DIR_VARIABLE}/package.json`);
	const json = await packageFile.json();

	json.version = version.replace(/(\r\n|\n|\r)/gm, "");

	await Bun.write(`${DIR_VARIABLE}/package.json`, JSON.stringify(json, null, 4));
};

async function run() {
	if (!process.env.NPM_AUTH_TOKEN) throw new Error("Merge-release requires NPM_AUTH_TOKEN");
	Bun.spawnSync(["bun", "./postbuild.ts"]);

	const pkgFile = Bun.file(`${DIR_VARIABLE}/package.json`);
	const pkg = await pkgFile.json();

	const currentVersionProc = Bun.spawn(["npm", "view", pkg.name, "version"], {
		cwd: DIR_VARIABLE
	});
	const currentVersion = await new Response(currentVersionProc.stdout).text();

	console.log("currrent version:", currentVersion.replace(/(\r\n|\n|\r)/gm, ""));
	await setVersionToJson(currentVersion);

	const newVersionProc = Bun.spawn(["npm", "version","--no-git-tag-version", VERSION_TO_UPDATE], {
		cwd: DIR_VARIABLE
	});

	const newVersion = await new Response(newVersionProc.stdout).text();
	console.log("new version:", newVersion.replace(/(\r\n|\n|\r)/gm, ""));

	await setVersionToJson(newVersion);

	Bun.spawn(["npm", "set", "//registry.npmjs.org/:_authToken=", process.env.NPM_AUTH_TOKEN]);
	Bun.spawn(["npm", "publish", "--verbose", DIR_VARIABLE]);
	Bun.spawn(["git", "checkout", "package.json"]);
	Bun.spawn(["git", "tag", newVersion]);
	Bun.spawn(["git", "push", "--tags"]);

}

try {
	run();
} catch (e) {
	console.error(e, "<------=");
}
