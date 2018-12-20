const path = require("path");
module.exports = {
    entry:{
        "main" : "./src/main.js"

    },
    output:{
        path:path.resolve("./dist"),
        filename : "build.js"
    },
    module:{
        rules:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.(jpg|png|gif|svg)$/,loader:'url-loader?limit = 4096'},
            {test:/\.less$/,loader:"style-loader!css-loader!less-loader"}
        ]
    }
}