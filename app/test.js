var a = document.getElementById('thecanvas');
var b = document.body;
var c = a.getContext('2d');
// Initialization
c.scale(a.height/1E3,a.height/1E3);

// Reset
d=e=f=h=0;
g=[];
for(o=0;o<1E3;o++)
  g[o]=g[o+1E3]=8*Math.random()|1-1;
i=j=300;
k=20;
l=50;

// Controls (click/tap)
ontouchstart=onmousedown=function(){
  
  // If game is over, reset
  if(e){
    d=e=f=h=0;
    g=[];
    for(o=0;o<1E3;o++)
      g[o]=g[o+1E3]=8*Math.random()|1-1;
    i=j=300;
    k=20;
    l=50;
  }
  
  // If game is not over, start the game if it's not started, and jump
  else{
    h=45;
    d=1;
  }
};

// Game loop
(n=function(){

  // Background
  c.fillStyle="#E50";
  c.fillRect(0,0,4E4,4E4);
  
  // Walls
  c.fillStyle="#920";
  
  // Roof
  c.beginPath();
  c.moveTo(-k,0);
  for(o=2E3;o--;)
    o%20
    ?
    c.lineTo(40*o-k,20+4*g[o])
    :
    (c.lineTo(40*o-k,100*g[o]),c.lineTo(40*o-k-4,100*g[o]));
  c.lineTo(40*o-k,0);
  c.fill();
  
  // Ceiling
  c.beginPath();
  c.moveTo(-k,2E3);
  for(o=2E3;o--;)
    o%20
    ?
    c.lineTo(40*o-k,980-4*g[o])
    :
    (c.lineTo(40*o-k,100*(g[o]+3)),c.lineTo(40*o-k-4,100*(g[o]+3)));
  c.lineTo(40*o-k,1E3);
  c.fill();
  
  // Dragon
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
  
  // Apply gravity if the game has started
  d&&(h-=6);
  
  // Loop on the map if we are far enough
  d&&!e&&(k+=20,4E4<k&&(k-=4E4));
  
  // Increase score and game speed after each obstacle
  !d||e||(k+280)%800||(f++,20<l&&l--);
  
  // Game over
  if(50>j||950<j||!((k+300)%800)&&(j<100*g[20*~~(k/800)+20]+50||j>100*g[20*~~(k/800)+20]+250))
    e=40;
  
  // Text
  c.fillStyle="#fff";
  c.font="6em Arial";
  d&&c.fillText(f,a.width/(a.height/1E3)/2,500);
  d||c.fillText("Flappy Dragon",a.width/(a.height/1E3)/2-300,500);
  e&&c.fillText("score",a.width/(a.height/1E3)/2-80,400);
  c.fillText(e?"restart":!d?"start":"",a.width/(a.height/1E3)/2-100,600);
  
  // Loop
  setTimeout(n,l)
})()