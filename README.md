# Pokédex Pro 👾

> Enciclopédia digital de Pokémon com consumo de dados em tempo real via PokeAPI.

A **Pokédex Pro** é uma aplicação front-end de alto desempenho que explora a listagem e filtragem de dados complexos. Desenvolvida no meu intensivo de 18 dias, o foco aqui foi a **comunicação com APIs REST** e a criação de uma interface limpa e responsiva para exibição de grandes coleções de itens.

## 🔗 Links
- **Deploy:** [https://falasembloqueio-create.github.io/pokedex-pro/](https://falasembloqueio-create.github.io/pokedex-pro/)
- **Repositório:** [https://github.com/falasembloqueio-create/pokedex-pro](https://github.com/falasembloqueio-create/pokedex-pro)

## 🛠️ Tecnologias e Ferramentas
- **React + Vite**: Estrutura ágil para renderização de componentes.
- **TypeScript**: Tipagem rigorosa para os dados vindos da API, garantindo robustez.
- **PokeAPI**: Fonte de dados oficial para informações e sprites dos Pokémon.
- **Tailwind CSS**: Estilização baseada em cards modernos e Grid Layout.
- **Lucide React**: Ícones de navegação e busca.

## 🚀 Funcionalidades Principais
- **Consumo de API REST**: Busca dinâmica de dados (Nomes, IDs, Tipos e Imagens).
- **Sistema de Busca**: Filtro em tempo real para encontrar Pokémon específicos instantaneamente.
- **Grid Responsivo**: Visualização otimizada para Desktop, Tablets e Smartphones.
- **Sprites Dinâmicos**: Carregamento de imagens oficiais diretamente dos servidores da API.

## 🧠 Desafios e Aprendizados
O maior desafio técnico deste projeto foi o **Gerenciamento de Assincronismo**. Lidar com múltiplas requisições `fetch` para montar a lista de Pokémon exigiu um bom entendimento de `Promises` e `useEffect`. Além disso, trabalhei a otimização da interface para garantir que a rolagem da página e a filtragem de busca não causassem travamentos, focando em uma experiência de usuário (UX) fluida.

---
Desenvolvido por [Davi] - [Conecte-se comigo no LinkedIn](www.linkedin.com/in/davi-gomes-azevedo-b326b139b)
