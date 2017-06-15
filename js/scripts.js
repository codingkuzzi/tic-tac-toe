function startGame() {
  document.turn = "X";
  setMessage(document.turn + " gets to start.");
}

function setMessage(msg) {
  document.getElementsByClassName("message").InnerText = msg;
}
