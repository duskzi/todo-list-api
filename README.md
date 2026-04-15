# API de Tarefas com Node.js
Servidor API feito como atividade avaliativa da matéria PW II

VÍDEO DO PROJETO [https://youtu.be/rzpcUiz7N8I]

### Tecnologias Utilizadas
O projeto é desenvolvido na linguagem **JavaScript**, utilizando o interpretador e biblioteca **Node.js**.  
Durante o desenvolvimento, foi utilizado o **cURL**, ferramenta de terminal para enviar requisições HTTP, além do navegador **Firefox** para testar requisições mais completas.

### Instalação
Requisitos:
- Node.js (v25.8.2)

Opcional:
- Git (2.53.0)
- Unzip (ou outro zip manager)

### Execução
Após clonar o repositório com `git clone https://github.com/duskzi/todo-list-api` ou descompactar o diretório baixado, vá até a pasta `/src` e execute:

```bash
node app.js
```

O servidor estará disponível em `http://localhost:3000`.

### Funcionamento

A API expõe os seguintes endpoints para gerenciar tarefas:

| Método   | Rota                   | Descrição                        |
|----------|------------------------|----------------------------------|
| `GET`    | `/tasks`               | Lista todas as tarefas           |
| `POST`   | `/tasks`               | Cria uma nova tarefa             |
| `PUT`    | `/tasks/:id`           | Atualiza os dados de uma tarefa  |
| `PUT`    | `/tasks/:id/status`    | Altera o status de uma tarefa    |
| `DELETE` | `/tasks/:id`           | Remove uma tarefa                |

As tarefas são persistidas no arquivo `data/todolist.json`.
