const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  antialias: false,
  transparent: false,
});

app.renderer.backgroundColor = 0x23395d;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();

rectangle
  .beginFill(0xaa33bb)
  .lineStyle(4, 0xffea00, 1)
  .drawRect(200, 200, 100, 120)
  .endFill();

app.stage.addChild(rectangle);

const poly = new Graphics();

poly
  .beginFill(0xff66ff)
  .lineStyle(4, 0xffea00, 1)
  .drawPolygon([600, 50, 700, 150, 800, 300, 400, 400])
  .endFill();

app.stage.addChild(poly);

const circle = new Graphics();

circle.beginFill(0x22aacc).drawCircle(400, 200, 80).endFill();

app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(5, 0xffea00, 1).moveTo(900, 100).lineTo(900, 600);

app.stage.addChild(line);

const torus = new Graphics();

torus
  .beginFill(0xfffddd)
  .drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
  .endFill();

app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xadadad).drawStar(900, 700, 30, 70).endFill();

app.stage.addChild(star);

const style = new PIXI.TextStyle({
  fontFamily: "Montserrat",
  fontSize: 48,
  fill: "deepskyblue",
  stroke: "#ffffff",
  strokeThickness: 3,
  dropShadow: true,
});

const myText = new PIXI.Text("hello world", style);

app.stage.addChild(myText);

myText.text = "Text Changed!!";

myText.style.wordWrap = true;
myText.style.wordWrapWidth = 100;
