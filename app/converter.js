var regexp = /\d+/g
var nums = 'c.moveTo( 49 + xoff, 88 + yoff );\
    c.bezierCurveTo( 26 + xoff, 52 + yoff, 95 + xoff, 36 + yoff, 77 + xoff, 87 + yoff );\
    c.fill();\
    c.stroke();\
\
\
    c.beginPath();\
    c.moveTo( 74 + xoff, 112 + yoff );\
    c.bezierCurveTo( 108 + xoff, 68 + yoff, 10 + xoff, 78 + yoff, 57 + xoff, 114 + yoff );\
\
c.moveTo( 57 + xoff, 114 + yoff );\
c.bezierCurveTo( 55 + xoff, 105 + yoff, 70 + xoff, 98 + yoff, 74 + xoff, 112 + yoff);\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 77 + xoff, 87 + yoff );\
c.bezierCurveTo( 29 + xoff, 92 + yoff, 42 + xoff, 80 + yoff, 79 + xoff, 84 + yoff );\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 57 + xoff, 84 + yoff );\
c.bezierCurveTo( 86 + xoff, 81 + yoff, 55 + xoff, 94 + yoff, 57 + xoff, 84 + yoff );\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 68 + xoff, 115 + yoff );\
c.bezierCurveTo( 114 + xoff, 99 + yoff, 125 + xoff, 125 + yoff, 67 + xoff, 115 + yoff );\
\
c.moveTo( 62 + xoff, 114 + yoff );\
c.bezierCurveTo( 5 + xoff, 102 + yoff, 15 + xoff, 125 + yoff, 62 + xoff, 115  + yoff);\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 78 + xoff, 61  + yoff);\
c.bezierCurveTo( 105 + xoff, 52 + yoff, 110 + xoff, 72 + yoff, 81 + xoff, 68 + yoff );\
\
c.moveTo( 52 + xoff, 60 + yoff );\
c.bezierCurveTo( 56 + xoff, 86 + yoff, 42 + xoff, 87 + yoff, 45 + xoff, 66 + yoff );\
c.fill();\
c.stroke();\
\
c.beginPath();\
c.moveTo( 52 + xoff, 33 + yoff );\
c.bezierCurveTo( 40 + xoff, 60 + yoff, 86 + xoff, 77+ yoff, 76 + xoff, 26 + yoff );'.match(regexp);

console.log(nums);
var str = '';


var nums = [
    "1", "600", "49", "88", "26", "52", "95", "36", "77", "87",
    "2", "353",  "74", "112", "108", "68", "10", "78", "57", "114", "57", "114", "55", "105", "70", "98", "74", "112",
    "1", "630", "77", "87", "29", "92", "42", "80", "79", "84",
    "1", "FC0", "57", "84", "86", "81", "55", "94", "57", "84",
    "2", "EDA", "68", "115", "114", "99", "125", "125", "67", "115", "62", "114", "5", "102", "15", "125", "62", "115",
    "2", "EDA", "78", "61", "105", "52", "110", "72", "81", "68", "52", "60", "56", "86", "42", "87", "45", "66",
    "1", "EDA", "52", "33", "40", "60", "86", "77", "76", "26"];

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