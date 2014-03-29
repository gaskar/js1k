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