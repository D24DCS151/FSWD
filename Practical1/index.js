let votes = {
  javascript: 0,
  python: 0,
  java: 0,
  c: 0,
  cpp: 0,
  php: 0
};

function vote(language) {
  votes[language]++;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("jsCount").textContent = `JavaScript: ${votes.javascript}`;
  document.getElementById("pyCount").textContent = `Python: ${votes.python}`;
  document.getElementById("javaCount").textContent = `Java: ${votes.java}`;
  document.getElementById("cCount").textContent = `C: ${votes.c}`;
}
