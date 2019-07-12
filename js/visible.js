"use strict";

var day = 18;
var hours = 0;
var minuts = 0;

let now = new Date();
let end = new Date(2019, 6, day, hours, minuts, 0, 0);

if (now < end) {
  document.getElementById('begin').style.display = 'flex';
}

function changeContent() {
  let now = new Date();
  let end = new Date(2019, 6, day, hours, minuts, 0, 0);
  if (now >= end) {
    document.getElementById('begin').style.display = 'none';
    document.getElementById('final').style.display = 'flex';
    document.body.style.background = '#3a438f';
    clearInterval(loop);
  } 
}

let loop = setInterval(changeContent, 1000);