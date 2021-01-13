function withPosition(strPosition) {
  return function (canvas) {
    if (strPosition === "center") {
      return {
        x: canvas.width / 2,
        y: canvas.height / 2,
      };
    }
  };
}
