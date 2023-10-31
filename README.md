# Nena's Kitchen 
Site de receitas culinárias que faz integração com uma API também feita por mim. 

<img src="https://images.prismic.io/portfolio-sinara/3ee97027-5723-44fe-8abf-037a5dc12908_Captura+de+tela+2023-09-11+155742.png?auto=compress,format"/>

## Funcionalidades

1. A aplicação possuí as seguintes funcionalidades.
   - Listar as receitas
   - Listar os artigos
   - Filtrar por categoria
   - Procurar receita pelo nome
   - Detalhar receita
   - Detalhar artigo
   - Cadastrar receita
   - Cadastrar artigo

a) Listar as receitas

As receitas são listadas tanto na página `Home` quanto na página de `Receitas`. Porém na página `Home` tem uma limitação de receitas que são mostradas. Já na página de `Receitas` traz todas as receitas cadastradas.

b) Listar os artigos

Os artigos são listados ná página `Artigos`. Traz todos os artigos que estão cadastrados.

c) Filtrar por categoria

Na página `Home` tem um carrosel que lista todas as categorias. Ao serem clicadas o usuário é redirecionado para a página de filtros onde são listadas as receitas da categoria correspondente. Pode retorna uma, várias ou nenhuma receita.

d) Procurar a receita pelo nome

No cabeçalho da página tem um campo de busca que filtra as receitas que possuí o nome buscado. Pode retorna uma, várias ou nenhuma receita.

e) Detalhar receita e artigo

Ao clicar na receita ou no artigo, o usuário é redirecionado para a página da receita ou do artigo correspondente. Ali é listado todas as informações da receita e o conteúdo do artigo.

f) Cadastrar receita e artigo

No cabeçalho da página tem dois botões, um de `cadastrar receita` e outro de `cadastrar artigo`. Ao clicar o usuári é redirecionado para preencher um formulário a respeito do conteúdo que deseja cadastrar. Se obter sucesso aparecerá uma mensagem dizendo que a receita foi adicionada com sucesso ou que o artigo foi adicionado com sucesso. Caso não obtenha suceso aparecerá uma mensagem dizendo o erro correspondente. 

## Tecnologias utilizadas
  - NextJs
  - TypeScript
  - Tailwind
  - React-elastic-carousel
  - React-hook-form

# Rodar projeto localmente
#### Clone o repositório 

Com chave SSH

```bash
git@github.com:SinaraMoura/nenaskitchen.git
```

Sem chave SSH

```bash
https://github.com/SinaraMoura/nenaskitchen.git
```

### Entrar na pasta

```bash
cd nenas-kitchen
```

Instalar as dependências

```bash
npm install
```

Rodando a aplicação

```bash
npm run dev
```

### 🔗 Projeto no ar 
* [Nena's Kitchen](https://nenaskitchen.vercel.app/)

&nbsp;

<p align="center">Desenvolvido com 🧡 por Sinara Tibel </p>
