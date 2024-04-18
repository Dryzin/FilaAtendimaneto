 // Crie uma instância da fila
 let minhaFila = new FilaCircular(5);

 // Função para adicionar um elemento à fila
 function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome").value;
  const cpf = document.getElementById("txtnovoCpf").value;
  if (nome === "" || cpf === "") {
    alert("Preencha todos os campos antes de adicionar à fila!");
    return;
  }
  const novoAtendimento = new Atendimento();
  novoAtendimento.nome = nome;
  novoAtendimento.cpf = cpf;
  novoAtendimento.data = obterDataAtual();
  novoAtendimento.hora = obterHoraAtual();
  console.log(novoAtendimento);
  //enqueue atendimento na fila
  if (minhaFila.enqueue(novoAtendimento) === true) {
      document.getElementById("txtnovoNome").value = "";
      document.getElementById("txtnovoCpf").value = "";
      document.getElementById("txtnovoNome").focus();
      atualizarFila()
  } else {
      alert("Fila cheia!");
    } 
 }
//--------------------------------------------------------------------------------------------
 // Função para remover o primeiro elemento da fila
 function removerElemento() {
  if (!minhaFila.isEmpty()) {
    const atendimentoRemovido = minhaFila.dequeue();

    const tempoEspera = calcularDiferencaHoras(atendimentoRemovido.hora, obterHoraAtual());
    const mensagem = `Atendimento removido: ${atendimentoRemovido.toString()}, Tempo de espera: ${tempoEspera}`;
    mostrarMensagemRemocao(mensagem);

    //console.log("Atendimento removido:", atendimentoRemovido.toString());
    //mostrarMensagemRemocao("Atendimento removido: " + atendimentoRemovido.toString());
    atualizarFila()
  } else {
    alert("A fila está vazia, não há atendimentos para remover.");
  }
 }
 //--------------------------------------------------------------------------------
 function buscarCpf() {
  let cpfEncontrado = false;
  let posicao = 1;
  let cpfBuscado = document.getElementById("txtnovoCpf").value;

  for (let pessoa of minhaFila) {
    if (pessoa.cpf === cpfBuscado) {
      cpfEncontrado = true;
      break;
    }
    posicao++;
  }

  if (cpfEncontrado) {
    alert("CPF encontrado na fila! Posição: " + posicao);
  } else {
    alert("CPF não encontrado.");
  }
}

//--------------------------------------------------------------------------------------------
function mostrarMensagemRemocao(pessoaAtendida) {
  document.getElementById("mensagem-remocao").innerText = pessoaAtendida;
}
//--------------------------------------------------------------------------------------------
 // Função para atualizar a exibição da fila
 function atualizarFila() {
     //for(let item of minhaFila)
      //alert(atendimento.toString()+"\n");
      document.getElementById("lblPessoasFila").innerText = minhaFila.toString();

  }
//--------------------------------------------------------------------------------------------
 // funcao data
 function obterDataAtual() {
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1; // Adiciona 1 porque o mês inicia do zero
    let ano = dataAtual.getFullYear();
    // Formata a data como "dd/mm/aaaa"
    let dataFormatada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`;
    return dataFormatada;
}
//--------------------------------------------------------------------------------------------
function obterHoraAtual() {
  const data = new Date();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');
  return `${hora}:${minuto}:${segundo}`;
}
//--------------------------------------------------------------------------------------------
function calcularDiferencaHoras(hora1, hora2) {
  const [h1, m1, s1] = hora1.split(':').map(Number);
  const [h2, m2, s2] = hora2.split(':').map(Number);
  
  const diferencaSegundos = (h2 * 3600 + m2 * 60 + s2) - (h1 * 3600 + m1 * 60 + s1);
  
  const horas = Math.floor(diferencaSegundos / 3600);
  const minutos = Math.floor((diferencaSegundos % 3600) / 60);
  const segundos = diferencaSegundos % 60;
  
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}
