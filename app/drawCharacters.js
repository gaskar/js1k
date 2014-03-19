/**
 * Created by shushanik on 2/21/14.
 */
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function hardcodedHobbit(context,xoff, yoff){

    xoff-=140;
    yoff-=140;//TODO: substract 140 from all :P
    /*body*/
    context.beginPath();
    context.fillStyle="#5C0000";
    context.moveTo( 198 + xoff, 276 + yoff );
    context.bezierCurveTo( 153 + xoff, 205 + yoff, 291 + xoff, 172 + yoff, 255 + xoff, 274 + yoff );
    context.fill();
    context.beginPath();
    context.fillStyle="#006600"
    context.moveTo( 249 + xoff, 324 + yoff );
    context.bezierCurveTo( 316 + xoff, 236 + yoff, 121 + xoff, 257 + yoff, 214 + xoff, 329 + yoff );

    context.moveTo( 214 + xoff, 329 + yoff );
    context.bezierCurveTo( 210 + xoff, 310 + yoff, 240 + xoff, 297 + yoff, 249 + xoff, 324 + yoff);
    context.fill();
    context.stroke();

    /*goti :P */
    context.beginPath();
    context.fillStyle="#663300";
    context.moveTo( 255 + xoff, 274 + yoff );
    context.bezierCurveTo( 158 + xoff, 284 + yoff, 185 + xoff, 260 + yoff, 259 + xoff, 268 + yoff );
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle="#FFCC00";
    context.moveTo( 214 + xoff, 268 + yoff );
    context.bezierCurveTo( 272 + xoff, 262 + yoff, 210 + xoff, 289 + yoff, 214 + xoff, 268 + yoff );
    context.fill();
    context.stroke();

    /*hands _ feet*/
    context.beginPath();
    context.fillStyle="#E6CC80";

    context.moveTo( 237 + xoff, 330 + yoff );
    context.bezierCurveTo( 329 + xoff, 299 + yoff, 353 + xoff, 353 + yoff, 234 + xoff, 331 + yoff );

    context.moveTo( 224 + xoff, 329 + yoff );
    context.bezierCurveTo( 111 + xoff, 305 + yoff, 130 + xoff, 361 + yoff, 224 + xoff, 331  + yoff);
    context.fill();
    context.stroke();

    context.moveTo( 257 + xoff, 222  + yoff);
    context.bezierCurveTo( 310 + xoff, 204 + yoff, 321 + xoff, 245 + yoff, 263 + xoff, 236 + yoff );

    context.moveTo( 205 + xoff, 220 + yoff );
    context.bezierCurveTo( 212 + xoff, 273 + yoff, 184 + xoff, 275 + yoff, 190 + xoff, 233 + yoff );
    context.fill();
    context.stroke();

    /*head*/
    context.beginPath();
    /*context.moveTo( 257, 135 );
     context.bezierCurveTo( 284, 216, 191, 246, 191, 137 );*/
    context.moveTo( 247 + xoff, 176 + yoff );
    context.bezierCurveTo( 263 + xoff, 215 + yoff, 191 + xoff, 246 + yoff, 198 + xoff, 157 + yoff );
    context.fill();
    context.stroke();
    context.beginPath();


    context.moveTo( 183 + xoff, 168 + yoff );
    context.bezierCurveTo( 192 + xoff, 173 + yoff, 175 + xoff, 185 + yoff, 200 + xoff, 193 + yoff );
    context.moveTo( 183 + xoff, 167 + yoff );
    context.bezierCurveTo( 193 + xoff, 173 + yoff, 190 + xoff, 179 + yoff, 200 + xoff, 180 + yoff );
    context.fill();
    context.stroke();

    /*hair*/
    context.beginPath();
    context.fillStyle="#CC9900";

    context.moveTo( 197 + xoff, 177 + yoff );
    context.bezierCurveTo( 183 + xoff, 170 + yoff, 193 + xoff, 145 + yoff, 201 + xoff, 158 + yoff );

    context.moveTo( 257 + xoff, 173 + yoff );
    context.bezierCurveTo( 237 + xoff, 181 + yoff, 197 + xoff, 177 + yoff, 198 + xoff, 149  + yoff);

    context.moveTo( 257 + xoff, 173  + yoff);
    context.bezierCurveTo( 261 + xoff, 159 + yoff, 218 + xoff, 133 + yoff, 198 + xoff, 149 + yoff );

    context.closePath();
    context.fill()

}
function hardcodedDragon(context,xoff, yoff){
    context.beginPath();
    context.fillStyle="#8D1919";

    var xoff = 967, yoff = 305, firstX = 943, firstY = 225, secondX = 834, secondY = 165, endingX = 724, endingY = 163;

    context.moveTo( xoff, yoff );
    context.bezierCurveTo( firstX, firstY, secondX, secondY, endingX, endingY );
    context.bezierCurveTo( firstX - 273, firstY - 58, secondX - 142, secondY - 51, endingX - 6, endingY - 15 );
    context.bezierCurveTo( firstX - 268, firstY - 140, secondX - 161, secondY - 78, endingX - 97, endingY - 17 );
    context.bezierCurveTo( firstX - 297, firstY - 105, secondX - 166, secondY - 11, endingX - 91, endingY );
    context.bezierCurveTo( firstX - 373, firstY - 60, secondX - 371, secondY + 48, endingX - 279, endingY + 122 );
    context.bezierCurveTo( firstX - 355, firstY - 104, secondX - 286, secondY + 147, endingX - 92, endingY + 63 );
    context.bezierCurveTo( firstX - 329, firstY - 1, secondX - 225, secondY + 26, endingX - 76, endingY + 16 );
    context.bezierCurveTo( firstX - 304, firstY + 48, secondX - 131, secondY + 26, endingX - 44, endingY + 153 );
    context.bezierCurveTo( firstX - 196, firstY + 18, secondX - 166, secondY + 73, endingX - 27, endingY + 18 );
    context.bezierCurveTo( firstX - 215, firstY - 34, secondX - 87, secondY + 50, endingX, endingY + 59 );
    context.bezierCurveTo( firstX - 112, firstY + 89, secondX - 79, secondY - 74, endingX + 242, endingY + 141 );

    context.closePath();
    context.fill();
    context.stroke();
}

