import { clientService } from "../service/client-service.js"
const pegaUrl = new URL(window.location)

    (async () => {
        const id = pegaUrl.searchParams.get('id')

        const inputNome = document.querySelector('[data-nome]')
        const inputEmail = document.querySelector('[data-email]')

        try{
            const dados = await clientService.detalharCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
        


        const formulario = document.querySelector('[data-form]')
        formulario.addEventListener('submit', async (e) => {
            e.preventDefault()
            try {
                await clientService.atualizaCliente(id, inputNome.value, inputEmail.value)
                window.location.href = "../telas/edicao_concluida.html"
            }
            catch(erro){
                console.log(erro)
                window.location.href = '../telas/erro.html'
            }
        }
        )
    })()

