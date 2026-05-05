# 🚗 AutoPrime — Mini Site de Estoque de Carros

> Projeto de estudo desenvolvido após aprender HTML, CSS e JavaScript.  
> Mini site fictício de uma loja de seminovos com foco em boas práticas de front-end.

---

## 📸 Preview

![AutoPrime Preview](https://commons.wikimedia.org/wiki/Special:FilePath/2019_Toyota_Corolla_Altis_(front).jpg?width=800)

---

## 🎯 Sobre o projeto

O **AutoPrime** é um site estático de estoque de veículos seminovos criado como exercício prático de HTML, CSS e JavaScript.  
O projeto foi evoluindo conforme fui aprendendo — começou só com HTML e CSS, e depois adicionei JavaScript para tornar a busca e os filtros funcionais.

---

## ✅ O que foi praticado

**HTML & CSS (versão inicial):**
- Estrutura semântica com `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- CSS com **variáveis (custom properties)** para manter consistência visual
- **CSS Grid** para layout responsivo (`auto-fit` + `minmax`)
- **Flexbox** para alinhamento de componentes
- `position: sticky` para header fixo com efeito glassmorphism
- `aspect-ratio` e `object-fit: cover` para imagens sem distorção
- Filtros visuais com `<details>` e `<summary>`
- Acessibilidade: `.sr-only`, `:focus-visible`, `aria-label`, `loading="lazy"`
- Responsividade com `@media` queries e `clamp()` para tipografia fluida
- Preferência de movimento reduzido com `prefers-reduced-motion`

**JavaScript (versão atual):**
- Script externo separado (`script.js`) — boas práticas de organização
- `document.addEventListener("DOMContentLoaded")` para aguardar o HTML carregar
- `querySelectorAll` e `forEach` para percorrer múltiplos elementos
- Busca em tempo real com evento `input` no campo de pesquisa
- Filtro por marca usando atributos `data-marca` nos cards
- Manipulação de `classList` para controlar o botão ativo
- `style.display` para mostrar e esconder cards dinamicamente
- Contador de resultados atualizado automaticamente

---

## 🛠️ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📁 Estrutura

```
autoprime/
├── index.html   # Estrutura e conteúdo da página
├── style.css    # Estilos separados do HTML
└── script.js    # Lógica de busca e filtros
```

---

## 🚀 Como rodar

Basta abrir o arquivo `index.html` no navegador.  
Não requer servidor, instalação ou dependências.

---

## 📌 Observações

- Projeto **HTML + CSS + JavaScript puro** — sem frameworks ou bibliotecas
- Busca em tempo real e filtro por marca funcionando via JS
- Imagens via Wikimedia Commons (licença livre)
- Dados fictícios para fins de estudo

---

## 👨‍💻 Autor

**Pedro Henrique (PH) Lima**  
Estudante de Ciência da Computação — UFJF  
[LinkedIn](https://www.linkedin.com/in/phrosa) • [GitHub](https://github.com/PedroHLJR)
