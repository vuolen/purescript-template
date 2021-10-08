const PurescriptPlugin = require("esbuild-plugin-purescript");
const path = require("path");

// Feel free to edit these options. I put in some sensible defaults for my use cases.

const common_options = {
	entryPoints: ['src/index.js'],
	bundle: true,
	outfile: 'build/dist/out.js',
    	plugins: [PurescriptPlugin()],
}

const dev_options = {
	...common_options,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('watch build failed:', error)
			else console.log('watch build succeeded:', result)
		}
	},
	sourcemap: "inline"
}

const prod_options = {
	...common_options,
	minify: true
}

require('esbuild').build(
	process.env.DEV ? dev_options : prod_options
).catch(() => process.exit(1))
