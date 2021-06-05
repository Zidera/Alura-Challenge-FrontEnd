const areaDoCodigo = document.querySelector("pre");
const linguagem = document.querySelector("#seletor");
const botao = document.querySelector(".botao-highlight");
const botaoSalvar = document.querySelector("#salvar");
const corDaBorda = document.querySelector(".project__outborder") 
const nomeProjeto = document.querySelector("#nomeDoProjeto");
const descricaoProjeto = document.querySelector(".fields__personal")


function mudaLinguagem(){
  const codigo = areaDoCodigo.querySelector('code');
  areaDoCodigo.innerHTML = `<code class="hljs project__text ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
  areaDoCodigo.firstChild.innerText = codigo.innerText 
  
}

linguagem.addEventListener('change', () =>{
  mudaLinguagem();
})


botao.addEventListener('click', () =>{
  const codigo = areaDoCodigo.querySelector('code');
  hljs.highlightBlock(codigo);
})


/////////////////////////////////////////////////////////////


botaoSalvar.addEventListener('click', () =>{
  if(typeof(Storage) !== "undefined"){
    const projeto = montaProjeto();
    console.log(projeto);
    salvaLocalStorage(projeto);
  } else{
    console.log("não suporta o localstorage");
  }


})



function montaProjeto(){
  let projeto = {
    'id' : atribuiId(),
    'detalhesDoProjeto': {
      'nomeDoProjeto': nomeProjeto.value,
      'descricaoDoProjeto' : descricaoProjeto.value,
      'linguagem' : linguagem.value,
      'codigo': areaDoCodigo.querySelector("code").innerText,
      'corDaBorda' : corDaBorda.style.background
  }
}
  return projeto;
 
}

function atribuiId(){
 
  return localStorage.length

}
    



function salvaLocalStorage(objetoJson){

  localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson));
   
}