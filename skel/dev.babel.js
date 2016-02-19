import w from 'webpack';
import path from 'path';
import loaders from './loaders';

export default {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./src/js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/lib/'
	},
	plugins: [
		new w.HotModuleReplacementPlugin(),
		new w.optimize.DedupePlugin(),
		new w.optimize.OccurenceOrderPlugin()
	],
	module: { loaders }
};
