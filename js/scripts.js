let userName;

let chosenModel;
let chosenCollar;
let chosenTissue;


let regex;

let linkImg = document.querySelector(".fourth input").value

askName();
function askName (){
    userName = prompt("Qual é o seu nome?");
}

function chooseAllAlert() {
  alert("Selecione todas as opções!");
}

function selectModel (select) {
    const itemSelect = document.querySelector(".model .selected");

    if (itemSelect !== null) {
      itemSelect.classList.remove("selected");
    }
  
    select.classList.add("selected");
    chosenModel = document.getElementById(select)
    console.log(chosenModel);
    activateOrder();

}

function selectCollar (select) {
    const itemSelect = document.querySelector(".collar .selected");

    if (itemSelect !== null) {
      itemSelect.classList.remove("selected");
    }
  
    select.classList.add("selected");
    activateOrder();
}

function selectTissue (select) {
    const itemSelect = document.querySelector(".tissue .selected");

    if (itemSelect !== null) {
      itemSelect.classList.remove("selected");
    }
  
    select.classList.add("selected");
    activateOrder();
}

function assignValue () {
  const link = document.querySelector(".fourth input").value;

  if (link !== "") {
    return true;
  }
}

function activateOrder () {
  const model = document.querySelector(".first .selected");
  const collar = document.querySelector(".second .selected");
  const tissue = document.querySelector(".third .selected");
  const requestButton = document.querySelector(".fourth button");

  if (model !== null && collar !== null && tissue !== null && assignValue() !== undefined) {
    
    requestButton.classList.add("active");
    requestButton.innerHTML = "Confirmar pedido";
    requestButton.setAttribute("onClick", "completeOrder()");
  }
}

function completeOrder () {
  const promise = axios.post(API, 
    {
      "model": "t-shirt" | "long" | "top-tank",
      "neck": "v-neck" | "round" | "polo",
      "material": "silk" | "cotton" | "polyester",
      "image": linkImg,
      "owner": "Criador: " + userName,
      "author": userName
    }
  );

  promise.then('alert("Confirmamos sua encomenda! Obrigado.")')

}

function lastOrders () {

  `
  <li>
    <img src="images/Blusa1.png"/>
    <p><strong>Criador: Nome</strong></p>
  </li>
  `
}

function renderOrders(){
  const promisse = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts");

  
}