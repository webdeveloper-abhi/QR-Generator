"Use Strict";

const clicked = document.querySelector("button");
const qr = document.querySelector("img");
const msg = document.querySelector("a");

clicked.addEventListener("click", function () {
  const link = document.querySelector("input");
  const search = link.value;
  qr.style.display = "block";
  qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${search}`;
  msg.href = search;
  msg.innerText = search;
});
