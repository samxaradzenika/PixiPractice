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
