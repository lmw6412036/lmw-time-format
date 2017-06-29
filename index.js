/**
 * Created by MBENBEN on 2017/6/29.
 */
let autoVersion = require("auto-version");//返回一个generator函数
let path = require("path");
let co = require('hprose').co;
let file = path.join(__dirname, "./package.json");
co(autoVersion(file))

var timeformat=require("./main")
console.log(timeformat(new Date(),"%Y"));