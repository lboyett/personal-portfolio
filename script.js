const ball = document.getElementById("ball");
const page = document.querySelector(".page");

function loadPage() {
  ball.classList.add("load-page");
  page.classList.add("active");
  console.log(page);
  setTimeout(() => ball.remove(), 2200);
}
