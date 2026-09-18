// Seleciona elementos
var root = document.documentElement;
var btn = document.getElementById("themeToggle");
var burger = document.getElementById("navBurger");
var menu = document.getElementById("navContent");

// Função para aplicar o tema
function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    // Salva no localStorage
    localStorage.setItem("theme", theme);
    // Se o botão existir, atualiza o ícone
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<span class="icon"><i class="fa-solid fa-sun"></i></span>';
        } else {
            btn.innerHTML = '<span class="icon"><i class="fa-solid fa-moon"></i></span>';
        }
    }
}

// Verifica se já existe tema salvo
var savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

// Evento de clique no botão do tema
if (btn) {
    btn.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-theme");
        if (currentTheme === "light") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });
}

// Menu do celular 
if (burger && menu) {
    burger.addEventListener("click", function () {
        var aberto = menu.classList.toggle("is-active");
        burger.classList.toggle("is-active", aberto);
        burger.setAttribute("aria-expanded", aberto);
    });

    // Fecha o menu ao clicar em um link
    var links = menu.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            menu.classList.remove("is-active");
            burger.classList.remove("is-active");
            burger.setAttribute("aria-expanded", "false");
        });
    }
}

// Ano atual no rodapé
var year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}
