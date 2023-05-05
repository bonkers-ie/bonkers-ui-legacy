const fs = require("fs");
const path = require("path");
const { exec, execSync } = require("child_process");
// const bent = require("bent");
// const git = require("simple-git")();
// const { promisify } = require("util");

const DIR_VARIABLE = path.join(process.cwd(), "./");
const VERSION_TO_UPDATE = "patch";

// const getlog = promisify(git.log.bind(git));

// const get = bent("json", "https://registry.npmjs.org/");

const setVersionToJson = version => {
	const json = JSON.parse(fs.readFileSync(path.join(DIR_VARIABLE, "package.json"), "utf8"));

	json.version = version;

	fs.writeFileSync(path.join(DIR_VARIABLE, "package.json"), JSON.stringify(json, null, 4));
};

const run = async () => {
	if (!process.env.NPM_AUTH_TOKEN) throw new Error("Merge-release requires NPM_AUTH_TOKEN");

	const pkg = require(path.join(DIR_VARIABLE, "package.json"));

	const currentVersion = execSync(`npm view ${pkg.name} version`, { cwd: DIR_VARIABLE }).toString();
	setVersionToJson(currentVersion);

	let newVersion = execSync(`npm version --no-git-tag-version ${VERSION_TO_UPDATE}`, { cwd: DIR_VARIABLE }).toString();
	newVersion = newVersion.replace(/(\r\n|\n|\r)/gm, "");

	setVersionToJson(newVersion);

	console.log("new version:", newVersion);

	exec(`npm publish --verbose`, DIR_VARIABLE);
	exec(`git checkout package.json`);

	exec(`git tag ${newVersion}`);

	exec("git push --tags");
};

try{
	run();
}catch(e){
	console.error(e, "<------=");
}
