const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok){
        return resposta.json()
    }
    throw new Error('Nao foi possível listar os clientes')
    })
}


const criaCliente = (nome, email) =>{
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta =>{
        if(resposta.ok){
        return resposta.body
        }
        throw new Error('Nao foi possível criar o cliente')
    })
  
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
}).then(resposta=> {
    if(!resposta.ok){
        throw new Error('Nao foi possível excluir o cliente')
    }
})
}

const detalharCliente = (id)=> {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(e=>{
        if(resposta.ok){

        return e.json()
        }
                throw new Error('Nao foi possível detalhar o cliente')
    })
}

const atualizaCliente = (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            nome: nome,
            email: email
    })
})
.then(resposta =>{
    if(resposta.ok){
        return resposta.json()        
    }
    throw new Error('Nao foi possível atualizar o cliente')
})

}


export const clientService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalharCliente,
    atualizaCliente 
}