function drawFire(context, xoff, yoff){

    xoff-=270;
    yoff-=60;//TODO: substract 140 from all :P

    context.beginPath();
    context.fillStyle="#E68A00";
    context.moveTo(394 + xoff, 99 + yoff);
    context.bezierCurveTo(458 + xoff, 183 + yoff, 439 + xoff, 244 + yoff, 385 + xoff, 282 + yoff);
    context.bezierCurveTo(378 + xoff, 287 + yoff, 404 + xoff, 264 + yoff, 393 + xoff, 233 + yoff);
    context.bezierCurveTo(386 + xoff, 212 + yoff, 405 + xoff, 241 + yoff, 353 + xoff, 270 + yoff);
    context.bezierCurveTo(340 + xoff, 277 + yoff, 358 + xoff, 248 + yoff, 350 + xoff, 191 + yoff);
    context.bezierCurveTo(348 + xoff, 177 + yoff, 312 + xoff, 271 + yoff, 329 + xoff, 280 + yoff);
    context.bezierCurveTo(338 + xoff, 285 + yoff, 251 + xoff, 236 + yoff, 312 + xoff, 119 + yoff);
    context.bezierCurveTo(313 + xoff, 118 + yoff, 315 + xoff, 131 + yoff, 328 + xoff, 163 + yoff);
    context.bezierCurveTo(334 + xoff, 177 + yoff, 321 + xoff, 88 + yoff, 366 + xoff, 62 + yoff);
    context.bezierCurveTo(373 + xoff, 58 + yoff, 373 + xoff, 154 + yoff, 398 + xoff, 188 + yoff);
    context.bezierCurveTo(407 + xoff, 200 + yoff, 410 + xoff, 139 + yoff, 395 + xoff, 100 + yoff);
    context.closePath();
    context.fill();
    context.stroke();

}
//
//hardcodedHobbit(context,0,0);
//hardcodedDragon(context,-200,-140);
//drawFire(context,0,0)
