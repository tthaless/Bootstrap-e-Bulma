# Página Pessoal com Bootstrap e Bulma

Este projeto implementa uma página pessoal (portfólio web) em HTML, CSS e JavaScript, desenvolvida em duas versões com o mesmo conteúdo, variando apenas o framework CSS da interface: uma em **Bootstrap 5** e outra em **Bulma 1**. A página é responsiva, possui tema claro e escuro e está publicada no GitHub Pages.

## 🌐 Acesso Online

| Página | Endereço |
|--------|----------|
| Início (escolha da versão) | https://tthaless.github.io/Bootstrap-e-Bulma/ |
| Versão Bootstrap | https://tthaless.github.io/Bootstrap-e-Bulma/bootstrap/ |
| Versão Bulma | https://tthaless.github.io/Bootstrap-e-Bulma/bulma/ |

## 📁 Estrutura do Projeto

```
📁 Bootstrap-e-Bulma/
├── 📂 bootstrap/                   # Versão da página construída com Bootstrap 5.
│   ├── 📂 assets/
│   │   ├── 📂 css/                 # Estilos próprios que complementam o framework.
│   │   │   └── styles.css
│   │   ├── 📂 js/                  # Tema claro/escuro e demais comportamentos.
│   │   │   └── script.js
│   │   └── 📂 img/                 # Imagens da página (foto de perfil).
│   │       └── foto.jpg
│   └── 📄 index.html               # Página pessoal em Bootstrap.
├── 📂 bulma/                       # Versão da página construída com Bulma 1.
│   ├── 📂 assets/
│   │   ├── 📂 css/
│   │   │   └── styles.css
│   │   ├── 📂 js/
│   │   │   └── script.js
│   │   └── 📂 img/
│   │       └── foto.jpg
│   └── 📄 index.html               # Página pessoal em Bulma.
├── 📄 index.html                   # Página inicial com links para as duas versões e a comparação.
├── 📄 README.md
└── 📄 LICENSE                      # Licença MIT.
```

---

## 🧠 Funcionalidades

### 📍 Estrutura e Conteúdo

Ambas as versões apresentam as mesmas seções, com informações reais do estudante:

| Seção | Conteúdo |
|-------|----------|
| Cabeçalho | Foto de perfil, nome, curso e resumo da área de atuação |
| Sobre | Descrição pessoal e informações rápidas (cidade, idiomas, área) |
| Habilidades | Tecnologias, competências e nível de familiaridade |
| Projetos | Trabalhos desenvolvidos, com link para os repositórios |
| Interesses | Áreas de estudo e pesquisa |
| Contato | E-mail, GitHub, LinkedIn e redes sociais |

### 📍 Responsividade

O layout se adapta a celular, tablet e desktop por meio do sistema de grid de cada framework:

- **Bootstrap:** `row` com colunas `col-12 col-md-6 col-lg-4`.
- **Bulma:** `columns` com colunas `column is-4-desktop is-6-tablet`.

Em telas pequenas, o menu de navegação é recolhido em um botão e as colunas passam a ocupar a largura total.

### 📍 Tema Claro e Escuro

A troca de tema é feita em JavaScript, sem recarregar a página, e a escolha do usuário é guardada no `localStorage` do navegador. O atributo usado muda conforme o framework:

- **Bootstrap:** `data-bs-theme="light"` ou `data-bs-theme="dark"` no elemento `<html>`.
- **Bulma:** `data-theme="light"` ou `data-theme="dark"` no elemento `<html>`.

### 📍 Menu de Navegação

O Bootstrap possui JavaScript próprio e abre o menu por meio dos atributos `data-bs-toggle="collapse"` e `data-bs-target`. O Bulma é composto apenas por CSS, portanto o comportamento do `navbar-burger` foi implementado manualmente em `script.js`, alternando a classe `is-active` no botão e no menu.

---

## 🛠️ Requisitos

### Navegador

- Qualquer navegador moderno com suporte a HTML5, CSS3 e JavaScript ES6.
- Conexão com a internet, pois os frameworks e os ícones são carregados por CDN.

### Bibliotecas Utilizadas (via CDN)

| Biblioteca | Versão | Uso |
|------------|--------|-----|
| Bootstrap | 5.3.3 | Framework CSS e JS da primeira versão |
| Bulma | 1.0.2 | Framework CSS da segunda versão |
| Font Awesome | 6.5.0 | Ícones das duas versões |

## 🚀 Como Executar o Código

### ⚙️ Clonando o Repositório

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/tthaless/Bootstrap-e-Bulma.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd Bootstrap-e-Bulma/
   ```

### ▶️ Abrindo a Página

Não há dependências para instalar nem etapa de compilação. Abra o arquivo `index.html` da raiz diretamente no navegador e escolha a versão desejada.

```bash
start index.html
```
*No Linux, use `xdg-open index.html`. No macOS, use `open index.html`.*

Para abrir uma versão específica, use `bootstrap/index.html` ou `bulma/index.html`.

### 🌐 Publicando no GitHub Pages

1. No repositório, acesse **Settings → Pages**.
2. Em **Source**, selecione *Deploy from a branch*.
3. Escolha a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde a publicação do endereço informado na seção de acesso online.

---

## 📊 Comparação entre os Frameworks

| Critério | Bootstrap 5.3 | Bulma 1.0 |
|----------|---------------|-----------|
| Arquivos carregados | Um CSS e um JS | Apenas um CSS |
| JavaScript próprio | Sim (navbar, modais, abas) | Nenhum |
| Sistema de grid | `row` e `col-*`, 12 colunas | `columns` e `column is-*`, Flexbox |
| Cartões | `card` → `card-body` | `card` → `card-content` |
| Etiquetas | `badge text-bg-primary` | `tag is-link` |
| Botões | `btn btn-primary` | `button is-link` |
| Barra de progresso | `div.progress` com `div.progress-bar` | Elemento nativo `<progress>` |
| Tema escuro | Atributo `data-bs-theme` | Atributo `data-theme` |
| Nomes das classes | Abreviados (`d-flex`, `mt-4`) | Descritivos (`is-flex`, `has-text-grey`) |

**Conclusão.** O Bootstrap reduziu o trabalho nos componentes interativos, já que o menu do celular funciona sem nenhuma linha de JavaScript adicional. O Bulma exigiu escrever esse comportamento manualmente, mas resultou em um HTML mais enxuto e em classes que se explicam pela própria leitura, o que facilitou localizar e ajustar o layout.

---

## 📖 Referências

- BOOTSTRAP. **Bootstrap 5.3 Documentation**. Disponível em: https://getbootstrap.com/docs/5.3/
- BULMA. **Bulma Documentation**. Disponível em: https://bulma.io/documentation/
- MDN WEB DOCS. **HTML, CSS e JavaScript**. Disponível em: https://developer.mozilla.org/pt-BR/

## 📝 Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

- Thales Rodrigues Resende

**Universidade Federal de Lavras (UFLA)**
**Disciplina:** GAC116 — Programação Web
**Atividade Prática 2 — Desenvolvimento de Página Pessoal**
**Ano:** 2026
