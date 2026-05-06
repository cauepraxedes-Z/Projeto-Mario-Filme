// 1. Seleção de elementos de forma limpa
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const alternarModal = (abrir) => {
    modal.classList.toggle("aberto");
    video.src = abrir ? linkDoVideo : "";
};

document.querySelector(".botao-trailer").addEventListener("click", () => alternarModal(true));

document.querySelector(".fechar-modal").addEventListener("click", () => alternarModal(false));


modal.addEventListener("click", (e) => {
    if (e.target === modal) alternarModal(false);
});



