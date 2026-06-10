// script.js
const mockNews = [
    {
        id: 1,
        title: "Impactos da Urbanização na Demanda por Produção Sustentável",
        excerpt: "A urbanização acelerada gera forte impacto na demanda por produção sustentável. Cidades consomem mais alimentos, energia, água e materiais, elevando emissões de carbono.",
        category: "Sustentabilidade",
        date: "10 Jun 2026",
        image: "https://picsum.photos/id/1015/800/600",
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Agricultura vertical ganha espaço nas grandes metrópoles",
        excerpt: "Sistemas hidropônicos e aeropônicos reduzem em até 90% o consumo de água em comparação com a agricultura tradicional.",
        category: "Agricultura Urbana",
        date: "09 Jun 2026",
        image: "https://picsum.photos/id/201/800/600",
        readTime: "6 min"
    },
    {
        id: 3,
        title: "Nova lei europeia obriga empresas a reportar pegada de carbono",
        excerpt: "A Diretiva CSRD entra em vigor e deve mudar completamente a forma como grandes corporações divulgam seus impactos ambientais.",
        category: "Economia Verde",
        date: "08 Jun 2026",
        image: "https://picsum.photos/id/251/800/600",
        readTime: "5 min"
    },
    {
        id: 4,
        title: "Energia solar residencial bate recorde histórico no Brasil",
        excerpt: "Mais de 3 GW foram instalados apenas no primeiro trimestre de 2026, segundo dados da ABSOLAR.",
        category: "Energia",
        date: "07 Jun 2026",
        image: "https://picsum.photos/id/866/800/600",
        readTime: "4 min"
    },
    {
        id: 5,
        title: "Cidades do futuro: como a IA pode otimizar o tráfego urbano",
        excerpt: "Projetos piloto em Singapura e Barcelona mostram redução de até 25% no tempo médio de deslocamento.",
        category: "Tecnologia",
        date: "06 Jun 2026",
        image: "https://picsum.photos/id/1016/800/600",
        readTime: "7 min"
    },
    {
        id: 6,
        title: "Economia circular: startups brasileiras transformam lixo em matéria-prima",
        excerpt: "Empresa de São Paulo transforma plástico oceânico em móveis de design e já exporta para 12 países.",
        category: "Inovação",
        date: "05 Jun 2026",
        image: "https://picsum.photos/id/133/800/600",
        readTime: "9 min"
    }
];

function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = '';
    
    mockNews.forEach(news => {
        const cardHTML = `
            <article class="news-card">
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <div class="news-category">${news.category}</div>
                    <h3>${news.title}</h3>
                    <p class="news-excerpt">${news.excerpt}</p>
                    <div class="news-meta">
                        <span>${news.date}</span>
                        <span>${news.readTime}</span>
                    </div>
                </div>
            </article>
        `;
        grid.innerHTML += cardHTML;
    });
}

function renderTrending() {
    const list = document.getElementById('trending-list');
    list.innerHTML = '';
    
    // First 3 news as trending
    mockNews.slice(0, 3).forEach(news => {
        const itemHTML = `
            <li>
                <a href="#">
                    <img src="${news.image}" alt="">
                    <div>
                        <strong>${news.title.substring(0, 65)}...</strong>
                        <small>${news.date}</small>
                    </div>
                </a>
            </li>
        `;
        list.innerHTML += itemHTML;
    });
}

// Hamburger Menu
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
}

// Dark Mode
function initDarkMode() {
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle.querySelector('i');
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    toggle.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

// Newsletter (demo)
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    if (emailInput.value.trim() !== '') {
        alert('✅ Obrigado! Você foi inscrito na nossa newsletter.');
        emailInput.value = '';
    } else {
        alert('Por favor, insira um email válido.');
    }
}

// Initialize everything
function initialize() {
    renderNews();
    renderTrending();
    initHamburger();
    initDarkMode();
    
    // Keyboard support for search (demo)
    document.getElementById('search-btn').addEventListener('click', () => {
        const term = prompt('🔎 Buscar notícias:');
        if (term) {
            alert(`Buscando por: "${term}"\n\n(Em uma aplicação real, isso filtraria os resultados)`);
        }
    });
    
    console.log('%cEcoPulse carregado com sucesso! 🌱', 'color: #00b36b; font-size: 14px; font-weight: 600');
}

document.addEventListener('DOMContentLoaded', initialize);