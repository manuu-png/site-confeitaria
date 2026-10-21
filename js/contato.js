function cadastrar(event) {
    // não envie o formulário
    event.preventDefault()
}


function calcularTotal() {
    let item = document.getElementById("item").value;
    let quantidade = document.getElementById("quantidade").value;

    let total = Number(item) * Number(quantidade);

    document.getElementById("total").value = "R$ " + total.toFixed(2).replace(".", ",");
}

function buscar(event) {
    //bucar pelo cep
    if(event.key == "Enter"){
     
     const logradouro = document.getElementById('logradouro')
     const bairro = document.getElementById('bairro')
     const cidade = document.getElementById('cidade')
     const estado = document.getElementById('estado')
     const uf = document.getElementById('uf')

     const cep = document.getElementById('cep')

     const url = `https://viacep.com.br/ws/${cep.value}/json/`

     fetch(url)
        .then(response => response.json())
        .then(dados => {
            logradouro.value = dados.logradouro
            bairro.value = dados.bairro
            cidade.value = dados.localidade
            estado.value = dados.estado
            uf.value = dados.uf
        })
        .catch(erro => {
            "erro ao buscar os dados!"
        })
    }   
}