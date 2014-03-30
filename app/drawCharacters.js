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
    // -220,670
    c.moveTo( 74 + xoff, 97 + yoff );
    c.bezierCurveTo( 72 + xoff, 89 + yoff, 61 + xoff, 83 + yoff, 50 + xoff, 83 + yoff );
    c.bezierCurveTo( 45 + xoff, 84 + yoff, 47 + xoff, 78 + yoff, 50 + xoff, 82 + yoff );
    c.bezierCurveTo( 45 + xoff, 75 + yoff, 45 + xoff, 76 + yoff, 41 + xoff, 82 + yoff );
    c.bezierCurveTo( 42 + xoff, 79 + yoff, 45 + xoff, 82 + yoff, 41 + xoff, 83 + yoff );
    c.bezierCurveTo( 35 + xoff, 83 + yoff, 24 + xoff, 88 + yoff, 22 + xoff, 95 + yoff );
    c.bezierCurveTo( 37 + xoff, 79 + yoff, 32 + xoff, 98 + yoff, 41 + xoff, 89  + yoff);
    c.bezierCurveTo( 39 + xoff, 89 + yoff, 39 + xoff, 86 + yoff, 43 + xoff, 85 + yoff );
    c.bezierCurveTo( 42 + xoff, 94 + yoff, 48 + xoff, 86 + yoff, 46 + xoff, 98 + yoff );
    c.bezierCurveTo( 53 + xoff, 91 + yoff, 45 + xoff, 91 + yoff, 50 + xoff, 85 + yoff );
    c.bezierCurveTo( 51 + xoff, 86 + yoff, 53 + xoff, 88 + yoff, 50 + xoff, 89 + yoff );
    c.bezierCurveTo( 61 + xoff, 98 + yoff, 53 + xoff, 76 + yoff, 74 + xoff, 97  + yoff);
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

 xoff-=15;
 yoff-=14;

c.moveTo( 46+ xoff, 51+ yoff);
c.bezierCurveTo( 38+ xoff, 30+ yoff , 59+ xoff, 44+ yoff , 55+ xoff, 22+ yoff  );
c.bezierCurveTo( 67+ xoff, 24+ yoff , 54+ xoff, 33+ yoff , 65+ xoff, 34+ yoff  );
c.bezierCurveTo( 71+ xoff, 27+ yoff , 68+ xoff, 27+ yoff , 64+ xoff, 19+ yoff  );
c.bezierCurveTo( 84+ xoff, 35+ yoff , 67+ xoff, 32+ yoff , 68+ xoff, 49+ yoff  );
c.bezierCurveTo( 84+ xoff, 48+ yoff , 77+ xoff, 10+ yoff , 58+ xoff, 13+ yoff  );
c.bezierCurveTo( 42+ xoff, 14+ yoff , 34+ xoff, 53+ yoff , 46+ xoff, 51+ yoff  );



    c.fill();
    c.stroke();
    c.closePath();

}

  
// hardcodedHobbito(c,0,0);
// drawHair(c,0,0);  
hardcodedDragono(c,0,0);
//drawFire(c,0,0)
