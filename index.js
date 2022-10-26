var numeroAleatorio = Math.floor(Math.random() * 3);
var start = document.getElementById("start");
var sa = document.getElementById("Sa");
var sb = document.getElementById("Sb");
var sc = document.getElementById("Sc");
var as = document.getElementById("As");
var aa = document.getElementById("Aa");
var ab = document.getElementById("Ab");
var ac = document.getElementById("Ac");
var bs = document.getElementById("Bs");
var ba = document.getElementById("Ba");
var bb = document.getElementById("Bb");
var bc = document.getElementById("Bc");
var cs = document.getElementById("Cs");
var ca = document.getElementById("Ca");
var cb = document.getElementById("Cb");
var cc = document.getElementById("Cc");
sa.style.transition = "2s";
sb.style.transition = "2s";
sc.style.transition = "2s";
as.style.transition = "2s";
aa.style.transition = "2s";
ab.style.transition = "2s";
ac.style.transition = "2s";
bs.style.transition = "2s";
ba.style.transition = "2s";
bb.style.transition = "2s";
bc.style.transition = "2s";
cs.style.transition = "2s";
ca.style.transition = "2s";
cb.style.transition = "2s";
cc.style.transition = "2s";

function Start() {
  start.style.backgroundColor = "#32CD32";
  as.style.backgroundColor = "#90EE90";
  sa.style.backgroundColor = "#90EE90";
  setTimeout(function () {
    as.style.backgroundColor = "#FFFFFF";
    sa.style.backgroundColor = "#FFFFFF";
  }, 1500);
}

function Sa() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    sa.style.backgroundColor = "#32CD32";
    sb.style.backgroundColor = "#90EE90";
    aa.style.backgroundColor = "#90EE90";
      setTimeout(function () {
      sb.style.backgroundColor = "#FFFFFF";
      aa.style.backgroundColor = "#FFFFFF";
      }, 1500);
  } else {
    sa.style.backgroundColor = "#FF0000";
  }
}

function Sb() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    sb.style.backgroundColor = "#32CD32";
    sc.style.backgroundColor = "#90EE90";
    ab.style.backgroundColor = "#90EE90";
      setTimeout(function () {
      sc.style.backgroundColor = "#FFFFFF";
      ab.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } else {
    sb.style.backgroundColor = "#FF0000";
  }
}

function Sc() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    sc.style.backgroundColor = "#32CD32";
    ac.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      ac.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } else {
    sc.style.backgroundColor = "#FF0000";
  }
}

function As() {
  if (numeroAleatorio == 1 || numeroAleatorio == 2) {
    as.style.backgroundColor = "#32CD32";
    aa.style.backgroundColor = "#90EE90";
    bs.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      aa.style.backgroundColor = "#FFFFFF";
      bs.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } else {
    as.style.backgroundColor = "#FF0000";
  }
}

function Aa() {
  if (numeroAleatorio <= 2) {
    aa.style.backgroundColor = "#32CD32";
    ab.style.backgroundColor = "#90EE90";
    ba.style.backgroundColor = "#90EE90";
       setTimeout(function () {
      ab.style.backgroundColor = "#FFFFFF";
      ba.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } else {
    aa.style.backgroundColor = "#FF0000";
  }
}

function Ab() {
  if (numeroAleatorio == 0) {
    ab.style.backgroundColor = "#32CD32";
    ac.style.backgroundColor = "#90EE90";
    bb.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      ac.style.backgroundColor = "#FFFFFF";
      bb.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } else {
    ab.style.backgroundColor = "#FF0000";
  }
}

function Ac() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    ac.style.backgroundColor = "#32CD32";
    ab.style.backgroundColor = "#90EE90";
    bc.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      bc.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } 
  else {
    ac.style.backgroundColor = "#FF0000";
  }
}

function Bs() {
  if (numeroAleatorio <= 1 || numeroAleatorio == 3) {
    bs.style.backgroundColor = "#32CD32";
    cs.style.backgroundColor = "#90EE90";
    ba.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      cs.style.backgroundColor = "#FFFFFF";
      ba.style.backgroundColor = "#FFFFFF";
    }, 1500);
  } else {
    bs.style.backgroundColor = "#FF0000";
  }
}

function Ba() {
  if (bs.style.backgroundColor == "#32CD32" && numeroAleatorio <= 3) {
    ba.style.backgroundColor = "#32CD32";
    ca.style.backgroundColor = "#90EE90";
    bb.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      ca.style.backgroundColor = "#FFFFFF";
      bb.style.backgroundColor = "#FFFFFF";
    }, 1500);
  }
  else if (aa.style.backgroundColor == "#32CD32" && numeroAleatorio <= 3) {
    ba.style.backgroundColor = "#32CD32";
    ca.style.backgroundColor = "#90EE90";
    bs.style.backgroundColor = "#90EE90";
    bb.style.backgroundColor = "#90EE90";
      setTimeout(function () {
      ca.style.backgroundColor = "#FFFFFF";
      bs.style.backgroundColor = "#FFFFFF";
      bb.style.backgroundColor = "#FFFFFF";
    }, 1500);
  }
    else if (bb.style.backgroundColor == "#32CD32" && numeroAleatorio <= 3) {
    ba.style.backgroundColor = "#32CD32";
    ca.style.backgroundColor = "#90EE90";
    bs.style.backgroundColor = "#90EE90";
    }
    else {
      ba.style.backgroundColor = "FF0000"
    }
}

function Bb() {
  if (numeroAleatorio <= 1 || numeroAleatorio == 3) {
    bb.style.backgroundColor = "#32CD32";
    cb.style.backgroundColor = "#90EE90";
    bc.style.backgroundColor = "#90EE90";
    setTimeout(function () {
      cb.style.backgroundColor = "#FFFFFF";
      bc.style.backgroundColor = "#FFFFFF";
    }, 1500);
  }
  else {
    bb.style.backgroundColor = "#FF0000";
  }
}

function Bc() {
  if (numeroAleatorio <= 3) {
    bc.style.backgroundColor = "#32CD32";
  } else {
    bc.style.backgroundColor = "#FF0000";
  }
}

function Cs() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    cs.style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    cs.style.backgroundColor = "#FF0000";
  }
}

function Ca() {
  if (numeroAleatorio == 1 || numeroAleatorio == 2) {
    ca.style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    ca.style.backgroundColor = "#FF0000";
  }
}

function Cb() {
  if (numeroAleatorio == 0 || numeroAleatorio == 3) {
    cb.style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    cb.style.backgroundColor = "#FF0000";
  }
}

function Cc() {
  if (numeroAleatorio == 1) {
    cc.style.backgroundColor = "#32CD32";
    document.getElementById("textoBaixo").style.opacity = 1;
  } else {
    cc.style.backgroundColor = "#FF0000";
  }
}

function PlayAgain() {
  document.location.reload(true);
}
