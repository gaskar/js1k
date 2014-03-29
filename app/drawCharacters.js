/**
 * Created by shushanik on 2/21/14.
 */


function hardcodedHobbit(c,xoff, yoff){

    xoff-=140;
    yoff-=140;//TODO: substract 140 from all :P
    /*body*/
    c.beginPath();
    c.fillStyle="#5C0000";
    c.moveTo( 198 + xoff, 276 + yoff );
    c.bezierCurveTo( 153 + xoff, 205 + yoff, 291 + xoff, 172 + yoff, 255 + xoff, 274 + yoff );
    c.fill();
    c.beginPath();
    c.fillStyle="#006600"
    c.moveTo( 249 + xoff, 324 + yoff );
    c.bezierCurveTo( 316 + xoff, 236 + yoff, 121 + xoff, 257 + yoff, 214 + xoff, 329 + yoff );

    c.moveTo( 214 + xoff, 329 + yoff );
    c.bezierCurveTo( 210 + xoff, 310 + yoff, 240 + xoff, 297 + yoff, 249 + xoff, 324 + yoff);
    c.fill();
    c.stroke();

    /*goti :P */
    c.beginPath();
    c.fillStyle="#663300";
    c.moveTo( 255 + xoff, 274 + yoff );
    c.bezierCurveTo( 158 + xoff, 284 + yoff, 185 + xoff, 260 + yoff, 259 + xoff, 268 + yoff );
    c.fill();
    c.stroke();

    c.beginPath();
    c.fillStyle="#FFCC00";
    c.moveTo( 214 + xoff, 268 + yoff );
    c.bezierCurveTo( 272 + xoff, 262 + yoff, 210 + xoff, 289 + yoff, 214 + xoff, 268 + yoff );
    c.fill();
    c.stroke();

    /*hands _ feet*/
    c.beginPath();
    c.fillStyle="#E6CC80";

    c.moveTo( 237 + xoff, 330 + yoff );
    c.bezierCurveTo( 329 + xoff, 299 + yoff, 353 + xoff, 353 + yoff, 234 + xoff, 331 + yoff );

    c.moveTo( 224 + xoff, 329 + yoff );
    c.bezierCurveTo( 111 + xoff, 305 + yoff, 130 + xoff, 361 + yoff, 224 + xoff, 331  + yoff);
    c.fill();
    c.stroke();

    c.moveTo( 257 + xoff, 222  + yoff);
    c.bezierCurveTo( 310 + xoff, 204 + yoff, 321 + xoff, 245 + yoff, 263 + xoff, 236 + yoff );

    c.moveTo( 205 + xoff, 220 + yoff );
    c.bezierCurveTo( 212 + xoff, 273 + yoff, 184 + xoff, 275 + yoff, 190 + xoff, 233 + yoff );
    c.fill();
    c.stroke();

    /*head*/
    c.beginPath();
    /*c.moveTo( 257, 135 );
     c.bezierCurveTo( 284, 216, 191, 246, 191, 137 );*/
    c.moveTo( 247 + xoff, 176 + yoff );
    c.bezierCurveTo( 263 + xoff, 215 + yoff, 191 + xoff, 246 + yoff, 198 + xoff, 157 + yoff );
    c.fill();
    c.stroke();
    c.beginPath();


    c.moveTo( 183 + xoff, 168 + yoff );
    c.bezierCurveTo( 192 + xoff, 173 + yoff, 175 + xoff, 185 + yoff, 200 + xoff, 193 + yoff );
    c.moveTo( 183 + xoff, 167 + yoff );
    c.bezierCurveTo( 193 + xoff, 173 + yoff, 190 + xoff, 179 + yoff, 200 + xoff, 180 + yoff );
    c.fill();
    c.stroke();

    /*hair*/
    c.beginPath();
    c.fillStyle="#CC9900";

    c.moveTo( 197 + xoff, 177 + yoff );
    c.bezierCurveTo( 183 + xoff, 170 + yoff, 193 + xoff, 145 + yoff, 201 + xoff, 158 + yoff );

    c.moveTo( 257 + xoff, 173 + yoff );
    c.bezierCurveTo( 237 + xoff, 181 + yoff, 197 + xoff, 177 + yoff, 198 + xoff, 149  + yoff);

    c.moveTo( 257 + xoff, 173  + yoff);
    c.bezierCurveTo( 261 + xoff, 159 + yoff, 218 + xoff, 133 + yoff, 198 + xoff, 149 + yoff );

    c.closePath();
    c.fill()

}

