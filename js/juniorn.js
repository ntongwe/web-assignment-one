function nextPage(){
  saveData();
  window.open("pagesFolder/page2.html", "_self");
}

function saveData(){
  localStorage.setItem("name",document.getElementById("customername").value); 
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("product",document.getElementById("products").value);
  localStorage.setItem("number",document.getElementById("number").value);
  let total = 0;
  total = 29.99 * document.getElementById("number").value; 
  localStorage.setItem("total", total);

}

function load(){
  document.getElementById("customername").value = localStorage.getItem("name");
  document.getElementById("email").value = localStorage.getItem("email");  
  document.getElementById("products").value = localStorage.getItem("product"); 
  document.getElementById("total").value = localStorage.getItem("total");
  document.getElementById("number").value = localStorage.getItem("number");
}