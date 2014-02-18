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
  var startingX = this.x, startingY = this.y;
  var startingPoints = [[ startingX, startingY ], [ startingX - 24, startingY ], [ startingX - 1, startingY + 1 ], [ startingX - 46, startingY - 46 ], [ startingX - 46, startingY - 46 ], [ startingX + 10, startingY - 2 ], [ startingX - 46, startingY - 47 ], [ startingX - 25, startingY - 33 ], [ startingX - 46, startingY - 47 ], [ startingX - 48, startingY - 117 ], [ startingX - 48, startingY - 117 ], [ startingX - 48, startingY - 117 ], [ startingX - 48, startingY - 117 ], [ startingX - 5, startingY - 159 ], [ startingX - 5, startingY - 159 ], [ startingX - 4, startingY - 120 ], [ startingX + 42, startingY - 58 ], [ startingX + 42, startingY - 58 ], [ startingX - 82, startingY - 56 ], [ startingX - 82, startingY - 55 ]], bezierPoints = [[ startingX + 99, startingY - 20, startingX + 79, startingY + 17, startingX - 2, startingY ], [ startingX - 114, startingY - 22, startingX - 96, startingY + 20, startingX - 24, startingY ], [ startingX + 7, startingY - 40, startingX - 39, startingY - 16, startingX - 24, startingY ], [ startingX - 57, startingY - 33, startingX - 45, startingY - 6, startingX - 33, startingY - 2 ], [ startingX - 57, startingY - 33, startingX + 2, startingY - 27, startingX + 15, startingY - 40 ], [ startingX + 28, startingY - 18, startingX + 26, startingY - 29, startingX + 15, startingY - 40 ], [ startingX - 17, startingY - 35, startingX + 2, startingY - 40, startingX + 12, startingY - 47 ], [ startingX - 36, startingY - 45, startingX + 18, startingY - 39, startingX - 7, startingY - 34 ], [ startingX - 13, startingY - 124, startingX + 17, startingY - 38, startingX + 16, startingY - 41 ], [ startingX - 53, startingY - 93, startingX + 6, startingY - 45, startingX - 3, startingY - 119 ], [ startingX - 46, startingY - 97, startingX - 5, startingY - 75, startingX - 3, startingY - 119 ], [ startingX - 44, startingY - 130, startingX - 16, startingY - 145, startingX - 3, startingY - 119 ], [ startingX - 51, startingY - 142, startingX - 42, startingY - 141, startingX - 40, startingY - 146 ], [ startingX - 14, startingY - 172, startingX - 38, startingY - 151, startingX - 40, startingY - 144 ], [ startingX, startingY - 165, startingX - 30, startingY - 156, startingX - 8, startingY - 140 ], [ startingX + 5, startingY - 137, startingX - 22, startingY - 146, startingX - 8, startingY - 139 ], [ startingX + 36, startingY - 59, startingX + 18, startingY - 78, startingX - 12, startingY - 78 ], [ startingX + 39, startingY - 41, startingX + 38, startingY - 54, startingX + 6, startingY - 60 ], [ startingX - 73, startingY - 38, startingX - 70, startingY - 48, startingX - 38, startingY - 65 ], [ startingX - 57, startingY - 63, startingX - 35, startingY - 80, startingX - 21, startingY - 78 ]], length = 20;
  for( var i = 0; i < length; i++ ) {
    c.moveTo( startingPoints[i][0], startingPoints[i][1] );
    c.bezierCurveTo( bezierPoints[i][0], bezierPoints[i][1], bezierPoints[i][2], bezierPoints[i][3], bezierPoints[i][4], bezierPoints[i][5] );
  }
  c.stroke();
}

var es = [];
for(i = 0; i < 5; i++)
  es[i] = new hobbit({x : (i + 1) * 50, y : 0});

var n = function() {

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