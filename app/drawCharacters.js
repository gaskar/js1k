/**
 * Created by shushanik on 2/21/14.
 */

var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');


function hardcodedHobbito(c,xoff, yoff){

    xoff-=20;
    yoff-=20;//TODO: substract 140 from all :P
    /*body*/
    c.beginPath();
    c.fillStyle="#600";
    c.moveTo( 49 + xoff, 88 + yoff );
    c.bezierCurveTo( 26 + xoff, 52 + yoff, 95 + xoff, 36 + yoff, 77 + xoff, 87 + yoff );
    c.fill();
    c.stroke();


    c.beginPath();
    c.fillStyle="#353"
    c.moveTo( 74 + xoff, 112 + yoff );
    c.bezierCurveTo( 108 + xoff, 68 + yoff, 10 + xoff, 78 + yoff, 57 + xoff, 114 + yoff );

    c.moveTo( 57 + xoff, 114 + yoff );
    c.bezierCurveTo( 55 + xoff, 105 + yoff, 70 + xoff, 98 + yoff, 74 + xoff, 112 + yoff);
    c.fill();
    c.stroke();

    /*goti :P */
    c.beginPath();
    c.fillStyle="#663300";
    c.moveTo( 77 + xoff, 87 + yoff );
    c.bezierCurveTo( 29 + xoff, 92 + yoff, 42 + xoff, 80 + yoff, 79 + xoff, 84 + yoff );
    c.fill();
    c.stroke();

    c.beginPath();
    c.fillStyle="#FFCC00";
    c.moveTo( 57 + xoff, 84 + yoff );
    c.bezierCurveTo( 86 + xoff, 81 + yoff, 55 + xoff, 94 + yoff, 57 + xoff, 84 + yoff );
    c.fill();
    c.stroke();

    /*hands _ feet*/
    c.beginPath();
    c.fillStyle="#EDA";

    c.moveTo( 68 + xoff, 115 + yoff );
    c.bezierCurveTo( 114 + xoff, 99 + yoff, 125 + xoff, 125 + yoff, 67 + xoff, 115 + yoff );

    c.moveTo( 62 + xoff, 114 + yoff );
    c.bezierCurveTo( 5 + xoff, 102 + yoff, 15 + xoff, 125 + yoff, 62 + xoff, 115  + yoff);
    c.fill();
    c.stroke();

    c.beginPath();
    c.fillStyle = "#EDA";

    c.moveTo( 78 + xoff, 61  + yoff);
    c.bezierCurveTo( 105 + xoff, 52 + yoff, 110 + xoff, 72 + yoff, 81 + xoff, 68 + yoff );

    c.moveTo( 52 + xoff, 60 + yoff );
    c.bezierCurveTo( 56 + xoff, 86 + yoff, 42 + xoff, 87 + yoff, 45 + xoff, 66 + yoff );
    c.fill();
    c.stroke();


    /*head*/
    c.beginPath();
    c.fillStyle="#EDA";
    c.moveTo( 52 + xoff, 33 + yoff );
    c.bezierCurveTo( 40 + xoff, 60 + yoff, 86 + xoff, 77+ yoff, 76 + xoff, 26 + yoff );

   
    c.fill();
    c.stroke();

    c.closePath();

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

function drawHair(c,xoff, yoff){

c.beginPath();
c.fillStyle="#CC9900";

 xoff-=130;
 yoff-=125;

c.moveTo( 46+ xoff, 51+ yoff);
c.bezierCurveTo( 38.5+ xoff, 30+ yoff , 219+ xoff, 188+ yoff , 211+ xoff, 144+ yoff  );
c.bezierCurveTo( 235+ xoff, 148+ yoff , 208+ xoff, 166+ yoff , 231+ xoff, 168+ yoff  );
c.bezierCurveTo( 243+ xoff, 154+ yoff , 236+ xoff, 155+ yoff , 228+ xoff, 139+ yoff  );
c.bezierCurveTo( 269+ xoff, 170+ yoff , 235+ xoff, 164+ yoff , 237+ xoff, 199+ yoff  );
c.bezierCurveTo( 268+ xoff, 197+ yoff , 255+ xoff, 121+ yoff , 216+ xoff, 126+ yoff  );
c.bezierCurveTo( 185+ xoff, 128+ yoff , 169+ xoff, 206+ yoff , 192+ xoff, 203+ yoff  );



    c.fill();
    c.stroke();
    c.closePath();

}

  
hardcodedHobbito(c,0,0);
// drawHair(c,0,0);  
//hardcodedDragon(c,0,0);
//drawFire(c,0,0)
