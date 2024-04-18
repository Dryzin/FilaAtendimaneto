# Projeto FilaAtendimaneto

Este projeto é uma aplicação simples para gerenciamento de filas de atendimento. Ele foi desenvolvido utilizando JavaScript.

![image](https://github.com/Dryzin/FilaAtendimaneto/assets/102194839/cf3c3217-49a2-46c9-9aa1-a5c6710b2db1)


## Funções Principais

### `adicionarElemento()`
Essa função é responsável por adicionar um novo atendimento à fila. Ela verifica se os campos de nome e CPF foram preenchidos, cria um novo atendimento utilizando a classe `Atendimento`, obtém a data e hora atuais, e então enfileira o atendimento utilizando o método `enqueue` da fila. Caso a fila esteja cheia, é exibido um alerta informando que a fila está cheia.

### `removerElemento()`
Essa função remove o primeiro elemento da fila de atendimentos. Primeiro, verifica se a fila não está vazia utilizando o método `isEmpty`. Em seguida, utiliza o método `dequeue` para remover o primeiro atendimento da fila. Calcula a diferença de horas entre a hora de entrada na fila e a hora atual utilizando a função `calcularDiferencaHoras`. Finalmente, atualiza a exibição da fila utilizando `atualizarFila` e mostra a mensagem de remoção utilizando `mostrarMensagemRemocao`.

### `buscarCpf()`
Essa função permite buscar um atendimento na fila pelo CPF. Obtém o CPF digitado pelo usuário e percorre a fila procurando um atendimento com o mesmo CPF. Se encontrar, mostra um alerta com a posição do atendimento na fila. Caso contrário, mostra um alerta informando que o CPF não foi encontrado.

![image](https://github.com/Dryzin/FilaAtendimaneto/assets/102194839/1f31f76c-02ef-4a61-a777-289816aaa867)


### `mostrarMensagemRemocao(pessoaAtendida)`
Essa função atualiza o elemento na página HTML com id "mensagem-remocao" com a mensagem de remoção do atendimento.

![image](https://github.com/Dryzin/FilaAtendimaneto/assets/102194839/630ab6ad-eb7e-4cfa-a6e1-dd8d0c63f723)


### `atualizarFila()`
Essa função atualiza a exibição da fila na página HTML, mostrando os atendimentos presentes na fila.

Além dessas funções principais, o projeto também possui funções auxiliares para obtenção da data e hora atual, cálculo da diferença de horas, e uma classe `Atendimento` para representar os atendimentos na fila.