function hardcodedDragono(c,xoff, yoff){
    c.beginPath();
    c.fillStyle="#8D1919";
    c.moveTo( 967 + xoff, 305 + yoff );
    c.bezierCurveTo( 943 + xoff, 225 + yoff, 834 + xoff, 165 + yoff, 724 + xoff, 163 + yoff );
    c.bezierCurveTo( 670 + xoff, 167 + yoff, 692 + xoff, 114 + yoff, 718 + xoff, 148 + yoff );
    c.bezierCurveTo( 675 + xoff, 85 + yoff, 673 + xoff, 87 + yoff, 627 + xoff, 146 + yoff );
    c.bezierCurveTo( 646 + xoff, 120 + yoff, 668 + xoff, 154 + yoff, 633 + xoff, 163 + yoff );
    c.bezierCurveTo( 570 + xoff, 165 + yoff, 463 + xoff, 213 + yoff, 445 + xoff, 285 + yoff );
    c.bezierCurveTo( 588 + xoff, 121 + yoff, 548 + xoff, 312 + yoff, 632 + xoff, 226  + yoff);
    c.bezierCurveTo( 614 + xoff, 224 + yoff, 609 + xoff, 191 + yoff, 648 + xoff, 179 + yoff );
    c.bezierCurveTo( 639 + xoff, 273 + yoff, 703 + xoff, 191 + yoff, 680 + xoff, 316 + yoff );
    c.bezierCurveTo( 747 + xoff, 243 + yoff, 668 + xoff, 238 + yoff, 697 + xoff, 181 + yoff );
    c.bezierCurveTo( 728 + xoff, 191 + yoff, 747 + xoff, 215 + yoff, 724 + xoff, 222 + yoff );
    c.bezierCurveTo( 831 + xoff, 314 + yoff, 755 + xoff, 91 + yoff, 966 + xoff, 304  + yoff);
    c.closePath();
    c.fill();
    c.stroke();
}

function drawFireo(c, xoff, yoff){

    xoff-=135;
    yoff-=30;//TODO: substract 140 from all :P

    c.beginPath();
    c.fillStyle="#E68A00";
    c.moveTo(197 + xoff, 50 + yoff);
    c.bezierCurveTo(229 + xoff, 92 + yoff, 220 + xoff, 122 + yoff, 193 + xoff, 141 + yoff);
    c.bezierCurveTo(189 + xoff, 144 + yoff, 202 + xoff, 132 + yoff, 197 + xoff, 117 + yoff);
    c.bezierCurveTo(193 + xoff, 106 + yoff, 203 + xoff, 121 + yoff, 177 + xoff, 135 + yoff);
    c.bezierCurveTo(170 + xoff, 139 + yoff, 179 + xoff, 124 + yoff, 175 + xoff, 96 + yoff);
    c.bezierCurveTo(174 + xoff, 89 + yoff, 156 + xoff, 136 + yoff, 165 + xoff, 140 + yoff);
    c.bezierCurveTo(169 + xoff, 143 + yoff, 126 + xoff, 118 + yoff, 156 + xoff, 60 + yoff);
    c.bezierCurveTo(157 + xoff, 59 + yoff, 158 + xoff, 66 + yoff, 164 + xoff, 82 + yoff);
    c.bezierCurveTo(167 + xoff, 89 + yoff, 161 + xoff, 44 + yoff, 183 + xoff, 31 + yoff);
    c.bezierCurveTo(187 + xoff, 29 + yoff, 187 + xoff, 77 + yoff, 199 + xoff, 94 + yoff);
    c.bezierCurveTo(204 + xoff, 100 + yoff, 205 + xoff, 70 + yoff, 198 + xoff, 50 + yoff);
    c.closePath();
    c.fill();
    c.stroke();

}

//hardcodedHobbit(c,0,0);
//hardcodedDragon(c,0,0);
//drawFire(c,0,0)
