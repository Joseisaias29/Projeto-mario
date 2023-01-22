const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;
const botaoTrailer = document.querySelector("botaoTrailer");

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});