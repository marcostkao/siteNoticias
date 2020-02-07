const API_KEY = "ae3ae49ce9bf4c4594cfd4bffb0d91bf";
let boardNoticias = document.querySelector('#board-noticia')
let btnCarregar = document.querySelector("#btnCarregar")

let config = {
    method: "GET"
}



function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach((listaNoticias) => {
        let novaNoticia = `
        <div id="noticia" class="col-md-4">
        <div class="card">
            <img src="${listaNoticias.urlToImage}" class="card-img-top" alt="Imagem da noticia" >
            <h4 class="text-center">${listaNoticias.title}</h4>
            <div class="card-body text-justify">
               ${listaNoticias.description}
            </div>
            <button class="btn btn-primary">Botão</button>
        </div>
    </div> `

        boardNoticias.insertAdjacentHTML('beforeend', novaNoticia)

    })

}



btnCarregar.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            mostrarNaTela(json.articles)
        })
}





