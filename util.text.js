function convertTextToImage(text) {
  return new Promise(function (resolve, reject) {
    try {
      const letterWidth = 172 / 10;
      const letterHeight = 86 / 3;

      const letterPositions = {
        a: { x: 0, y: 0 },
        b: { x: 0, y: 1 },
        c: { x: 0, y: 2 },
        d: { x: 0, y: 3 },
        e: { x: 0, y: 4 },
        f: { x: 0, y: 5 },
        g: { x: 0, y: 6 },
        h: { x: 0, y: 7 },
        i: { x: 0, y: 8 },
        j: { x: 1, y: 0 },
        k: { x: 1, y: 1 },
        l: { x: 1, y: 2 },
        m: { x: 1, y: 3 },
        n: { x: 1, y: 4 },
        o: { x: 1, y: 5 },
        p: { x: 1, y: 6 },
        q: { x: 1, y: 7 },
        r: { x: 1, y: 8 },
        s: { x: 2, y: 0 },
        t: { x: 2, y: 1 },
        u: { x: 2, y: 2 },
        v: { x: 2, y: 3 },
        w: { x: 2, y: 4 },
        x: { x: 2, y: 5 },
        y: { x: 2, y: 6 },
        z: { x: 2, y: 7 },
        "?": { x: 1, y: 9 },
        ".": { x: 2, y: 8 },
      };

      var sanitizedText = text.toLowerCase();
      var myLetters = sanitizedText.split("");

      const myLetterPositions = myLetters.map(
        (myLetter) => letterPositions[myLetter] || { y: 0, x: 9 }
      );

      const myLetterOffsets = myLetterPositions.map((pos) => ({
        x: pos.x * letterHeight,
        y: pos.y * letterWidth,
      }));

      console.log(myLetterOffsets);

      const letterTilemap = new Image();
      letterTilemap.src = "./assets/imgs/letters.png";

      letterTilemap.onload = function () {
        return resolve(function (context) {
          myLetterOffsets.map((letterOffset, index) => {
            context.drawImage(
              letterTilemap,
              letterOffset.y,
              letterOffset.x,
              letterWidth,
              letterHeight,
              letterWidth * index + 10,
              0,
              17.2,
              28.6
            );
          });
        });
      };
    } catch (err) {
      reject(err);
    }
  });
}
