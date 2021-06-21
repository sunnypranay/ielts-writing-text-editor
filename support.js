//set minutes
var mins = 15;

//calculate the seconds
var secs = mins * 60;

var audio = new Audio("./videoplayback.mp3");

//countdown function is evoked when page is loaded
function countdown() {
  document.getElementById("writing").disabled = false;
  setTimeout("Decrement()", 60);
  mins = document.getElementById("min").value;
  secs = mins * 60;
  document.getElementById("startimer").disabled = true;
  document.getElementById("min").disabled = true;
}

//Decrement function decrement the value.
function Decrement() {
  if (document.getElementById) {
    var time = document.getElementById("Time");

    //if less than a minute remaining
    //Display only seconds value.
    if (secs < 59 && secs >= 0) {
      time.innerHTML = "Timer - 0:" + secs;
    }

    //Display both minutes and seconds
    //getminutes and getseconds is used to
    //get minutes and seconds
    else if (secs >= 0) {
      time.innerHTML = "Timer - " + getminutes() + ":" + getseconds();
    }
    //when less than a minute remaining
    //colour of the minutes and seconds
    //changes to red
    if (mins < 1) {
      time.style.color = "red";
    }
    //if seconds becomes zero,
    //then page alert time up
    if (mins < 0 || secs < 0) {
      //    alert('time up');
      audio.play();
      document.getElementById("writing").disabled = true;
      document.getElementById("pause").style.display = "block";
      document.getElementById("startimer").disabled = false;
      time.innerHTML = "Time Up 💔";
      time.style.color = "red";
    }
    //if seconds > 0 then seconds is decremented
    else {
      secs--;
      setTimeout("Decrement()", 1000);
    }
  }
}

function getminutes() {
  //minutes is seconds divided by 60, rounded down
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  //take minutes remaining (as seconds) away
  //from total seconds remaining
  return secs - Math.round(mins * 60);
}
function pauseAudio() {
  audio.pause();
}

function cleartextarea() {
  document.getElementById("writing").innerHTML = "";
}

document
  .getElementById("writing")
  .addEventListener("keyup", function countWord() {
    let res = [];
    let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    str.map((s) => {
      let trimStr = s.trim();
      if (trimStr.length > 0) {
        res.push(trimStr);
      }
    });
    document.querySelector("#word_count").innerText =
      "Total Word Count - " + res.length;
  });
