// biome-ignore lint/style/useConst: <explanation>
let tarefas = []

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa")
    // biome-ignore lint/style/useConst: <explanation>
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa === "") {
        // biome-ignore lint/style/useConst: <explanation>
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        // biome-ignore lint/style/useConst: <explanation>
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    for (let i = 0; i < tarefas.length; i++){
        // biome-ignore lint/style/useConst: <explanation>
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        
        // biome-ignore lint/style/useConst: <explanation>
         let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        // biome-ignore lint/style/useConst: <explanation>
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)
        
        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}   

function editarTarefa(i) {
    // biome-ignore lint/style/useConst: <explanation>
    let tarefaEditada = prompt("Edite a tarefa:")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}