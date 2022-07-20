const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	module: {
		rules: [
			{
				test: /\.?js|\.?jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader",
				options: {
					name: "/public/images/[name].[ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "./public", "index.html"),
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "build"),
		//publicPath: path.resolve(__dirname, "public"),
		clean: true,
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
};
