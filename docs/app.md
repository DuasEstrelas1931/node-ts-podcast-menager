# Nome do Aplicativo


### Descrição

Um ap ao estilo netflix, aonde possa centralizar diferentes episódios podcasts
sepaados por categoria

### Domínio

podcasts feitos em videos

### Features

- Cadastrar categoria e sessões de podcast
- Cadastrar episódio em uma categoria
- [saúde, esport, mentalidade, humor]

## Como

### Feature:

Listar os episódiods podcasts em sessões de categorias

### Como vou implementas:
GET: retorna lista de episódios

Vouretornarem uma API rest (json) 
o nome podcast, nome do episódio, imagem de capa , link

```js
[
    {
        podcastName: "flow",
        episodeName: "[MEDALHISTA OLÍMPICO 🥈] ISAQUIAS QUEIROZ - Flow #393",
        videoId: "7BZkp3qaRu8",
        episodeImage: "https://i.ytimg.com/vi/7BZkp3qaRu8/hqdefault.jpg",
        episodeLink: "https://www.youtube.com/watch?v=7BZkp3qaRu8",
        categories: ["saúde", "esporte"]
    },
    {
        podcastName: "flow",
        episodeName: "[MEDALHISTA OLÍMPICO 🥈] ISAQUIAS QUEIROZ - Flow #393",
        videoId:"16ItO8XPrX",
        episodeImage: "https://i.ytimg.com/vi/16ItO8XPrXY/maxresdefault.jpg",
        episodeLink: "https://www.youtube.com/watch?v=16ItO8XPrXY"
        category: ["mentalidade, humor"]
    }
]
```