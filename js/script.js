// Кнопка Learn more
function readMore() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementsByClassName(".services__bottom-btn");

  if(dots.style.display === "none") {
    dots.style.display="inline";
    btn.innerHTML="Learn More";
    more.style.display="none";
  } else {
    dots.style.display="none";
    btn.innerHTML="Hide";
    more.style.display="inline";
  }
}