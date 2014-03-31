i = 0,r = 99,q=0,d=a.height=600,w= a.width=600,f = [1,1,1,1,1],l=.3;
for(i in f)
    f[i]=[100 + Math.random() * 400, 0];

function n(){
    c.beginPath(),c.fillStyle='#FFF',c.fillRect(0,0,w,d)
    for(i in f)
        f[i][1]>=d?n=[]:t(e=f[i][0] ,y=f[i][1] = f[i][1] + l),h(e+5,y+10,'.3&;,7C6!A"GD@T#C D1T0M:*"5.3','C90',1)
    h(0,0,'JaHY=S2S-T/N2R-K-L)R*O-R)S#SX_%O b)Y(Y(V+U*^0V.b5[-[2U3V5X2Y=b5LJa','600',6);
    setTimeout(n, 16);
}

function m(x,y){
    var k = 1;
    +function n() {
        h(x, y, '>^>U]:o6rCf>a:LD[*i#m,^(B(;jn"qb$4 ;044/@@EFF(?', 'F90',1)
        k++<25?setTimeout(n, 16):1
    }();
}

onclick = function(e) {
    for(i in f)
        if(0 < e.clientX - f[i][0] && e.clientX - f[i][0] < r && 0 < e.clientY - f[i][1] && e.clientY - f[i][1] < r){
            m(f[i][0],f[i][1]);
            f[i][1] = -r;
            l+=.1;
            f[i][0] = 100 + Math.random() * 400;
            break
        }

}

n()

function t(x, y){
    var s = '؀1X4_$MW͓JplDN9r9r7iFbJpذMW]*POT࿀9TVQ7^9T໚Dsrc}}Cs>rf}>s໚N=i4nHQD4<8V*W-B໚4!(<VML',j = 1;
    for(u = 0; u < s.length;) {
        j=s.charCodeAt(u++);
        p=s.charCodeAt(u++);
        c.beginPath();
        c.fillStyle='#'+p.toString(16);
        for(b = u; b < u + (j * 8);) {
            c.moveTo(s.charCodeAt(b++) + x, s.charCodeAt(b++) + y), c.bezierCurveTo(s.charCodeAt(b++) + x,
                    s.charCodeAt(b++) + y,
                    s.charCodeAt(b++) + x,
                    s.charCodeAt(b++) + y,
                    s.charCodeAt(b++) + x,
                    s.charCodeAt(b++) + y);
        }
        u=b;
        c.fill();
    }

}

function h(x,y,s,p,k) {
    c.beginPath();
    c.fillStyle='#'+p;
    b=0;
    c.moveTo(s.charCodeAt(b++)*k+x, s.charCodeAt(b++)*k+y);
    for(;b<s.length;)
        c.bezierCurveTo(s.charCodeAt(b++)*k+x,
                s.charCodeAt(b++)*k+y,
                s.charCodeAt(b++)*k+x,
                s.charCodeAt(b++)*k+y,
                s.charCodeAt(b++)*k+x,
                s.charCodeAt(b++)*k+y);
    c.fill();
}
