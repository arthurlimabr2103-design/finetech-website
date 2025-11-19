document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('metaForm');

    // Função auxiliar para validar o formato básico de um e-mail
    const isValidEmail = (email) => {
        // Regex padrão para verificar se o formato é válido (ex: a@b.c)
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio tradicional e o refresh da página

        // Captura dos elementos e valores importantes
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const metas = document.getElementById('metas').value.trim();
        const urgencia = document.getElementById('urgencia').value;
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        const formContainer = document.querySelector('.form-container');
        
        // ===================================
        // 1. VALIDAÇÃO DE CAMPOS
        // ===================================

        // Checagem de campos vazios (incluindo o select)
        if (nome === "" || email === "" || metas === "" || urgencia === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Checagem de formato de e-mail
        if (!isValidEmail(email)) {
             alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }

        // ===================================
        // 2. ESTADO DE CARREGAMENTO (UX)
        // ===================================
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        // ===================================
        // 3. SIMULAÇÃO DE ENVIO E FEEDBACK
        // ===================================
        
        // Simula o tempo de processamento do servidor (2 segundos)
        setTimeout(() => {
            
            // CONTEÚDO DA MENSAGEM DE SUCESSO
            // Usa as cores da Finetech (Azul #021859 e Verde para sucesso)
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
            
            // Remove a classe de animação para garantir que o contêiner não tente reanimar
            formContainer.classList.remove('fade-in'); 

        }, 2000); 
    });
});