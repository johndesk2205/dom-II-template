const item0 = document.createElement("li")

const conteudoDoItem0 = document.createTextNode("Item 0")

item0.appendChild(conteudoDoItem0)

const lista = document.getElementById("lista")

lista.insertAdjacentElement("afterbegin", item0)

const item5 = document.createElement("li")

const conteudoDoItem5 = document.createTextNode("Item 5")

item5.appendChild(conteudoDoItem5)


lista.insertAdjacentElement("beforeend", item5)
