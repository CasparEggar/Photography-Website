let nav = document.querySelector(".collections-nav");
let left = document.querySelector(".arrow-container .left");
let right = document.querySelector(".arrow-container .right");

let idx;

left.addEventListener("mouseenter", function(){
  idx = setInterval(() => nav.scrollLeft -= 1, 10);
});

left.addEventListener("mouseleave", function(){
  clearInterval(idx);
});

right.addEventListener("mouseenter", function(){
  idx = setInterval(() => nav.scrollLeft += 1, 10);
});

right.addEventListener("mouseleave", function(){
  clearInterval(idx);
});