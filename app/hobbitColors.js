/**
 * Created by shushanik on 2/21/14.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

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
    context.fillStyle="#8D1919";

    var startingX = 967, startingY = 305, firstX = 943, firstY = 225, secondX = 834, secondY = 165, endingX = 724, endingY = 163;

    context.moveTo( startingX, startingY );
    context.bezierCurveTo( firstX, firstY, secondX, secondY, endingX, endingY );

//    context.moveTo( startingX - 242, startingY - 142 )
    context.bezierCurveTo( firstX - 273, firstY - 58, secondX - 142, secondY - 51, endingX - 6, endingY - 15 );

//    context.moveTo( startingX - 250, startingY - 157 )
    context.bezierCurveTo( firstX - 268, firstY - 140, secondX - 161, secondY - 78, endingX - 97, endingY - 17 );

//    context.moveTo( startingX - 339, startingY - 159 )
    context.bezierCurveTo( firstX - 297, firstY - 105, secondX - 166, secondY - 11, endingX - 91, endingY );

//    context.moveTo( startingX - 333, startingY - 142 )
    context.bezierCurveTo( firstX - 373, firstY - 60, secondX - 371, secondY + 48, endingX - 279, endingY + 122 );

//    context.moveTo( startingX - 521, startingY - 21 )
    context.bezierCurveTo( firstX - 355, firstY - 104, secondX - 286, secondY + 147, endingX - 92, endingY + 63 );

//    context.moveTo( startingX - 336, startingY - 79 )
    context.bezierCurveTo( firstX - 329, firstY - 1, secondX - 225, secondY + 26, endingX - 76, endingY + 16 );

//    context.moveTo( startingX - 320, startingY - 126 )
    context.bezierCurveTo( firstX - 304, firstY + 48, secondX - 131, secondY + 26, endingX - 44, endingY + 153 );

//    context.moveTo( startingX - 287, startingY + 9 )
    context.bezierCurveTo( firstX - 196, firstY + 18, secondX - 166, secondY + 73, endingX - 27, endingY + 18 );

//    context.moveTo( startingX - 270, startingY - 124 )
    context.bezierCurveTo( firstX - 215, firstY - 34, secondX - 87, secondY + 50, endingX, endingY + 59 );

//    context.moveTo( startingX - 242, startingY - 83 )
    context.bezierCurveTo( firstX - 112, firstY + 89, secondX - 79, secondY - 74, endingX + 242, endingY + 141 );

    context.closePath();
    context.fill();
    context.stroke();
}

function drawFire(ctx, xoff, yoff){
  ctx.beginPath();
  context.fillStyle="#E68A00";
  ctx.moveTo(394 + xoff, 99 + yoff);
  ctx.bezierCurveTo(458 + xoff, 183 + yoff, 439 + xoff, 244 + yoff, 385 + xoff, 282 + yoff);
  ctx.bezierCurveTo(378 + xoff, 287 + yoff, 404 + xoff, 264 + yoff, 393 + xoff, 233 + yoff);
  ctx.bezierCurveTo(386 + xoff, 212 + yoff, 405 + xoff, 241 + yoff, 353 + xoff, 270 + yoff);
  ctx.bezierCurveTo(340 + xoff, 277 + yoff, 358 + xoff, 248 + yoff, 350 + xoff, 191 + yoff);
  ctx.bezierCurveTo(348 + xoff, 177 + yoff, 312 + xoff, 271 + yoff, 329 + xoff, 280 + yoff);
  ctx.bezierCurveTo(338 + xoff, 285 + yoff, 251 + xoff, 236 + yoff, 312 + xoff, 119 + yoff);
  ctx.bezierCurveTo(313 + xoff, 118 + yoff, 315 + xoff, 131 + yoff, 328 + xoff, 163 + yoff);
  ctx.bezierCurveTo(334 + xoff, 177 + yoff, 321 + xoff, 88 + yoff, 366 + xoff, 62 + yoff);
  ctx.bezierCurveTo(373 + xoff, 58 + yoff, 373 + xoff, 154 + yoff, 398 + xoff, 188 + yoff);
  ctx.bezierCurveTo(407 + xoff, 200 + yoff, 410 + xoff, 139 + yoff, 395 + xoff, 100 + yoff);
  context.closePath();
  context.fill();
  ctx.stroke();

}

hardcodedHobbit(context);
hardcodedDragon(context);
drawFire(context,100,100)

