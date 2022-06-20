const path = require('path');
module.exports = {
    entry: './src/app.js',
    module: {
        
        rules: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
            ],
            include: /\.module\.css$/,
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /\.module\.css$/,
          },
        ],
    },
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
};