const links = document.querySelectorAll('.btn');

links.forEach(link => link.addEventListener('click', () => linkClicked(link)));

const linkClicked = (link) => {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = link.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

window.onload = function () {

    emailjs.init("mn9zgmsv_qfhtX5Ik");

};

function sendEmail() {

    let btnEnviar = document.getElementById("btn-enviar");
    let btnLoader = document.getElementById("btn-enviar-loader");

    btnEnviar.style.display = "none";  // Esconde o botão "Enviar"
    btnLoader.style.display = "inline-block";  // Mostra o loader

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    let params = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    };

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        btnEnviar.style.display = "inline-block";
        btnLoader.style.display = "none";
        return;
    }

    console.log("Enviando email com os seguintes parâmetros:", params);

    emailjs.send("service_sal7pe8", "template_5wk2vxq", params, "mn9zgmsv_qfhtX5Ik")


        .then(() => {
            console.log("email enviado!");
            location.reload();

            nameInput.value = "";

            emailInput.value = "";

            messageInput.value = "";
        })

        .catch((error) => {
            console.error("Erro ao enviar email:", error);
        });
}
document.getElementById('btn-enviar').addEventListener('click', function (event) {
    event.preventDefault();
    sendEmail();
});