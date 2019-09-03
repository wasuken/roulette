module.exports = {
    mode: "development",
    entry: "./src/app.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};
