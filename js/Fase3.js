function startPhase3(){

  const game =
    document.getElementById(
      "gameContainer"
    );

  const back =
    document.getElementById(
      "backLink"
    );

  const player =
    document.createElement("div");

  player.className =
    "player-heart";

  player.innerHTML = "❤️";

  game.appendChild(player);

  let progress = 0;

  player.addEventListener(
    "touchmove",
    e => {

      const t =
        e.touches[0];

      player.style.left =
        t.clientX + "px";
    }
  );

  setInterval(() => {

    const obstacle =
      document.createElement("div");

    obstacle.className =
      "obstacle";

    obstacle.innerHTML =
      "🖤";

    obstacle.style.left =
      Math.random() *
      window.innerWidth + "px";

    obstacle.style.top =
      "-100px";

    game.appendChild(
      obstacle
    );

    let y = -100;

    function fall(){

      y += 6;

      obstacle.style.top =
        y + "px";

      if(y < window.innerHeight){

        requestAnimationFrame(
          fall
        );
      }else{
        obstacle.remove();
      }
    }

    fall();

  },700);

  setInterval(() => {

    const brocoli =
      document.createElement("div");

    brocoli.className =
      "brocoli";

    brocoli.innerHTML =
      "🥦";

    brocoli.style.left =
      Math.random() *
      window.innerWidth + "px";

    brocoli.style.top =
      "-100px";

    game.appendChild(
      needle
    );

    let y = -100;

    function fall(){

      y += 5;

      brocoli.style.top =
        y + "px";

      const r1 =
        brocoli.getBoundingClientRect();

      const r2 =
        player.getBoundingClientRect();

      if(
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
      ){

        brocoli.remove();

        progress++;

player.style.filter =
  `drop-shadow(0 0 ${progress * 3}px lime)`;

player.style.transform =
  `scale(${1 + progress/20})`;

        if(progress >= 10){

          sessionStorage.setItem(
            "heart_3",
            "true"
          );

          player.remove();

          back.style.display =
            "block";
        }

        return;
      }

      if(y < window.innerHeight){

        requestAnimationFrame(
          fall
        );
      }else{
        brocoli.remove();
      }
    }

    fall();

  },1200);
}
