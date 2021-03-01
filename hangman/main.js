const ul = document.getElementById("ul");
const wordlist = document.getElementById("word");
const items = document.querySelectorAll(".item");
const card = document.getElementById("card");
const list = wordlist.childNodes;
var point = 0;
var step = 0;
var start = false;
var data = [
  "announce",
  "always",
  "javascript",
  "programmer",
  "afternoon",
  "airport",
];
var copyword = [];
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "i",
  "ı",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ö",
  "p",
  "r",
  "s",
  "ş",
  "t",
  "u",
  "ğ",
  "h",
  "ü",
  "v",
  "y",
  "z",
  "w",
  "q",
];
var keys = [];
function Random() {
  return data[Math.floor(Math.random() * data.length)];
}
function Start() {
  console.log("start çalıştı " + start);
  step = 0;
  keys = [];
  copyword = [];
  let word = Random();
  data.push(word);
  copyword = word = word.split("");
  ul.innerHTML = "";
  wordlist.innerHTML = "";
  word.forEach((element) => {
    var li = document.createElement("li");
    if (word[word.length - 1] == element || word[word.length - 3] == element) {
      li.innerText = element;
    } else {
      li.innerHTML = "&nbsp";
    }
    wordlist.appendChild(li);
  });
  items.forEach((item) => {
    item.style.display = "none";
  });
}

function Answer(event) {
  if (start) {
    const next = keys.filter((i) => i == event.key);
    const letter = letters.filter((i) => i == event.key);
    if (next.length == 0 && letter.length == 1) {
      keys.push(event.key);
      var li = document.createElement("li");
      li.innerText = event.key;
      ul.appendChild(li);
      Analysis(event.key);
    }
  } else {
    start = true;
    card.style.display = "none";
    document.getElementById("music").play();
    document.getElementById("point").innerText = 0;
    Start();
  }
}

function Analysis(key) {
  var dead = true;
  var win = 0;
  for (var i = 1; i < list.length; i++) {
    if (copyword[i - 1] == key) {
      list[i - 1].innerHTML = key;
      dead = false;
    }
    if (list[i].innerHTML != "&nbsp;") {
      win += 1;
    }
  }
  if (dead) {
    items[step].style.display = "block";
    step += 1;
    console.log(step);
    if (step == items.length) {
      start = false;
      card.style.display = "flex";
      document.getElementById("music").pause();
      document.getElementById("music").currentTime = 0;
    }
  }
  if (copyword.length == win + 2) {
    ul.innerHTML = "";
    point += list.length * 5;
    document.getElementById("point").innerText = point;
    Start();
  }
  if (data.length == 0) {
    start = false;
    card.style.display = "flex";
    document.getElementById("music").pause();
    document.getElementById("music").currentTime = 0;
  }
}
