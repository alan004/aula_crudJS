import { clientService } from "../service/client-service.js"
const CriaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
<td class="td" data-td>${nome}</td>
<td>${email}</td>
<td>
    <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
    </ul>
</td> `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (e) => {
    let botaoDeletar = e.target.className === 'botao-simples botao-simples--excluir'

    if (botaoDeletar) {
        try {
            const linhaCliente = e.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clientService.removeCliente(id)
            linhaCliente.remove()
        }
        catch (erro) {
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

const render = async () => {
    try {
        const listarClientes = await clientService.listaClientes()
        listarClientes.forEach(e => {
            tabela.appendChild(CriaNovaLinha(e.nome, e.email, e.id))
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }

}

render()
