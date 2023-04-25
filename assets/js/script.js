let openBtn = document.querySelector(".nav-icon");
let closeBtn = document.querySelector(".nav-icon2");
let nav = document.querySelector(".links");
openBtn.onclick = () => {
     openBtn.style.display = "none";
     nav.style.left = "0";
     closeBtn.style.display = "block";
}
closeBtn.onclick = () => {
     closeBtn.style.display = "none";
     openBtn.style.display = "block";
     nav.style.left = "-100%";
}