function adicionarTarefa() {
  
    const inputTarefa = document.getElementById("inputTarefa")
    // biome-ignore lint/style/useConst: <explanation>
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

     // se o valor do input for vazio entao mostre uma mensagem de erro
    // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
    if (tarefa == "") {
      // biome-ignore lint/style/useConst: <explanation>
      let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
      mensagem.textContent = mensagemErro;
      mensagem.style.color = "rgb(160, 10, 10)";
    } else {
       // biome-ignore lint/style/useConst: <explanation>
       let mensagemSucesso = "Tarefa adicionada com sucesso!";
       mensagem.textContent = mensagemSucesso;
       mensagem.style.color = "rgb(8, 80, 50)";

      const listaTarefas = document.getElementById("listaTarefas")
      // biome-ignore lint/style/useConst: <explanation>
      let novaTarefa = document.createElement("li")
      novaTarefa.textContent = tarefa
      listaTarefas.appendChild(novaTarefa)
    }

   //limpa o input do usuario
    inputTarefa.value = "";

   

  }

