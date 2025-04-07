

document.addEventListener('DOMContentLoaded', function() {
    // Tab system
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.content-tab');
  
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('p').style.color = 'rgb(255, 255, 255)';
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.querySelector('p').style.color = 'white';
            
            // Hide all contents
            tabContents.forEach(content => {
                content.classList.remove('show');
            });
            
            // Show corresponding content
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            targetContent.classList.add('show');
            
            // Scroll suave apenas em mobile (largura <= 768px)
            if (window.innerWidth <= 768) {
                targetContent.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
});

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
