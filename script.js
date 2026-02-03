//1//
const sarlavha = document.getElementById("sarlavha");
sarlavha.textContent = "Yangi Sarlavha";
//2//
const img = document.createElement("img");
img.src = "https://images.chesscomfiles.com/uploads/v1/user/381380987.3e60a0fa.50x50o.9e3e3a599419@2x.jpg";
img.alt = "Yangi rasm";
img.style.display = "block";
img.style.marginTop = "10px";

document.body.appendChild(img);
//3//
const paragraflar = document.querySelectorAll(".matn");
paragraflar[1].remove(); 
//4//
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
    console.log("Tugma bosildi!");
});
