let turno = "X";
let cajas = document.getElementsByClassName("box");
const reiniciarBtn = document.getElementById("reiniciar");

//the event of click
for (let i = 0; i < cajas.length; i++) {
  cajas[i].addEventListener("click", userMove);
}

// function to mark the square and change the turn
function userMove(e) {
  let cajasValue = e.target.innerHTML;
  if (!cajasValue.length) {
    e.target.innerHTML = turno;

    document.getElementById("ganador").innerHTML = "Turno: " + turno;

    let final = validarGane();
    if (!final) {
      movimientosValidos();
    }

    e.target.removeEventListener("click", userMove);
  }
}

function movimientosValidos() {
  let lista = [];
  for (let i = 0; i < cajas.length; i++) {
    lista[i] = cajas[i].textContent;
  }

  const camposV = Array.from(cajas).filter((caja) => caja.textContent === "");
  console.log(camposV);

  const aleatorioindex = Math.floor(Math.random() * camposV.length);

  const seleccionC = camposV[aleatorioindex];

  console.log(seleccionC);

  seleccionC.innerHTML = "O";
  validarGane();
}

//check if there is a winner
const validarGane = () => {
  let cajas = document.getElementsByClassName("box");
  let final = false;
  //combinations to win
  let ganar = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [1, 4, 7],
    [3, 4, 5],
  ];
  //winner condisions
  for (let i = 0; i < ganar.length; i++) {
    let a = ganar[i][0];
    let b = ganar[i][1];
    let c = ganar[i][2];
    if (
      cajas[a].innerHTML == cajas[b].innerHTML &&
      cajas[a].innerHTML == cajas[c].innerHTML &&
      cajas[a].innerHTML != ""
    ) {
      // declares a winner
      document.getElementById("ganador").innerHTML = "Ganador: " + turno;
      cajas[a].style.backgroundColor = "green";
      cajas[b].style.backgroundColor = "green";
      cajas[c].style.backgroundColor = "green";
      final = true;
      for (let i = 0; i < cajas.length; i++) {
        cajas[i].removeEventListener("click", userMove);
      }
    }
  }
  return final;
};

//restart the game
const reiniciar = () => {
  turno = "X";
  for (let i = 0; i < cajas.length; i++) {
    cajas[i].innerHTML = "";
    cajas[i].addEventListener("click", userMove);
    cajas[i].style.backgroundColor = "";
  }
};

//restart button
reiniciarBtn.addEventListener("click", reiniciar);
