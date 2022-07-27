let Start = document.querySelector(".start");
let btn = document.querySelector(".btn");
let mainContainer = document.querySelector(".mainCont");
let Main = document.querySelector(".Main");
let turn = document.querySelector(".turnC");
let X = document.querySelector(".X");
let O = document.querySelector(".O");
let gameContainer = document.querySelector(".game");
let Boxes = document.querySelectorAll(".box");
let spans = document.querySelectorAll(".turnC span");
let counter = 1;
let w123 = document.querySelector(".S123");
let w456 = document.querySelector(".S456");
let w789 = document.querySelector(".S789");
let w147 = document.querySelector(".S147");
let w258 = document.querySelector(".S258");
let w369 = document.querySelector(".S369");
let w159 = document.querySelector(".S159");
let w357 = document.querySelector(".S357");
btn.addEventListener("click", function () {
  btn.parentNode.remove();
  X.classList.add("turn");
});
Boxes.forEach(function (e) {
  e.addEventListener("click", function () {
    if (counter % 2 !== 0) {
      spans.forEach(function (el) {
        el.classList.remove("turn");
        X.classList.add("turn");
        e.innerText = "X";
        e.classList.add("x");
      });
    } else {
      spans.forEach(function (el) {
        el.classList.remove("turn");
        O.classList.add("turn");
        e.innerText = "O";
        e.classList.add("o");
      });
    }
    counter++;

    if (counter > 9 && checker() === false) {
      counter = 9;
      mainContainer.classList.add("prevent");
      let f = document.createElement("div");
      let draw = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      draw.setAttribute("class", "draw");
      draw.innerHTML = `<span class="x">X</span><span class="o">O</span><span class="sh"> - </span>${"Draw"}`;
      f.appendChild(draw);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    } else {
      checker();
    }
  });
});
function checker() {
  if (
    (Boxes[0].innerHTML === "X" &&
      Boxes[1].innerHTML === "X" &&
      Boxes[2].innerHTML === "X") ||
    (Boxes[0].innerHTML === "O" &&
      Boxes[1].innerHTML === "O" &&
      Boxes[2].innerHTML === "O")
  ) {
    // make the animation of (1-2-3)
    mainContainer.classList.add("prevent");
    w123.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[0].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2150);
  } else if (
    (Boxes[0].innerHTML === "X" &&
      Boxes[4].innerHTML === "X" &&
      Boxes[8].innerHTML === "X") ||
    (Boxes[0].innerHTML === "O" &&
      Boxes[4].innerHTML === "O" &&
      Boxes[8].innerHTML === "O")
  ) {
    // make the animation of (1-5-9)
    mainContainer.classList.add("prevent");
    w159.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[0].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2200);
  } else if (
    (Boxes[0].innerHTML === "X" &&
      Boxes[3].innerHTML === "X" &&
      Boxes[6].innerHTML === "X") ||
    (Boxes[0].innerHTML === "O" &&
      Boxes[3].innerHTML === "O" &&
      Boxes[6].innerHTML === "O")
  ) {
    // make the animation of (1-4-7)
    mainContainer.classList.add("prevent");
    w147.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[0].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2150);
  } else if (
    (Boxes[2].innerHTML === "X" &&
      Boxes[4].innerHTML === "X" &&
      Boxes[6].innerHTML === "X") ||
    (Boxes[2].innerHTML === "O" &&
      Boxes[4].innerHTML === "O" &&
      Boxes[6].innerHTML === "O")
  ) {
    // make the animation of (3-5-7)
    mainContainer.classList.add("prevent");
    w357.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[2].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2200);
  } else if (
    (Boxes[1].innerHTML === "X" &&
      Boxes[4].innerHTML === "X" &&
      Boxes[7].innerHTML === "X") ||
    (Boxes[1].innerHTML === "O" &&
      Boxes[4].innerHTML === "O" &&
      Boxes[7].innerHTML === "O")
  ) {
    // make the animation of (2-5-8)
    mainContainer.classList.add("prevent");
    w258.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[1].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2150);
  } else if (
    (Boxes[2].innerHTML === "X" &&
      Boxes[5].innerHTML === "X" &&
      Boxes[8].innerHTML === "X") ||
    (Boxes[2].innerHTML === "O" &&
      Boxes[5].innerHTML === "O" &&
      Boxes[8].innerHTML === "O")
  ) {
    // make the animation of (3-6-9)
    mainContainer.classList.add("prevent");
    w369.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[2].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2150);
  } else if (
    (Boxes[3].innerHTML === "X" &&
      Boxes[4].innerHTML === "X" &&
      Boxes[5].innerHTML === "X") ||
    (Boxes[3].innerHTML === "O" &&
      Boxes[4].innerHTML === "O" &&
      Boxes[5].innerHTML === "O")
  ) {
    // make the animation of (4-5-6)
    mainContainer.classList.add("prevent");
    w456.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[3].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2150);
  } else if (
    (Boxes[6].innerHTML === "X" &&
      Boxes[7].innerHTML === "X" &&
      Boxes[8].innerHTML === "X") ||
    (Boxes[6].innerHTML === "O" &&
      Boxes[7].innerHTML === "O" &&
      Boxes[8].innerHTML === "O")
  ) {
    // make the animation of (7-8-9)
    mainContainer.classList.add("prevent");
    w789.style.display = "block";
    setTimeout(function () {
      let f = document.createElement("div");
      let winner = document.createElement("div");
      let btn1 = document.createElement("div");
      btn1.setAttribute("class", "btn");
      btn1.innerHTML = "Reload The Game";
      f.setAttribute("class", "final");
      winner.setAttribute("class", "winner");
      let text = Boxes[6].innerHTML;
      if (text === "X") {
        winner.innerHTML = `<span class="x">${text}</span><span class="sh"> - </span>${"Win"}`;
      } else {
        winner.innerHTML = `<span class="o">${text}</span><span class="sh"> - </span>${"Win"}`;
      }
      f.appendChild(winner);
      f.appendChild(btn1);
      document.body.prepend(f);
      btn1.addEventListener("click", function () {
        location.reload();
      });
    }, 2150);
  } else {
    return false;
  }
}

