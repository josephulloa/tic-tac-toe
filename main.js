let jugador1 = true;
let caja = document.getElementsByClassName("box");

let aleatorio = Math.floor(Math.random() * 9);

for (let i = 0; i < caja.length; i++) {
  caja[i].addEventListener("click", userMove);
}

function userMove(e) {
  let cajaValue = e.target.innerHTML;
  if (!cajaValue.length) {
    e.target.innerHTML = jugador1 = "X";
    //  'O';jugador1 =!jugador1;
  }

  validar(caja);
}


function validar(caja) {
  for (let i = 0; i < 9; i++) {
    let valor = caja[i].textContent;
    if (valor == "") {
      caja[aleatorio].innerHTML = "O";
    }
  }
}

// const computadoraMove= {
//   if (valor="") {
//   do{ elegir= Math.floor(Math.random() * 9);
//   } while ([elegir])!="" {
    
//   }
//  }
  
  
 
}
















// function validar() {
//   let validar = ingresar.value;
//   if (validar.length == 0) {

//   }

// }

// function computadora(jugador1= !jugador1) {

//   setTimeout.aleatorio(computadora, 1500);
// }
