

const video = document.getElementById('video');
const linkDoVideo = video.src;
const botaoTrailer = document.querySelector(".btn__trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar__modal")

function acaoModal(){
    modal.classList.toggle("aberto");
}


botaoTrailer.addEventListener("click",() => {
    acaoModal()
    video.setAttribute("src",linkDoVideo)
});

fecharModal.addEventListener("click",() => {
    acaoModal()
     video.setAttribute("src","")
})
