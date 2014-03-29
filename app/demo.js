var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');



var i = 0,radius = 200,hobbits = [[Math.random() * 700, 0, .7], [Math.random() * 700, 0, .5], [Math.random() * 700, 0, 1.3], [Math.random() * 700, 0, 1.7], [Math.random() * 700,0, 1.9]]
    ,n = function() {
//        hardcodedDragon(c,0,0);
        c.beginPath();
        c.fillStyle="#FFF";
        c.fillRect(0,0,4E4,4E4);
        c.fill();
        for(i in hobbits){
            hardcodedHobbit(c,hobbits[i][0],hobbits[i][1] = hobbits[i][1] + hobbits[i][2])
        }
        setTimeout(n, 16);
    };
var m=function(x,y,i){
//    while(hobbits[i][1]< 300){

//    }
};

a.onclick = function(e) {
    for(var i in hobbits)
    {
        if(0 < parseInt(e.x - hobbits[i][0]) && parseInt(e.x - hobbits[i][0]) < 180 && 0 < (e.y - hobbits[i][1]) && (e.y - hobbits[i][1]) <= 200){

            m(hobbits[i][0],hobbits[i][1],i);
//            hobbits[i][1] = -radius;
//            hobbits[i][0] = Math.random() * 700;
        }

    }
};

n();