const btnListarAulas = document.querySelector("#listar_Aulas");
const divResultado = document.querySelector("#resultado");
const btngerarhash = document.querySelector("#gerar-hash");

btnListarAulas.addEventListener("click", async function(){
    const resultado = await fetch("http://localhost/ams/")
    .then((response) => {
        return response.json();
    })
    montarHTMLAulas(resultado);
})

btngerarhash.addEventListener("click", async function(){
    const resultado = await fetch("http://localhost/ams/criptografia/"+document.querySelector("#hash").value)
    .then((response) => {
        return response.json();
    })
    document.querySelector("#resultado-hash").innerHTML = resultado;
})

function montarHTMLAulas(aulas) {
    aulas.forEach(function(aula,key){
        const div_cd_aula = document.createElement("div");
        const ul = document.createElement("ul");
        const button = document.createElement("button");

        button.innerHTML = aula;
        button.addEventListener("click",  async function(){
            const resultado = await fetch("http://localhost/ams/aula/" + aula)
            .then((response) => {
                return response.json();
            })

            console.log(resultado)
            resultado.forEach((cd_arqv) => {
                const li = document.createElement("li")
                li.innerHTML = cd_arqv;
                ul.appendChild(li)
            })
            ul.setAttribute("id",`lista${key}`)
            div_cd_aula.appendChild(ul)
        })
        div_cd_aula.appendChild(button)
        divResultado.appendChild(div_cd_aula);
    })
}   
