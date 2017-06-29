/**
 * Created by MBENBEN on 2017/6/29.
 */
var d3T=require("d3-time-format");
module.exports=function (time,formatStr) {
    return d3T.timeFormat(formatStr)(time);
}