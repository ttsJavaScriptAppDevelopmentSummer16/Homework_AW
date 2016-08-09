var gravity = 0.5;
var time = 0;

function Particle (startX, startY) {
  this.x = startX;
  this.y = startY;
};

var particles = [];

Particle.prototype = {
  getVelocity: function(){
    return time * gravity;
  },
  move: function(){
    this.y += this.getVelocity();
    this.y = Math.min(this.y, 500);
    if (this.y >= 500){
      console.log('bottom');
    }
  }
}


for (var i = 0; i < 100; i++) {
  var particle = new Particle(i, Math.random()*500);
  particles.push(particle);
};



setInterval(function(){
  time++;
  particles.filter(function(particles){
    return particles.y < 500;
  })
  .forEach(function(p){
    p.move();
  })
}, 100)
