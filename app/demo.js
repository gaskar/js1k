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
            hardcodedHobbit(c,hobbits[i][0] = hobbits[i][0]+hobbits[i][2],hobbits[i][1] = hobbits[i][1] + hobbits[i][2])
        }
        hardcodedDragon(c,-220,670);
        setTimeout(n, 16);
    };
var m=function(x,y,i){
    var k = 1;
    setTimeout(function() {
        drawFire(c, x, y + 0.5);
        k++;
        if(k < 25)
            setTimeout(arguments.callee, 16);
    }, 16);
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

    console.log(str);