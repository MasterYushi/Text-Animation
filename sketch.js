let font;
let vehicles = [];
let gradColors = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background('#222222');

  gradColors = [
    color(255, 165, 0),
    color(228, 137, 35),
    color(216, 124, 50),
    color(197, 104, 73),
    color(98, 15, 163),
    color(113, 27, 153),
    color(128, 39, 142),
    color(146, 55, 127),
  ];

  var points = font.textToPoints('Run The Mouse Through Me!', 100, 350, 100, {
    sampleFactor: .21
  });

  rangeForGradient = Math.ceil(points.length / gradColors.length) + 10;
  index = 0;

  for (var i = 0, i_2 = 0; i < points.length; i++, i_2++) {
    var pt = points[i];


    if (rangeForGradient == i_2) {
      index++;
      i_2 = 0;
    }

    var vehicle = new Vehicle(pt.x, pt.y, gradColors[index]);
    vehicles.push(vehicle);
  }
}

function draw() {
  background('#222222');
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}