var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');

var i = 0,radius = 200,hobbits = [[Math.random() * 700, 0, .7], [Math.random() * 700, 0, .5], [Math.random() * 700, 0, 1.3], [Math.random() * 700, 0, 1.7], [Math.random() * 700,0, 1.9]]
    ,n = function() {

        c.beginPath();
        c.fillStyle="#FFF";
        c.fillRect(0,0,4E4,4E4);
        c.fill();
        for(i in hobbits){
            hardcodedHobbit(c,hobbits[i][0],hobbits[i][1] = hobbits[i][1] + hobbits[i][2])
        }
        hardcodedDragon(c,-220,670);
        setTimeout(n, 16);
    };
var m=function(x,y,i){
//    while(hobbits[i][1]< 300){
    var k = 1;
    setTimeout(function() {
        drawFire(c, x, y + 0.5);
        k++;
        if(k < 25)
            setTimeout(arguments.callee, 16);
    }, 16);
//    }
};

a.onclick = function(e) {
    for(var i in hobbits)
    {
        if(0 < parseInt(e.x - hobbits[i][0]) && parseInt(e.x - hobbits[i][0]) < 180 && 0 < (e.y - hobbits[i][1]) && (e.y - hobbits[i][1]) <= 200){


            m(hobbits[i][0],hobbits[i][1],i);

            setTimeout(function() {
                hobbits[i][1] = -radius*2;
                hobbits[i][2] += 0.3;
                hobbits[i][0] = Math.random() * 700;
            }, 80);
            break
        }

    }
};

n();

function hardcodedHobbit(c,xoff, yoff){

    xoff-=140;
    yoff-=140;//TODO: substract 140 from all :P
    /*body*/
    var convertedStr = '؀ÆĔÍģ¬ÿĒ͓ùńļìyāÖŉÖŉÒĶðĩùńذÿĒĜ¹ĄăČ࿀ÖČĐĆÒġÖČ໚íŊŉīššêŋàŉoıũàŋ໚āÞĶÌŁõćìÍÜÔđ¸ē¾é໚÷°ć×¿öÆ ';

    var j = 1;
    for(var i = 0; i < convertedStr.length; i += 2 +(j * 8)) {
        j = convertedStr.charCodeAt(i);
        var color = convertedStr.charCodeAt(i + 1).toString(16);
        c.beginPath();
        c.fillStyle="#" + color
        for(var k = i + 2; k < i + (j * 8); k+=8) {
            c.moveTo( convertedStr.charCodeAt(k) + xoff, convertedStr.charCodeAt(k + 1) + yoff );

            c.bezierCurveTo(convertedStr.charCodeAt(k + 2) + xoff,
                    convertedStr.charCodeAt(k + 3) + yoff,
                    convertedStr.charCodeAt(k + 4) + xoff,
                    convertedStr.charCodeAt(k + 5) + yoff,
                    convertedStr.charCodeAt(k + 6)+ xoff,
                    convertedStr.charCodeAt(k + 7)+ yoff);
        }

        c.fill();
        c.stroke();
    }

    c.closePath();

}


function hardcodedDragon(c,xoff, yoff){
    c.beginPath();
    c.fillStyle="#8D1919";
    c.moveTo( 967 + xoff, 305 + yoff );
    var convertedStr = 'ίá͂¥˔£ʞ§ʴrˎʣUʡWɳʆxʜɹ£Ⱥ¥ǏÕƽĝɌyȤĸɸâɦàɡ¿ʈ³ɿđʿ¿ʨļ˫óʜîʹµ˘¿˫×˔Þ̿ĺ˳[φİ ';
    for(var i = 0; i < convertedStr.length; i+=6) {
        c.bezierCurveTo(convertedStr.charCodeAt(i) + xoff,
                convertedStr.charCodeAt(i + 1) + yoff,
                convertedStr.charCodeAt(i + 2) + xoff,
                convertedStr.charCodeAt(i + 3) + yoff,
                convertedStr.charCodeAt(i + 4)+ xoff,
                convertedStr.charCodeAt(i + 5)+ yoff);
    }
    c.closePath();
    c.fill();
    c.stroke();
}




function drawFire(c, xoff, yoff){

    xoff-=135;
    yoff-=30;//TODO: substract 140 from all :P

    c.beginPath();
    c.fillStyle="#E68A00";
    c.moveTo(197 + xoff, 50 + yoff);
    var convertedStr = 'å[ÜzÁ½ÊÅuÁjËy±ª³|¯`®Y¥©~v<;B¤R§Y¡,·»»MÇ^ÌdÍFÆ2 ';
    for(var i = 0; i < convertedStr.length; i+=6) {
        c.bezierCurveTo(convertedStr.charCodeAt(i) + xoff,
                convertedStr.charCodeAt(i + 1) + yoff,
                convertedStr.charCodeAt(i + 2) + xoff,
                convertedStr.charCodeAt(i + 3) + yoff,
                convertedStr.charCodeAt(i + 4)+ xoff,
                convertedStr.charCodeAt(i + 5)+ yoff);
    }
    c.closePath();
    c.fill();
    c.stroke();

}