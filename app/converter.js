var regexp = /\d+/g
var nums = 'c.beginPath();\
c.moveTo( 198 + xoff, 276 + yoff );\
c.bezierCurveTo( 153 + xoff, 205 + yoff, 291 + xoff, 172 + yoff, 255 + xoff, 274 + yoff );\
c.fill();\
c.stroke();\
\
\
c.beginPath();\
c.moveTo( 249 + xoff, 324 + yoff );\
c.bezierCurveTo( 316 + xoff, 236 + yoff, 121 + xoff, 257 + yoff, 214 + xoff, 329 + yoff );\
\
c.moveTo( 214 + xoff, 329 + yoff );\
c.bezierCurveTo( 210 + xoff, 310 + yoff, 240 + xoff, 297 + yoff, 249 + xoff, 324 + yoff);\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 255 + xoff, 274 + yoff );\
c.bezierCurveTo( 158 + xoff, 284 + yoff, 185 + xoff, 260 + yoff, 259 + xoff, 268 + yoff );\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 214 + xoff, 268 + yoff );\
c.bezierCurveTo( 272 + xoff, 262 + yoff, 210 + xoff, 289 + yoff, 214 + xoff, 268 + yoff );\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 237 + xoff, 330 + yoff );\
c.bezierCurveTo( 329 + xoff, 299 + yoff, 353 + xoff, 353 + yoff, 234 + xoff, 331 + yoff );\
\
c.moveTo( 224 + xoff, 329 + yoff );\
c.bezierCurveTo( 111 + xoff, 305 + yoff, 130 + xoff, 361 + yoff, 224 + xoff, 331  + yoff);\
c.fill();\
c.stroke();\
\
c.beginPath();\
\
c.moveTo( 257 + xoff, 222  + yoff);\
c.bezierCurveTo( 310 + xoff, 204 + yoff, 321 + xoff, 245 + yoff, 263 + xoff, 236 + yoff );\
\
c.moveTo( 205 + xoff, 220 + yoff );\
c.bezierCurveTo( 212 + xoff, 273 + yoff, 184 + xoff, 275 + yoff, 190 + xoff, 233 + yoff );\
c.fill();\
c.stroke();\
c.beginPath();\
c.moveTo( 247 + xoff, 176 + yoff );\
c.bezierCurveTo( 263 + xoff, 215 + yoff, 191 + xoff, 246 + yoff, 198 + xoff, 157 + yoff );\
c.fill();\
c.stroke();'.match(regexp);
console.log(nums);
var str = '';


var nums = [
    "1", "600", "198", "276", "153", "205", "291", "172", "255", "274",
    "2", "353", "249", "324", "316", "236", "121", "257", "214", "329", "214", "329", "210", "310", "240", "297", "249", "324",
    "1", "630", "255", "274", "158", "284", "185", "260", "259", "268",
    "1", "FC0", "214", "268", "272", "262", "210", "289", "214", "268",
    "2", "EDA", "237", "330", "329", "299", "353", "353", "234", "331", "224", "329", "111", "305", "130", "361", "224", "331",
    "2", "EDA", "257", "222", "310", "204", "321", "245", "263", "236", "205", "220", "212", "273", "184", "275", "190", "233",
    "1", "EDA", "204", "167", "180", "221", "273", "255", "252", "153"];

["198", "276", "153", "205", "291", "172", "255", "274", "249", "324", "316", "236", "121", "257", "214", "329", "214", "329", "210", "310", "240", "297", "249", "324", "255", "274", "158", "284", "185", "260", "259", "268", "214", "268", "272", "262", "210", "289", "214", "268", "237", "330", "329", "299", "353", "353", "234", "331", "224", "329", "111", "305", "130", "361", "224", "331", "257", "222", "310", "204", "321", "245", "263", "236", "205", "220", "212", "273", "184", "275", "190", "233", "247", "176", "263", "215", "191", "246", "198", "157"]
    [88, 166, 43, 95, 181, 62, 145, 164, 139, 214, 206, 126, 11, 147, 104, 219, 104, 219, 100, 200, 130, 187, 139, 214, 145, 164, 48, 174, 75, 150, 149, 158, 104, 158, 162, 152, 100, 179, 104, 158, 127, 220, 219, 189, 243, 243, 124, 221, 114, 219, 1, 195, 20, 251, 114, 221, 147, 112, 200, 94, 211, 135, 153, 126, 95, 110, 102, 163, 74, 165, 80, 123, 137, 66, 153, 105, 81, 136, 88, 47]
var j = 1;
for(var i = 0; i < nums.length; i += 2 +(j * 8)) {
    str += String.fromCharCode(parseInt(nums[i]));
    str += String.fromCharCode(parseInt('0x' + nums[i + 1]));
    j = parseInt(nums[i]);
    for(var k = i + 2; k < i + 2 + (j * 8); k++) {
        str += String.fromCharCode(parseInt(nums[k]));
    }

}
console.log(str);