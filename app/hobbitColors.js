/**
 * Created by shushanik on 2/21/14.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
/*smallest functions for drawing dragins and hobbit :(( */
function drawDragon(context){
    var startingPoints = [[82,30], [82,30], [65,28], [65,28], [53,32], [53,32], [68,33], [67,34], [71,21], [71,21], [69,22]],
        bezierPoints = [[83,28,89,28,89,31 ], [83,28,78,27,76,28], [63,20,77,20,76,28], [63,24,57,28,59,29], [52,29,56,27,59,29], [48,27,75,13,89,30], [73,28,65,26,69,22], [74,26,72,24,70,22], [70,20,69,21,70,22], [70,15,70,18,68,20], [69,20,69,21,68,20]], length = 11;
    for( var i = 0; i < length; i++ ) {
        context.moveTo( 10*startingPoints[i][0], 10*startingPoints[i][1] );
        context.bezierCurveTo( 10*bezierPoints[i][0], 10*bezierPoints[i][1], 10*bezierPoints[i][2], 10*bezierPoints[i][3], 10*bezierPoints[i][4], 10*bezierPoints[i][5] );
    }
    context.stroke();
}

function drawHobbit2(context){
    var startingPoints = [[18,17], [20,16], [25,16], [29,17], [28,19], [27,16], [25,33], [24,33], [24,33], [22,33], [18,27], [21,27], [26,22], [20,22]],
        bezierPoints = [[16,12,21,16,19,13], [23,14,20,15,20,13], [24,11,21,17,21,12], [22,19,28,14,23,12], [24,18,29,14,26,13], [27,21,19,25,19,15], [33,15,10,20,21,33], [25,29,19,28,22,33], [33,30,35,35,23,33], [11,30,13,36,22,33], [29,26,29,29,18,27], [27,26,21,29,21,27], [31,20,32,24,26,24], [21,27,18,27,19,23]], length = 14;
    for( var i = 0; i < length; i++ ) {
        context.moveTo( 10*startingPoints[i][0], 10*startingPoints[i][1] );
        context.bezierCurveTo( 10*bezierPoints[i][0], 10*bezierPoints[i][1], 10*bezierPoints[i][2], 10*bezierPoints[i][3], 10*bezierPoints[i][4], 10*bezierPoints[i][5] );
    }
    context.stroke();
}
function hardcodedHobbit(context){

    /*hair*/

    context.beginPath();
    context.strokeStyle="#CC9900";
    context.lineWidth = 3;
    context.moveTo( 181, 171 );
    context.bezierCurveTo( 160, 122, 213, 162, 190, 135 );

    context.moveTo( 203, 162 );
    context.bezierCurveTo( 232, 136, 202, 147, 200, 130 );

    context.moveTo( 248, 161 );
    context.bezierCurveTo( 237, 114, 213, 171, 214, 123 );

    context.moveTo( 290, 173 );
    context.bezierCurveTo( 224, 190, 278, 138, 232, 122 );

    context.moveTo( 276, 189 );
    context.bezierCurveTo( 242, 176, 291, 143, 259, 135 );
    context.closePath();
    context.stroke();
    /*head*/

    context.beginPath();
    context.strokeStyle="#000A00";
    context.lineWidth = 1;
    context.moveTo( 269, 162 );
    context.bezierCurveTo( 266, 211, 191, 246, 193, 152 );
    context.stroke();
    /*body*/

    context.beginPath();
    context.fillStyle="#006600";
    context.moveTo( 248, 326 );
    context.bezierCurveTo( 335, 146, 98, 204, 213, 328 );
    context.fill();
    context.closePath();
    context.moveTo( 237, 330 );
    context.bezierCurveTo( 251, 292, 189, 284, 224, 332 );



    context.stroke();
    /*goti :P */
    context.beginPath();
    context.fillStyle="#663300";
    context.moveTo( 183, 270 );
    context.bezierCurveTo( 292, 260, 294, 289, 180, 272 );
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle="#FFCC00";
    context.moveTo( 214, 268 );
    context.bezierCurveTo( 272, 262, 210, 289, 214, 268 );
    context.closePath();
    context.fill();
    context.stroke();

    /*hands _ feet*/
    context.beginPath();
    context.fillStyle="#E6CC80";

    context.moveTo( 237, 330 );
    context.bezierCurveTo( 329, 299, 353, 353, 234, 331 );

    context.moveTo( 224, 329 );
    context.bezierCurveTo( 111, 305, 130, 361, 224, 331 );
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo( 257, 222 );
    context.bezierCurveTo( 310, 204, 321, 245, 263, 236 );

    context.moveTo( 205, 220 );
    context.bezierCurveTo( 212, 273, 184, 275, 190, 233 );
    context.closePath();
    context.fill();
    context.stroke();
}


hardcodedHobbit(context);
