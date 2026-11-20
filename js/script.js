// Troca a linguagem destacada no topo da página.
const palavras = ["JavaScript", "HTML", "CSS", "Java"];
const alvo = document.getElementById("palavra");
const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (alvo && !reduzirMovimento) {
    let atual = 0;
    setInterval(() => {
        alvo.classList.add("sai");
        setTimeout(() => {
            atual = (atual + 1) % palavras.length;
            alvo.textContent = palavras[atual];
            alvo.classList.remove("sai");
        }, 250);
    }, 2200);
}
