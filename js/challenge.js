// Timer

let counter = document.getElementById("counter");
let currentCount = parseInt(counter.innerText, 10);
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let playButton = document.getElementById("play-pause-button");
let counterTimer = setInterval(autoCounter, 1000);
let play = true;

function autoCounter() {
  if (play)
  plusCount();
}

plusButton.addEventListener("click", plusCount);
minusButton.addEventListener("click", minusCount);
playButton.addEventListener("click", playPause);

function plusCount() {
  currentCount += 1;
  counter.innerText = currentCount;
}

function minusCount() {
  currentCount -= 1;
  counter.innerText = currentCount;
}

function playPause() {
  if (play === true) {
    playButton.innerText = " ▶️ ";
    play = false;
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
    clearInterval(a);
  }
  else if (play === false) {
    playButton.innerText = " ⏸ ";
    play = true;
    plusButton.disabled = false;
    minusButton.disabled = false;
    heartButton.disabled = false;
    a = setInterval(autoCounter, 1000)
  }
}




// Likes

let heartButton = document.getElementById("heart");
let likeList = document.getElementById("likes");
let likeAmountHash = {};

heartButton.addEventListener("click", addLike);

function addLike(){
  if (likeAmountHash[currentCount]) {
    likeAmountHash[currentCount] += 1
  }
  else {
    likeAmountHash[currentCount] = 1
  }
  likeList.innerHTML = ""
  let likeAmountHashLength = Object.keys(likeAmountHash).length
  for (let i = 0; i < likeAmountHashLength; i++) {
    if (likeAmountHash[Object.keys(likeAmountHash)[i]] == 1) {
      likeList.innerHTML += `<li>${Object.keys(likeAmountHash)[i]} has been liked ${likeAmountHash[Object.keys(likeAmountHash)[i]]} time</li>`
    }
    else {
      likeList.innerHTML += `<li>${Object.keys(likeAmountHash)[i]} has been liked ${likeAmountHash[Object.keys(likeAmountHash)[i]]} times</li>`
    }
  }
}




// Comments

let commentList = document.getElementById("list");
let commentForm = document.getElementById("comment-form");
let commentInput = document.getElementById("comment-input");

commentForm.addEventListener("submit", submitComment);

function submitComment(e) {
  e.preventDefault();
  let comment = commentInput.value;
  if (comment) {
    if (commentList.childElementCount === 0) {
      commentList.innerHTML += `<div>${comment}</div>`
    }
    else {
      commentList.innerHTML += `<br><div>${comment}</div>`
    }
  }
  commentInput.value = ""
}