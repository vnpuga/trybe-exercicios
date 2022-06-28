Para o exemplo dessa aula desenvolveremos uma API utilizando os padrões REST e MSC. Essa API deverá permitir a realização de inserção e consulta de filmes no banco de dados.


Antes de começarmos, vamos estruturar uma API de exemplo utilizando o modelo MSC com boas práticas, nesse caso, dividindo as entidades por seus papéis técnicos, como visto em 23.2 - Arquitetura de Software - Camada de Controller e Service:
Perceba que criamos um arquivo de teste para a entidade movie para cada camada do MSC. Assim, conseguiremos testar unitariamente cada uma.

└── controllers
│   └── movieController.js
└── services
│   └── movieService.js
└── models
│   └── movieModel.js
└── tests
│   ├── controllers
│   │   └── movieController.test.js
│   ├── services
│   │   └── movieService.test.js
│   └── models
│       └── movieModel.test.js
└── index.js