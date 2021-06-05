const corAtual = document.querySelector(".project__outborder");
const novaCor = document.querySelector(".fields__color");

function mudaCor (){
  const cor = document.querySelector(".fields__color");
  corAtual.style.background = cor.value;
  
}


novaCor.addEventListener('change',()=> {
 mudaCor();

})