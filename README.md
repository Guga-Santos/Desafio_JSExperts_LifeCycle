# Story: Minha playlist

## Motivação

No `módulo 03 - Conceitos fundamentais sobre o ciclo de vida do Javascript` vimos diferentes conceitos dentro do nosso querido Java Script, então escolhemos os mais relevantes e desenvolvemos um desafios onde possam ser ultilizados.

## Idéia geral

Este desafio consiste em uma API (como feita no [desafio anterior](https://github.com/training-erickwendel/jsexpert-exercicio01-pokeapi)) com duas rotas, cada rota devolve uma playlist.

## Funcionalidades

1. `Default`
Deve retornar 404 ou uma mensagem de `hello world`

2. `YoutubeMusic e SpotifyMusic`
Devem derivar de `music.js` e cada uma deve conter um método de coerção de tipo (`valueOf`/`toString` e `[Symbol.toPrimitive]`)

- 2.1 `String`
  Deve retornar uma string contendo `Nome da música - Nome da banda - Nome do álbum`

- 2.2 `Number`
  Deve retornar o valor em milissegundos da duração da música

3. `GET/youtube`
Deve retornar a playlist da fake API Youtube

4. `GET/spotify`
Deve retornar a playlist da fake API Spotify

## Testes

* [ ] Unitários

* [ ] E2E

* [ ] Prototype das classes derivadas de `music.js`

* [ ] Coersão de tipo devolvendo o esperado

### Extras

* [ ] TDD e BDD, será que rola? Acho que vale a tentativa!

* [ ] Publicar o code coverage no github pages!

* [ ] Consegue aplicar os conceitos de clonagem de Objeto?


### Arquitetura e onde trabalhar

A arquitetura nesse desafio é livre, fique a vontade para desenvolver como bem entender, a única restrição é ultilizar as classes `Music`, `YoutubeMusic` e `SpotifyMusic`.

```
project
│   README.md
│   package.json
│
└───src
│   |
|   |__util
|      |
|      |__api.js
|      |__timeFormat.js
│
└───test
│   │
│   └───unit
|   |
|   |___e2e
```

### Checklist features

- Web API
  * [ ] Deve ter uma rota raiz que retorne 404 ou um hello world.
  * [ ] Deve ter uma rota de `/youtube`, onde:
    * [ ] Deve consumir a rota `/youtube` da fake APIs

  * [ ] Deve ter uma rota de `/spotify`, onde:
    * [ ] Deve consumir a rota `/spotify` da fake APIs

  * [ ] Deve retornar um objeto JSON com essa estrutura
  ```
  {
    musics:[ // Array de objetos
        {
            display: "Nome da música - Nome da banda - Nome do álbum",
            duration: 00:03:55:255 // Duração da música
        },
        ...
    ],
    duration: 01:30:25:000 // Duração da playlist
  }
  ```

- Youtube e Spotify Music
  * [ ] Deve derivar de `Music`
  * [ ] Cada um deve ter um método de coerção de tipo
  * [ ] Os métodos de coerção devem ser diferentes para cada classe

- Testes
  * [ ] Deve ter testes unitários que cubra todas as funções
  * [ ] Deve ter testes end-2-end que cubra todas as rotas
  * [ ] Deve ter relatório de 100% de code coverage
  * [ ] Deve testar o prototype das classes derivadas de `Music`
  * [ ] Deve testar a coersão de tipo das classes derivadas de `Music`

## Iniciando

1. `package.json` - Troque a versão do node para a sua versão atual (`node -v`) e coloque seu nome no `Author`.

2. `npm run api` - Dar uma olhada no retorno da api e pensar na melhor estrategia para os dados retornados.

4. `npm i` - Escolha as bibliotecas de testes e instale elas (como as aulas do modulo 1 são com o CommonJS e as bibliotecas `chai`, `mocha`, `sinon` e `nyc`, as configuralções de coverage já foi feita pensando nelas).

5. ### Bora codar

## Submissão

1. Inicialize um repósitório git com um arquivo README.md contendo seu nome, quais tópicos do checklist foram implementados e, caso queira, um breve resumo de cada tópico.

2. Crie o projeto e os testes.

3. Coloque as instruções de como configurar e executar seu projeto e os testes no README.md (não se esqueça do coverage com o `nyc`).

4. Envie o link no canal `#desafios-jsexpert` da nossa comunidade no discord.