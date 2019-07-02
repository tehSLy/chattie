const styles = [
	"withStyles",
	"makeStyles",
	"createMuiTheme"
]

module.exports = {
	presets: ["@babel/typescript", "@babel/preset-react"],
	plugins: [
		"@babel/plugin-proposal-class-properties",
		[
			"babel-plugin-transform-imports",
			{
				"@material-ui/core": {
					transform: function(importName, matches) {
						if(styles.includes(importName)){
							return `@material-ui/core/styles/${importName}`;
						}

						return `@material-ui/core/${importName}`;
					},
					preventFullImport: true
				},
				"@material-ui/icons": {
					transform: "@material-ui/icons/esm/${member}",
					preventFullImport: true
				},
				"ramda": {
					transform: "ramda/es/${member}",
					preventFullImport: true
				}
			}
		]
	]
};