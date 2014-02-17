var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');

var centerX = a.width / 2,
centerY = 1,
radius = 10,
i = 10;
function hobbit(val){
  this.x = val.x;
  this.y = val.y;
  this.delta = simpleNumbers[~~(Math.random() * simpleNumbers.length)];
}

var simpleNumbers = [0.7, 0.5, 1.3, 1.7];
var i = 0;
hobbit.prototype.move = function(){
  this.y = this.y + this.delta;
  c.beginPath();
  c.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
  c.fillStyle = 'green';
  c.fill();
  c.closePath();
  c.stroke();
}

var es = [];
for(i = 0; i < 5; i++)
  es[i] = new hobbit({x : (i + 1) * 50, y : 0});
d=e=f=h=0;
i=j=300;
var n = function() {
  p="fEFf&{{~_=,;=vviJ.jfVi/.OoyizyhkhEwf74)\n$fwwuvtU`"+(10<h?"iZ[*)yj:*im**y|Ktdww54#5Dy\iz[Kzi[Jiijk[e@1!":"zl]LfU{\lKtBUh{zzU66iigig5\n&iiyz{vfwwiyDfwiiE");
  c.fillStyle="#000";
  c.beginPath();
  c.moveTo(v=i-e,w=(j-=h)-e);
  for(o in p){
    y=8-2*(p.charCodeAt(o)>>4);
    z=16-2*(p.charCodeAt(o)&15);
    c.lineTo(v+=(e?y:z),w+=(e?-z:y));
  }
  c.fill();
  c.beginPath();
  c.fillStyle="#FFF";

  c.fillRect(0,0,4E4,4E4);
  c.fill();

  for(i = 0; i < 5; i++)
    es[i].move();

  setTimeout(n, 16);
}
a.onclick = function(e) {

  for(i = 0; i < 5; i++) {
    if(Math.abs(e.x - es[i].x) <= 10 && Math.abs(e.y - es[i].y) <=10) {
      es[i].y = -20;
      es[i].x = Math.random() * 400;
      es[i].delta = simpleNumbers[~~(Math.random() * simpleNumbers.length)];
    }
  }
}

n();

4