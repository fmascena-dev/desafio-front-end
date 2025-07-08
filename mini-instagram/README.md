# 📸 InstaPocket
*InstaPocket é uma aplicação web moderna, inspirada em redes sociais de fotos, desenvolvida com* **Next.js 14+**, **Tailwind**, **Typescript** *e que consome a* **API do Unsplash** *para exibir e gerenciar fotos. A aplicação permite aos usuários visualizar fotos, buscar por termos específicos, e favoritar imagens, com a funcionalidade de persistência de favoritos no navegador.*

#### ⚠️ Observação

- *Para fazer login, pode usar qualquer email, desde que termine como o exemplo:* **@algumacoisa.com**
- **Ao carregar o feed pela primeira vez, permiti que a aplicação armazene a primeira requisição em cache, afim de não ter requisições desnecessárias a API. Mas ao BUSCAR novas fotos, haverá outra requisição.**

### ✨ Funcionalidades

- **Página de Login:** *Autenticação básica com validação de formulário.*

- **Página Feed:** *Exibe uma grade de fotos obtidas da API do Unsplash.*

- **Busca de Imagens:** *Permite buscar fotos por termos específicos.*

- **Favoritos:** *Funcionalidade para adicionar/remover fotos da lista de favoritos.*

- **Persistência de Favoritos:** *Fotos favoritas são salvas no localStorage do navegador.*

- **Visualização de Imagem em Modal:** *Clique na foto para ver uma versão maior e detalhes, com animações suaves.*

- **Remoção de Favoritos:** *Botão para remover fotos individualmente e funcionalidade para excluir todos os favoritos, ambos com modal de confirmação.*

- **Header Dinâmico:** *Cabeçalho com links de navegação ativos e opção de logout condicional.*

- **Design Responsivo:** *Layout adaptável para diferentes tamanhos de tela.*

- **Animações:** *Transições e efeitos visuais com* **framer-motion** *e* **@tw-elements/tw-animate-css**.

### 🚀 Tecnologias Utilizadas
- Este projeto foi construído utilizando as seguintes tecnologias:

    - **Next.js 14+:** *Framework React para construção de aplicações web full-stack, com foco em performance e SEO.*

    - **React:** *Biblioteca JavaScript para construção de interfaces de usuário.*

    - **TypeScript:** *Superset do JavaScript que adiciona tipagem estática, garantindo maior robustez e manutenibilidade ao código.*

    - **Tailwind CSS:** *Framework CSS "utility-first" para estilização rápida e responsiva.*

    - **clsx e tailwind-merge:** *Bibliotecas para combinar e resolver conflitos de classes Tailwind CSS de forma inteligente.*

    - **Zustand:** *Uma biblioteca de gerenciamento de estado leve e flexível para React.*

    - **framer-motion:** *Biblioteca para criação de animações fluidas e declarativas no React.*

    - **next/font:** *Otimização de fontes no Next.js para melhor performance.*

    - **next/image:** *Componente de imagem otimizado do Next.js.*

    - **next/navigation:** *Hooks de roteamento do Next.js para navegação e acesso à rota atual.*

    - **localStorage:** *Utilizado para persistir o estado de autenticação e as fotos favoritas no navegador.*

    - **Unsplash API:** *API externa para obtenção das fotos.*

### 📋 Pré-requisitos
Antes de começar, certifique-se de ter o **Node.js (versão 18.x ou superior)** e o **npm (ou Yarn)** instalados em sua máquina.

- Você precisará de uma chave de acesso da Unsplash API para buscar as fotos.

    - Vá para **Unsplash Developers** (https://unsplash.com/developers).

    - Crie uma conta e um novo aplicativo para obter sua **Access Key**.

### ⚙️ Configuração do Projeto
Clone o repositório:

```
git clone https://github.com/fmascena-dev/desafio-front-end/tree/felipe-mascena
cd mini-instagram
```
**Crie um arquivo de ambiente:**

Na raiz do projeto, crie um arquivo chamado .env.local e adicione sua chave de acesso da Unsplash API:

```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=SUA_CHAVE_DE_ACESSO_DA_UNSPLASH
```
**Substitua** `SUA_CHAVE_DE_ACESSO_DA_UNSPLASH` **pela sua Access Key real.**

**Instale as dependências:**

```
npm install
# ou
yarn install
```

##### ▶️ Como Rodar o Projeto

Após configurar as variáveis de ambiente e instalar as dependências, você pode rodar o projeto em modo de desenvolvimento:

```
npm run dev
# ou
yarn dev
```

**A aplicação estará disponível em** `http://localhost:3000`.

#### 🛠️ Estrutura de Pastas

`src/app/`: Contém as páginas da aplicação (page.tsx, layout.tsx).

`src/app/favorites/page.tsx`: Página para visualizar fotos favoritas.

`src/app/feed/page.tsx`: Página principal com o feed de fotos.

`src/app/login/page.tsx`: Página de login.

`src/app/globals.css`: Estilos globais e configurações do Tailwind CSS, incluindo temas claro/escuro e animações.

`src/app/page.tsx`: Redireciona para a página de login.

`src/app/layout.tsx`: Layout da aplicação.

`src/components/`: Componentes React reutilizáveis.

`src/components/magicui/typing-animation.tsx`: Componente de animação de digitação para a Logo.

`src/components/Header.tsx`: Componente do cabeçalho da aplicação.

`src/components/Logo.tsx`: Componente do logo "InstaPocket" com animação de digitação.

`src/components/Modal.tsx`: Componente de modal para visualização de fotos.

`src/components/PhotoCard.tsx`: Componente para exibir uma única foto e interação de favoritos.

`src/components/SearchBar.tsx`: Componente de barra de pesquisa.

`src/lib/`: Funções utilitárias.

`src/lib/utils.ts`: Funções utilitárias como cn para combinação de classes CSS.

`src/store/`: Gerenciamento de estado.

`src/store/useFavorites.ts`: Store de Zustand para gerenciar o estado das fotos favoritas.

`src/types/`: Definições de tipos TypeScript.

`src/types/photo.ts`: Interface para a estrutura de dados de uma foto.

`src/utils/`: Funções de utilidade gerais.

`src/utils/unsplash.ts`: Funções para interagir com a API do Unsplash.