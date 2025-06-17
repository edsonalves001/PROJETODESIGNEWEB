function mousedentro(){

  const produtos = document.getElementById("mousecima");
  produtos.style.display = "grid";
}

function mousefora(){
  const produtos = document.getElementById("mousecima");
  produtos.style.display = "none";
}

function tema(){
    const jscorpo = document.getElementById("corpo");
    const conteudo = document.getElementsByClassName("produto");
    const icone1 = document.getElementById("ic1");
    const icone2 = document.getElementById("ic2");
    const icone3 = document.getElementById("ic3");
    icone1.classList.toggle('designcorpo');
    icone2.classList.toggle('designcorpo');
    icone3.classList.toggle('designcorpo');
    jscorpo.classList.toggle('designcorpo');


}