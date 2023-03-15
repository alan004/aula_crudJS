import { clientService } from "../service/client-service.js"
const pegaUrl = new URL(window.location)

const id = pegaUrl.searchParams.get('id')

const inputNome =  document.querySelector('[data-nome]')
const inputEmail =  document.querySelector('[data-email]')

clientService.detalharCliente(id)
.then(e =>{
    inputNome.value= e.nome
    inputEmail.value= e.email
})

const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', (e)=> {
e.preventDefault()
clientService.atualizaCliente(id, inputNome.value, inputEmail.value) 
.then(()=>{
    window.location.href = "../telas/edicao_concluida.html"
})
}
)