# 🌸 Espaço Ágape — Beleza & Cuidado

> Landing page desenvolvida para o **Espaço Ágape**, estúdio de estética localizado na **Barra da Tijuca, Rio de Janeiro**. Projeto construído com React + Vite, focado em conversão e experiência do usuário.

🌐 **Deploy:** [espa-o-gape-projeto-pda.vercel.app](https://espa-o-gape-projeto-pda.vercel.app/)

---

## ✨ Sobre o projeto

O Espaço Ágape é um estúdio de beleza e estética que oferece tratamentos personalizados em ambiente aconchegante e privativo. Esta landing page foi criada para apresentar os serviços, gerar agendamentos e fortalecer a presença digital do negócio.

A proposta visual é **nude + dourado** — elegante, sofisticado e alinhado com o público-alvo feminino que valoriza qualidade e cuidado.

---

## 🚀 Funcionalidades

- ✅ **Navbar responsiva** com menu hamburguer para mobile
- ✅ **Hero section** com chamada para ação e métricas do negócio
- ✅ **Seção Sobre** contando a história do espaço
- ✅ **Catálogo de serviços** com preços e tempo de duração
- ✅ **Depoimentos reais** de clientes
- ✅ **Formulário de agendamento** integrado ao Formspree
- ✅ **Tela de confirmação** após envio do formulário
- ✅ **Botão WhatsApp flutuante** com mensagem pré-preenchida
- ✅ **Design responsivo** para mobile, tablet e desktop

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev) | 18.2 | Biblioteca de UI |
| [Vite](https://vitejs.dev) | 4.4 | Bundler e dev server |
| [Formspree](https://formspree.io) | — | Backend do formulário |
| CSS Variables | — | Sistema de design (cores e tipografia) |
| Google Fonts | — | Playfair Display + Lato |

---

## 📁 Estrutura do projeto

```
espaco-agape/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # Ponto de entrada
    ├── App.jsx           # Componente raiz
    ├── styles.css        # Variáveis globais e animações
    └── components/
        ├── Navbar.jsx        # Navegação + menu mobile
        ├── Hero.jsx          # Seção principal
        ├── Sobre.jsx         # História do espaço
        ├── Servicos.jsx      # Catálogo de tratamentos
        ├── Depoimentos.jsx   # Avaliações de clientes
        ├── Contato.jsx       # Formulário de agendamento
        ├── Obrigado.jsx      # Tela pós-envio
        ├── WhatsApp.jsx      # Botão flutuante
        └── Footer.jsx        # Rodapé
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org) v16 ou superior
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Devezaa7/Espa-o--gape-PROJETO-PDA-.git

# Entre na pasta
cd espaco-agape

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

### Build para produção

```bash
npm run build
```

Os arquivos otimizados ficam na pasta `/dist`, prontos para deploy.

---

## 🔧 Configuração

### Formulário (Formspree)

1. Acesse [formspree.io](https://formspree.io) e crie uma conta gratuita
2. Crie um novo formulário e copie o endpoint
3. Em `src/components/Contato.jsx`, substitua:

```js
const ENDPOINT = 'https://formspree.io/f/SEU_ENDPOINT'
// por:
const ENDPOINT = 'https://formspree.io/f/xyzabc12'
```

### WhatsApp

Em `src/components/WhatsApp.jsx`, substitua o número:

```js
const NUM = '5521999999999'
// formato: 55 (Brasil) + DDD + número, sem espaços
```

---

## 🎨 Sistema de cores

| Variável | Cor | Uso |
|---|---|---|
| `--nude-claro` | `#f9f3ee` | Fundo principal |
| `--nude-medio` | `#ede3d8` | Fundo secundário |
| `--dourado` | `#b8904a` | Cor de destaque |
| `--marrom` | `#5c3d2e` | Títulos e texto escuro |
| `--texto-muted` | `#9a7d6e` | Texto secundário |

---

## 📦 Deploy

O projeto está publicado na Vercel:

- 🌐 **[espa-o-gape-projeto-pda.vercel.app](https://espa-o-gape-projeto-pda.vercel.app/)**

Também pode ser publicado em:

- **[Netlify](https://netlify.com)** — arraste a pasta `/dist` e pronto
- **[GitHub Pages](https://pages.github.com)** — com a lib `gh-pages`

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.

---

Estudar faz parte da evolução do mundo! 💡💡💡