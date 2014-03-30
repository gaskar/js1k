var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');
c.font = '100pt Curier';
          
var i = 0,r = 200,q=0,d=a.height,f = [1,1,1,1,1];
for(i in f)
    f[i]=[Math.random() * 700, 0, .7];

function n(){
        c.beginPath();
        c.fillStyle="#FFF";
        c.fillRect(0,0,4E4,4E4);
        c.fill();
        for(i in f){
             if(f[i][1]>=d){
                n=undefined;
            }
            hh(f[i][0] ,f[i][1] = f[i][1] + f[i][2]),h(f[i][0] ,f[i][1] = f[i][1] + f[i][2],'?S/)YDQiN.e0q"j#b2i,kOM}V7\'V>S ',"#C90")
        }
        h(-220,670,'χıίá͂¥˔£ʞ§ʴrˎʣUʡWɳʆxʜɹ£Ⱥ¥ǏÕƽĝɌyȤĸɸâɦàɡ¿ʈ³ɿđʿ¿ʨļ˫óʜîʹµ˘¿˫×˔Þ̿ĺ˳[φİ ',"#8D1919");
        c.fillText(q, d*0.7, d*0.9);
        setTimeout(n, 16);
    }
function m(x,y){
    var k = 1;
    (function n() {
        h(x, y + 0.5, 'F h@_^Dq@tMhHYDNN]4k-o6`2D1=l(p,sZ  !&\'6*=$:>>1JBOHP*I ', '#E68A00');
        k++;
        if(k < 25)
            setTimeout(n, 16);
    })();
}

a.onclick = function(e) {
    for(var i in f)
        if(0 < e.x - f[i][0] && e.x - f[i][0] < 180 && 0 < (e.y - f[i][1]) && (e.y - f[i][1]) <= 200){
            q++;
            m(f[i][0],f[i][1],i);
            f[i][1] = -r*2;
            f[i][2] += 0.3;
            f[i][0] = Math.random() * 700;
            break
        }
}

n()

function hh(x, y){
    x-=140;
    y-=140;
    var s = '؀ÆĔÍģ¬ÿĒ͓ùńļìyāÖŉÖŉÒĶðĩùńذÿĒĜ¹ĄăČ࿀ÖČĐĆÒġÖČ໚íŊŉīššêŋàŉoıũàŋ໚āÞĶÌŁõćìÍÜÔđ¸ē¾é໚Ì§´Ýđÿü ';
    var j = 1;
    for(var i = 0; i < s.length; i += 2 +(j * 8)) {
        j = s.charCodeAt(i);
        var color = s.charCodeAt(i + 1).toString(16);
        c.beginPath();
        c.fillStyle="#" + color;
        for(var b = i + 2; b < i + (j * 8); b++) {
            c.moveTo( s.charCodeAt(b++) + x, s.charCodeAt(b++) + y );

            c.bezierCurveTo(s.charCodeAt(b++) + x,
                    s.charCodeAt(b++) + y,
                    s.charCodeAt(b++) + x,
                    s.charCodeAt(b++) + y,
                    s.charCodeAt(b++)+ x,
                    s.charCodeAt(b)+ y);
        }

        c.fill();
        c.stroke();
    }

    c.closePath();

}

function h(x,y,s,p) {
    c.beginPath();
    c.fillStyle=p;
    b=0;
    c.moveTo(s.charCodeAt(b++)+x, s.charCodeAt(b++)+y);
    for(;b<s.length;b++) {
        c.bezierCurveTo(s.charCodeAt(b++)+x,
                s.charCodeAt(b++)+y,
                s.charCodeAt(b++)+x,
                s.charCodeAt(b++)+y,
                s.charCodeAt(b++)+x,
                s.charCodeAt(b)+y);
    }
    c.closePath();
    c.fill();
    c.stroke();
}
