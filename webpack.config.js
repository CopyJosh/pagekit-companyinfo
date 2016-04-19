module.exports = [

	{
		entry: {
			"company-info": "./app/components/company-info.vue",
		},
		output: {
			filename: "./app/bundle/[name].js"
		},
		module: {
			loaders: [
				{ test: /\.vue$/, loader: "vue" }
			]
		}
	}

];