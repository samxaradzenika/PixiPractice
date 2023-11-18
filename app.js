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

// const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();

// rectangle
//   .beginFill(0xaa33bb)
//   .lineStyle(4, 0xffea00, 1)
//   .drawRect(200, 200, 100, 120)
//   .endFill();

// app.stage.addChild(rectangle);

// const poly = new Graphics();

// poly
//   .beginFill(0xff66ff)
//   .lineStyle(4, 0xffea00, 1)
//   .drawPolygon([600, 50, 700, 150, 800, 300, 400, 400])
//   .endFill();

// app.stage.addChild(poly);

// const circle = new Graphics();

// circle.beginFill(0x22aacc).drawCircle(400, 200, 80).endFill();

// app.stage.addChild(circle);

// const line = new Graphics();
// line.lineStyle(5, 0xffea00, 1).moveTo(900, 100).lineTo(900, 600);

// app.stage.addChild(line);

// const torus = new Graphics();

// torus.beginFill(0xfffddd).drawTorus(100, 700, 80, 100, 0).endFill();

// app.stage.addChild(torus);

// const star = new Graphics();
// star.beginFill(0xadadad).drawStar(900, 700, 30, 70).endFill();

// app.stage.addChild(star);

// const style = new PIXI.TextStyle({
//   fontFamily: "Montserrat",
//   fontSize: 48,
//   fill: "deepskyblue",
//   stroke: "#ffffff",
//   strokeThickness: 3,
//   dropShadow: true,
// });

// const myText = new PIXI.Text("hello world", style);

// app.stage.addChild(myText);

// myText.text = "Text Changed!!";

// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   const rect = new Graphics();

//   rect
//     .beginFill(0xaa33bb)
//     .drawRect(
//       Math.random() * app.screen.width,
//       Math.random() * app.screen.height,
//       11,
//       12
//     )
//     .endFill();

//   app.stage.addChild(rect);
// }

// const char1Texture = PIXI.Texture.from('./images/char1.png');
// const char1Sprite = new PIXI.Sprite(char1Texture);

// const char1Sprite = PIXI.Sprite.from("./images/char1.png");
// app.stage.addChild(char1Sprite);

// char1Sprite.width = 200;
// char1Sprite.height = 200;

// char1Sprite.scale.set(2, 2);

// char1Sprite.x = 20
// char1Sprite.y = 30

// char1Sprite.position.set(590, 590);

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   char1Sprite.x += 1;
// }

// char1Sprite.rotation = 1;

// char1Sprite.anchor.x = 0.5;
// char1Sprite.anchor.y = 0.5;

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   char1Sprite.rotation += 0.1;
// }
// char1Sprite.interactive = true;
// char1Sprite.buttonMode = true;
// char1Sprite.on("pointerdown", function () {
//   char1Sprite.scale.x += 0.1;
//   char1Sprite.scale.y += 0.1;
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") char1Sprite.x += 10;
//   if (e.key === "ArrowLeft") char1Sprite.x -= 10;
// });

// const container = new PIXI.Container();

// const char2Sprite = PIXI.Sprite.from("./images/char2.png");

// container.addChild(char2Sprite);

// const char3Sprite = PIXI.Sprite.from("./images/char2.png");

// container.addChild(char3Sprite);

// app.stage.addChild(container);

// char2Sprite.position.set(1000, 500);

// container.x = 100;
// const loader = PIXI.Loader.shared;

// loader
//   .add("tileset", "./images/tileset.png")
//   //.add('char5Texture', './images/char5.png')
//   .load(setup);

// function setup(loader, resources) {
//   const texture1 = resources.tileset.texture;
//   const rect1 = new PIXI.Rectangle(176, 160, 76, 86);
//   texture1.frame = rect1;
//   const spr1 = new PIXI.Sprite(texture1);
//   spr1.scale.set(2, 2);
//   app.stage.addChild(spr1);

//   const texture2 = new PIXI.Texture(resources.tileset.texture);
//   const rect2 = new PIXI.Rectangle(190, 593, 77, 84);
//   texture2.frame = rect2;
//   const spr2 = new PIXI.Sprite(texture2);
//   spr2.scale.set(2, 2);
//   spr2.position.set(200, 200);
//   app.stage.addChild(spr2);
// }

// const loader = PIXI.Loader.shared;

// loader.add("tileset", "./images/drags.json").load(setup);

// function setup(loader, resources) {
//   const dragsTexture = PIXI.Texture.from("drags.png");
//   const dragSprite = new PIXI.Sprite(dragsTexture);
//   app.stage.addChild(dragSprite);
// }
