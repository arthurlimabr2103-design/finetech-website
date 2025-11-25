document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('metaForm');

    
    const isValidEmail = (email) => {
        
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

     
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const metas = document.getElementById('metas').value.trim();
        const urgencia = document.getElementById('urgencia').value;
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        const formContainer = document.querySelector('.form-container');
        
    
        if (nome === "" || email === "" || metas === "" || urgencia === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

     
        if (!isValidEmail(email)) {
             alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        
   
        setTimeout(() => {
            formContainer.innerHTML = `
                <div class="success-message" style="padding: 50px; text-align: center;">
                    <span style="font-size: 4em; color: #17b978; display: block; margin-bottom: 10px;">✅</span>
                    <h1 style="font-family: 'Bebas Neue', sans-serif; font-size: 3em; color: #021859;">Sucesso, ${nome}!</h1>
                    <p style="font-size: 1.2em; color: #555; margin-bottom: 30px;">
                        Sua jornada foi registrada. A proposta personalizada da Finetech será enviada para o e-mail <strong>${email}</strong> em breve.
                    </p>
                    <a href="index.html" class="cta-button large">Voltar ao Início</a>
                </div>
            `;
            
            formContainer.classList.remove('fade-in'); 

        }, 2000); 
    });

});
