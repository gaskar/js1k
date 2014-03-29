var regexp = /\d+/g
var nums = 'c.bezierCurveTo( 943 + xoff, 225 + yoff, 834 + xoff, 165 + yoff, 724 + xoff, 163 + yoff );\
c.bezierCurveTo( 670 + xoff, 167 + yoff, 692 + xoff, 114 + yoff, 718 + xoff, 148 + yoff );\
c.bezierCurveTo( 675 + xoff, 85 + yoff, 673 + xoff, 87 + yoff, 627 + xoff, 146 + yoff );\
c.bezierCurveTo( 646 + xoff, 120 + yoff, 668 + xoff, 154 + yoff, 633 + xoff, 163 + yoff );\
c.bezierCurveTo( 570 + xoff, 165 + yoff, 463 + xoff, 213 + yoff, 445 + xoff, 285 + yoff );\
c.bezierCurveTo( 588 + xoff, 121 + yoff, 548 + xoff, 312 + yoff, 632 + xoff, 226  + yoff);\
c.bezierCurveTo( 614 + xoff, 224 + yoff, 609 + xoff, 191 + yoff, 648 + xoff, 179 + yoff );\
c.bezierCurveTo( 639 + xoff, 273 + yoff, 703 + xoff, 191 + yoff, 680 + xoff, 316 + yoff );\
c.bezierCurveTo( 747 + xoff, 243 + yoff, 668 + xoff, 238 + yoff, 697 + xoff, 181 + yoff );\
c.bezierCurveTo( 728 + xoff, 191 + yoff, 747 + xoff, 215 + yoff, 724 + xoff, 222 + yoff );\
c.bezierCurveTo( 831 + xoff, 314 + yoff, 755 + xoff, 91 + yoff, 966 + xoff, 304  + yoff);'.match(regexp);
var str = '';
for(var i = 0; i < nums.length; i++) {
    str += String.fromCharCode(nums[i]);
}

console.log(str);