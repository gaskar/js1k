/**
 * Created by shushanik on 2/21/14.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
/*smallest functions for drawing dragins and hobbit :(( */
function drawDragon2(context){
    var startingPoints = [[82,30], [82,30], [65,28], [65,28], [53,32], [53,32], [68,33], [67,34], [71,21], [71,21], [69,22]],
        bezierPoints = [[83,28,89,28,89,31 ], [83,28,78,27,76,28], [63,20,77,20,76,28], [63,24,57,28,59,29], [52,29,56,27,59,29], [48,27,75,13,89,30], [73,28,65,26,69,22], [74,26,72,24,70,22], [70,20,69,21,70,22], [70,15,70,18,68,20], [69,20,69,21,68,20]], length = 11;
    context.beginPath();
    context.fillStyle="#CC0000";
    for( var i = 0; i < length; i++ ) {
        context.moveTo( 10*startingPoints[i][0], 10*startingPoints[i][1] );
        context.bezierCurveTo( 10*bezierPoints[i][0], 10*bezierPoints[i][1], 10*bezierPoints[i][2], 10*bezierPoints[i][3], 10*bezierPoints[i][4], 10*bezierPoints[i][5] );
    }
    context.fill();
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

    /*body*/
    context.beginPath();
    context.fillStyle="#5C0000";
    context.moveTo( 198, 276 );
    context.bezierCurveTo( 153, 205, 291, 172, 255, 274 );
    context.fill();
    context.beginPath();
    context.fillStyle="#006600"
    context.moveTo( 249, 324 );
    context.bezierCurveTo( 316, 236, 121, 257, 214, 329 );

    context.moveTo( 214, 329 );
    context.bezierCurveTo( 210, 310, 240, 297, 249, 324);
    context.fill();
    context.stroke();

    /*goti :P */
    context.beginPath();
    context.fillStyle="#663300";
    context.moveTo( 255, 274 );
    context.bezierCurveTo( 158, 284, 185, 260, 259, 268 );
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle="#FFCC00";
    context.moveTo( 214, 268 );
    context.bezierCurveTo( 272, 262, 210, 289, 214, 268 );
    context.fill();
    context.stroke();

    /*hands _ feet*/
    context.beginPath();
    context.fillStyle="#E6CC80";

    context.moveTo( 237, 330 );
    context.bezierCurveTo( 329, 299, 353, 353, 234, 331 );

    context.moveTo( 224, 329 );
    context.bezierCurveTo( 111, 305, 130, 361, 224, 331 );
    context.fill();
    context.stroke();

    context.moveTo( 257, 222 );
    context.bezierCurveTo( 310, 204, 321, 245, 263, 236 );

    context.moveTo( 205, 220 );
    context.bezierCurveTo( 212, 273, 184, 275, 190, 233 );
    context.fill();
    context.stroke();

    /*head*/
    context.beginPath();
    /*context.moveTo( 257, 135 );
    context.bezierCurveTo( 284, 216, 191, 246, 191, 137 );*/
    context.moveTo( 247, 176 );
    context.bezierCurveTo( 263, 215, 191, 246, 198, 157 );
    context.fill();
    context.stroke();
    context.beginPath();


    context.moveTo( 183, 168 );
    context.bezierCurveTo( 192, 173, 175, 185, 200, 193 );
    context.moveTo( 183, 167 );
    context.bezierCurveTo( 193, 173, 190, 179, 200, 180 );
    context.fill();
    context.stroke();

    /*hair*/
    context.beginPath();
    context.fillStyle="#CC9900";

    context.moveTo( 197, 177 );
    context.bezierCurveTo( 183, 170, 193, 145, 201, 158 );

    context.moveTo( 257, 173 );
    context.bezierCurveTo( 237, 181, 197, 177, 198, 149 );

    context.moveTo( 257, 173 );
    context.bezierCurveTo( 261, 159, 218, 133, 198, 149 );

    context.closePath();
    context.fill()

}
function hardcodedDragon(context){
    context.beginPath();
    context.strokeStyle="#8D1919";

    context.moveTo( 615, 207 );
    context.bezierCurveTo( 769, 220, 864, 296, 908, 357 );

    context.moveTo( 615, 207 );
    context.bezierCurveTo( 584, 192, 633, 166, 641, 193 );

    context.moveTo( 531, 189 );
    context.bezierCurveTo( 593, 117, 576, 106, 643, 193 );

    context.moveTo( 531, 189 );
    context.bezierCurveTo( 550, 168, 580, 194, 553, 205 );

    context.moveTo( 326, 347 );
    context.bezierCurveTo( 387, 255, 498, 217, 553, 205 );

    context.moveTo( 326, 347 );
    context.bezierCurveTo( 535, 172, 376, 419, 538, 284 );

    context.moveTo( 562, 223 );
    context.bezierCurveTo( 549, 231, 497, 269, 538, 284 );

    context.moveTo( 562, 223 );
    context.bezierCurveTo( 539, 347, 640, 255, 652, 407 );

    context.moveTo( 612, 228 );
    context.bezierCurveTo( 576, 343, 671, 246, 652, 407 );

    context.moveTo( 612, 228 );
    context.bezierCurveTo( 576, 343, 671, 246, 652, 407 );

    context.moveTo( 612, 228 );
    context.bezierCurveTo( 639, 245, 668, 272, 645, 283 );

    context.moveTo( 907, 355 );
    context.bezierCurveTo( 550, 114, 819, 380, 645, 283 );

    context.closePath();
    context.fill();
    context.stroke();
}

hardcodedHobbit(context);
//hardcodedDragon(context);
