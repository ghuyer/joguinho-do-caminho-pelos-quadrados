var numeroAleatorio = Math.floor(Math.random() * 3);
console.log(numeroAleatorio);

function Start() {
  document.getElementById("start").style.backgroundColor = "#32CD32";
}
function Sa() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    document.getElementById("Sa").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Sa").style.backgroundColor = "#FF0000";
  }
}

function Sb() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    document.getElementById("Sb").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Sb").style.backgroundColor = "#FF0000";
  }
}

function Sc() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    document.getElementById("Sc").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Sc").style.backgroundColor = "#FF0000";
  }
}

function As() {
  if (numeroAleatorio == 1 || numeroAleatorio == 2) {
    document.getElementById("As").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("As").style.backgroundColor = "#FF0000";
  }
}

function Aa() {
  if (numeroAleatorio <= 2) {
    document.getElementById("Aa").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Aa").style.backgroundColor = "#FF0000";
  }
}

function Ab() {
  if (numeroAleatorio == 0) {
    document.getElementById("Ab").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Ab").style.backgroundColor = "#FF0000";
  }
}
function Ac() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    document.getElementById("Ac").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Ac").style.backgroundColor = "#FF0000";
  }
}

function Bs() {
  if (numeroAleatorio <= 1 || numeroAleatorio == 3) {
    document.getElementById("Bs").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Bs").style.backgroundColor = "#FF0000";
  }
}

function Ba() {
  if (numeroAleatorio <= 3) {
    document.getElementById("Ba").style.backgroundColor = "#32CD32";
  }
}

function Bb() {
  if (numeroAleatorio <= 1 || numeroAleatorio == 3) {
    document.getElementById("Bb").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Bb").style.backgroundColor = "#FF0000";
  }
}
function Bc() {
  if (numeroAleatorio <= 3) {
    document.getElementById("Bc").style.backgroundColor = "#32CD32";
  } else {
    document.getElementById("Bc").style.backgroundColor = "#FF0000";
  }
}

function Cs() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    document.getElementById("Cs").style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    document.getElementById("Cs").style.backgroundColor = "#FF0000";
  }
}

function Ca() {
  if (numeroAleatorio == 1 || numeroAleatorio == 2) {
    document.getElementById("Ca").style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    document.getElementById("Ca").style.backgroundColor = "#FF0000";
  }
}

function Cb() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    document.getElementById("Cb").style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    document.getElementById("Cb").style.backgroundColor = "#FF0000";
  }
}

function Cc() {
  if (numeroAleatorio == 1) {
    document.getElementById("Cc").style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    document.getElementById("Cc").style.backgroundColor = "#FF0000";
  }
}
function PlayAgain() {
  document.location.reload(true);
}
