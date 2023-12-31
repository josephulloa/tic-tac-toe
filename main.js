let turno = "X";
let cajas = document.getElementsByClassName("box");
const reiniciarBtn = document.getElementById("reiniciar");
let cCompu=document.getElementById("pCompu")
let pJuga=document.getElementById("pJuga")


//the event of click
for (let i = 0; i < cajas.length; i++) {
  cajas[i].addEventListener("click", userMove);
}
// function to mark the square and change the turn
function userMove(e) {
  if (!e.target.textContent) {
    e.target.textContent = turno;
    let final = validarGane();
    if (!final) {
      turno = turno === "X" ? "O" : "X";
      //show the turn
      document.getElementById("ganador").innerHTML = "Turno: " + turno;
      for (let i = 0; i < cajas.length; i++) {
        cajas[i].removeEventListener("click", userMove);
      }
      setTimeout(() => {
        pcMove();
        for (let i = 0; i < cajas.length; i++) {
          cajas[i].addEventListener("click", userMove);
        }
      }, 1500);
    }

    e.target.removeEventListener("click", userMove);
  }
}
//pc playing
function pcMove() {
  let lista = [];
  for (let i = 0; i < cajas.length; i++) {
    lista[i] = cajas[i].textContent;
  }
  const camposV = Array.from(cajas).filter((caja) => caja.textContent === "");
  
  const aleatorioindex = Math.floor(Math.random() * camposV.length);
  const seleccionC = camposV[aleatorioindex];
  seleccionC.innerHTML = turno;
  let final = validarGane();
  if (!final) {
    turno = turno === "O" ? "X" : "O";
     document.getElementById("ganador").innerHTML = "Turno: " + turno; 
  }


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
    
      if (turno=="X") {
        let pJuga = document.getElementById("pJuga")
        pJuga.textContent=Number(pJuga.textContent)+1
       }else{
        let pCompu = document.getElementById("pCompu")
        pCompu.textContent=Number(pCompu.textContent)+1

       }
      for (let i = 0; i < cajas.length; i++) {
        cajas[i].removeEventListener("click", userMove);
      }
    }
  }
  return final;
};
 
 
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