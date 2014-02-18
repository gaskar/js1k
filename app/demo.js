var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');

var i = 0,radius = 10,hobbits = [[Math.random() * 400, 0, .7], [Math.random() * 400, 0, .5], [Math.random() * 400, 0, 1.3], [Math.random() * 400, 0, 1.7], [Math.random() * 400,0, 1.9]]
,n = function() {
  c.beginPath();
  c.fillStyle="#FFF";
  c.fillRect(0,0,4E4,4E4);
  c.fill();

  for(i in hobbits) c.beginPath(), c.arc(hobbits[i][0], hobbits[i][1] = hobbits[i][1] + hobbits[i][2], radius, 0, 2 * 3.14, 0), c.stroke()

  setTimeout(n, 16);
}
onclick = function(e) {
  for(i in hobbits)
    if(Math.abs(e.x - hobbits[i][0]) <= radius && Math.abs(e.y - hobbits[i][1]) <= radius) hobbits[i][1] = -radius, hobbits[i][0] = Math.random() * 400;
}

n();