document.addEventListener("DOMContentLoaded", () => {

    const btnScrollTop = document.getElementById("btn-scroll-top");

    window.addEventListener("scroll", () => {
     
        if (window.scrollY > 300) {
            btnScrollTop.classList.add("show");
        } else {
            btnScrollTop.classList.remove("show");
        }
    });

    btnScrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    });


    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-up-slow');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento está visível
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

   

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.add('animated');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('metaForm');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

      
        const nome = document.getElementById('nome').value;
        const metas = document.getElementById('metas').value;

        if (nome.trim() === "" || metas.trim() === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        setTimeout(() => {
           
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            alert(`Obrigado(a), ${nome}! Suas metas foram registradas. Entraremos em contato em breve para discutir o plano Finetech ideal para sua empresa.`);
            
            
            form.reset(); 
            
        }, 2000); 
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // LÓGICA DO MODAL/LIGHTBOX DO DASHBOARD
    const modal = document.getElementById('dashboard-modal');
    const btn = document.getElementById('open-dashboard-btn');
    const closeButton = document.getElementsByClassName('modal-close')[0];

    if (btn && modal && closeButton) {
        // 1. Abre o modal ao clicar no botão
        btn.onclick = function(e) {
            e.preventDefault(); // Impede que a página volte para o topo
            modal.style.display = "block";
            // Adiciona uma classe ao body para evitar que a página de fundo role
            document.body.style.overflow = 'hidden'; 
        }

        // 2. Fecha o modal ao clicar no 'X'
        closeButton.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = 'auto'; 
        }

        // 3. Fecha o modal ao clicar fora da imagem
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        }
    }
});