function drawBackground(context) {
  return new Promise(function (resolve, reject) {
    try {
      var background = new Image();
      background.src = "./assets/imgs/grass.png";

      background.onload = function () {
        var ptrn = context.createPattern(background, "repeat"); // Create a pattern with this image, and set it to "repeat".
        context.fillStyle = ptrn;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height); //
        resolve(context);
      };
    } catch (err) {
      return reject(err);
    }
  });
}

function drawText(context, text, position = { x: 0, y: 0 }) {
  // context.font = "30px Arial";
  // context.textBaseline = "middle";
  // var textWidth = context.measureText(text).width;
  // context.strokeText(text, position.x - textWidth / 2, position.y);
  return convertTextToImage(text).then((drawer) => drawer(context));
}

function draw() {
  //paint the text
  var canvas = document.getElementById("canvasSection");
  var context = canvas.getContext("2d");

  //paint the square
  var canvasSquare = document.getElementById("canvasSquare");
  var ctxSquare = canvas.getContext("2d");

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  drawBackground(context).then((context) =>
    drawText(
      context,
      "Waiting for other players...",
      withPosition("center")(context.canvas)
    )
  );
}
