# Auréa Saúde Integrada

Landing page premium e conceitual para uma clínica fictícia de Psicologia e Nutrição.

## Sobre o projeto

A Auréa combina direção editorial, composição assimétrica, fotografia natural e uma identidade visual serena. O projeto demonstra uma experiência institucional preparada para personalização comercial.

**Importante:** esta é uma marca conceitual. Profissionais, registros, contatos, endereço e agendamentos são demonstrativos e não representam uma clínica real.

## Tecnologias

- HTML5 semântico
- CSS3 modular
- JavaScript ES6+
- Vite

## Funcionalidades

- Navegação por âncoras
- Menu móvel acessível com Escape e bloqueio de scroll
- Header dinâmico
- Animações de entrada via IntersectionObserver
- FAQ acessível com estados ARIA
- Contato configurável por WhatsApp ou e-mail
- Estados de foco e redução de movimento
- SEO básico, favicon e sitemap

## Como executar

```bash
npm install
npm run dev
```

Para gerar o build de produção:

```bash
npm run build
npm run preview
```

## Personalização

Edite `src/js/config.js` para definir WhatsApp, e-mail, Instagram, endereço e dados dos profissionais. Mantenha campos não confirmados vazios ou identificados como demonstrativos.

Para o WhatsApp, informe o número no formato internacional brasileiro com 55, por exemplo: `5511999999999`.

Troque as imagens em `public/images/` mantendo os nomes ou atualize os caminhos em `src/index.html`.

## Estrutura

```text
public/
src/
  css/
  js/
  index.html
vite.config.js
package.json
README.md
LICENSE
```
