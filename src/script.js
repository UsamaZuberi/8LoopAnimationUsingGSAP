// Overall Animation Duartion
const duration = 10;

/* 8Loop Box Animation Starts Here */

const loopPath = {
  type: "soft",
  curviness: 1.25,
  values: [
    { x: 91, y: 0 },
    { x: 91, y: -55 },
    { x: 50, y: -150 },
    { x: -10, y: -200 },
    { x: -110, y: -230 },
    { x: -250, y: -210 },
    { x: -350, y: -130 },
    { x: -370, y: -80 },
    { x: -380, y: 0 },
    { x: -320, y: 180 },
    { x: -230, y: 230 },
    { x: -150, y: 240 },
    { x: -100, y: 230 },
    { x: -50, y: 230 },
    { x: 0, y: 200 },
    { x: 40, y: 160 },
    { x: 91, y: 0 },
    { x: 91, y: -100 },
    { x: 150, y: -150 },
    { x: 200, y: -170 },
    { x: 300, y: -230 },
    { x: 400, y: -220 },
    { x: 500, y: -190 },
    { x: 570, y: -70 },
    { x: 580, y: 0 },
    { x: 550, y: 120 },
    { x: 500, y: 200 },
    { x: 400, y: 240 },
    { x: 300, y: 240 },
    { x: 200, y: 210 },
    { x: 150, y: 150 },
    { x: 120, y: 120 },
    { x: 91, y: 0 },
  ]
};

const tween = new TimelineLite({
  onComplete: () => {
    tween.restart(true);
  }
});

tween.add(
  TweenLite.to("#loopBox", duration, {
    bezier: loopPath,
    // ease: Power1.ease,
  }),
)

/* 8Loop Box Animation Ends Here */

/* ------------------------------------------------------------- */

/* Stroke Animation Starts Here */

var svg1 = document.querySelector("#svg" + 1);
var tl = new TimelineMax({ repeat: -1 });

//create a timeline with 2 tweens that draw 2 separate strokes
tl.add(createLineTween(svg1), "-=1");

//this function creates a single tween that animates the stroke of an svg
function createLineTween(svg) {
  var pathObject = { length: 0, pathLength: svg.getTotalLength() };
  var tween = TweenLite.to(pathObject, duration, {
    length: pathObject.pathLength,
    onUpdate: drawLine,
    onUpdateParams: [pathObject, svg],
    immediateRender: true
  });
  return tween;
}

//update stroke
function drawLine(obj, svg) {
  svg.style.strokeDasharray = [obj.length, obj.pathLength].join(" ");
}

/* Stroke Animation Ends Here */







































// lets not worry about this
document.querySelector('#roof').addEventListener('click', () => gsap.to('#roof', { opacity: 0 }))