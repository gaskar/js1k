var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');


var i = 0,r = 200,q=0,d=a.height,f = [1,1,1,1,1];
for(i in f)
    f[i]=[Math.random() * 700, 0, .7];

function n(){
    c.beginPath(),c.fillStyle="#FFF",c.fillRect(0,0,d,d),c.font = '6em Arial'
    for(i in f)
        f[i][1]>=d?n=[]:1,t(f[i][0] ,f[i][1] = f[i][1] + f[i][2]),h(f[i][0]-15,(f[i][1] = f[i][1] + f[i][2])-14,'.3&;,7C6!A"GD@T#C D1T0M:*"5.3 ',"#C90")
    h(0,0,'JaHY=S2S-T/N2R-K-L)R*O-R)S#SX_%O b)Y(Y(V+U*^0V.b5[-[2U3V5X2Y=b5LJa',"#8D1919");
    c.fillText(q, d*.8, d*.8);
    setTimeout(n, 16);
}

function m(x,y){
    var k = 1;
    (function n() {
        h(x, y + 0.5, 'F h@_^Dq@tMhHYDNN]4k-o6`2D1=l(p,sZ  !&(6*=$:>>1JBOHP*I ', '#E68A00');
        k++;
        k<25?setTimeout(n, 16):1
    })();
}

onclick = function(e) {
    for(var i in f)
        if(0 < e.x - f[i][0] && e.x - f[i][0] < 180 && 0 < (e.y - f[i][1]) && (e.y - f[i][1]) < 200){
            q++;
            m(f[i][0],f[i][1]);
            f[i][1] = -r*2;
            f[i][2] += 0.3;
            f[i][0] = Math.random() * 700;
            break
        }
}

n()

function t(x, y){
    x-=20;
    y-=20;
    var s = '؀1X4_$MW͓JplDN9r9r7iFbJpذMW]*POT࿀9TVQ7^9T໚Dsrc}}Cs>rf}>s໚N=i4nHQD4<8V*W-B໚4!(<VML',j = 1;
    for(u = 0; u < s.length; u += 2 +(j * 8)) {
        j = s.charCodeAt(u);
        p='#'+s.charCodeAt(u + 1).toString(16);
        c.beginPath();
        c.fillStyle=p;
        for(b = u + 2; b < u + (j * 8);)
            c.moveTo( s.charCodeAt(b++) + x, s.charCodeAt(b++) + y ),c.bezierCurveTo(s.charCodeAt(b++)+x,
                    s.charCodeAt(b++)+y,
                    s.charCodeAt(b++)+x,
                    s.charCodeAt(b++)+y,
                    s.charCodeAt(b++)+x,
                    s.charCodeAt(b++)+y);

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
    for(;b<s.length;)
        c.bezierCurveTo(s.charCodeAt(b++)+x,
                s.charCodeAt(b++)+y,
                s.charCodeAt(b++)+x,
                s.charCodeAt(b++)+y,
                s.charCodeAt(b++)+x,
                s.charCodeAt(b++)+y);
    c.closePath();
    c.fill();
    c.stroke();
}
