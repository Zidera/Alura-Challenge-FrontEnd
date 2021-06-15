const todosOsProjetos = document.querySelector(".grid-center")

function mostraProjetos(){
  if(localStorage.length == 0){
    return
  }
  let projetos = [];
  for(let i =0; i <localStorage.length; i++){
    projetos.push(JSON.parse(localStorage.getItem(i)));
  }
  projetos.forEach(projeto =>{
    todosOsProjetos.innerHTML += montaCartao(projeto);
    console.log("projeto montado");
    const codigoHtml = todosOsProjetos.querySelector(`[data-id="${projeto.id}"]`);
    codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo;
  })
  
}


function montaCartao(projeto) {
  let cartao = `
    <div class="project" data-id="${projeto.id}">
          <div class="project__outborder" style="background-color:${projeto.detalhesDoProjeto.corDaBorda};">
            <div class="project__innerborder">
              <div class="project__mac">
                <img src="./assets/imgs/Ellipse 1.png" alt="">
                <img src="./assets/imgs/Ellipse 2.png" alt="">
                <img src="./assets/imgs/Ellipse 3.png" alt="">
              </div>
              <code class="project__text ${projeto.detalhesDoProjeto.linguagem}"></code>
            </div>
          </div>
          <div class="project__properties">
            <h2>${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
            <p>${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
            <div class="project__properties-flex">
              <div>
                <button type="button" class="project__properties-balao"><img src="/assets/imgs/balao.png"
                    alt=""></button>
                <span class="contador-balao">9</span>
                <button class="project__properties-coracao"><img src="/assets/imgs/coracao.png" alt=""></button>
                <span class="contador-coracao">7</span>
              </div>

              <div class="project__properties-perfil">
                <img src="./assets/imgs/Photo.png" alt="" name="perfil">
                <label for="perfil"> Harry</label>
              </div>
            </div>
          </div>

    </div>
  `
  return cartao

}

mostraProjetos();