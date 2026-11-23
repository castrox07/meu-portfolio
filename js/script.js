document.addEventListener("DOMContentLoaded", () => {
    const btnSaibaMais = document.querySelector("#btn-saiba-mais, .btn-saiba-mais");
    const secaoSobre = document.querySelector("#sobre");

    if (btnSaibaMais && secaoSobre) {
        btnSaibaMais.addEventListener("click", (evento) => {
            if (btnSaibaMais.tagName === "A") {
                evento.preventDefault();
            }
            secaoSobre.scrollIntoView({ behavior: "smooth" });
        });
    }

    const linksNavegacao = document.querySelectorAll('header nav a[href^="#"]');

    linksNavegacao.forEach((link) => {
        link.addEventListener("click", (evento) => {
            const destinoSeletor = link.getAttribute("href");
            const alvo = document.querySelector(destinoSeletor);

            if (alvo) {
                evento.preventDefault();
                alvo.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const formularioContato = document.querySelector("#form-contato");

    if (formularioContato) {
        const feedbackElemento = document.createElement("p");
        feedbackElemento.id = "feedback-formulario";
        feedbackElemento.style.marginTop = "12px";
        feedbackElemento.style.fontWeight = "bold";
        formularioContato.appendChild(feedbackElemento);

        formularioContato.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nome = formularioContato.querySelector("#nome").value.trim();
            const email = formularioContato.querySelector("#email").value.trim();
            const mensagem = formularioContato.querySelector("#mensagem").value.trim();

            if (!nome || !email || !mensagem) {
                feedbackElemento.textContent = "Por favor, preencha todos os campos antes de enviar.";
                feedbackElemento.style.color = "#c0392b";
                return;
            }

            feedbackElemento.textContent = `Obrigado, ${nome}! Sua mensagem foi registrada com sucesso.`;
            feedbackElemento.style.color = "#1e8449";

            formularioContato.reset();
        });
    }
});