function insereItem() {
    // seleciona o valor do input
    const input = document.getElementById("meu-input");
    const novoItem = input.value;
  
    // seleciona a lista pelo ID
    const lista = document.getElementById("lista");
  
    // cria um novo elemento de lista
    const itemLista = document.createElement("li");
    // define o texto do novo item
    itemLista.textContent = novoItem;
    // adiciona o novo item ao final da lista
    lista.appendChild(itemLista);
  
    // limpa o valor do input
    input.value = "";
  }
  
