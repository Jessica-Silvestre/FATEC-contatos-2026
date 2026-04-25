const BASE_URL = "https://bakcend-fecaf-render.onrender.com/contatos"

export async function getContatos() {
  const response = await fetch(BASE_URL)
  if (!response.ok) {
    throw new Error("Erro ao buscar contatos")
  }
  return response.json()
}

export async function criarContato(contato) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contato)
  }

  const response = await fetch(BASE_URL, options)

  if (!response.ok) {
    throw new Error("Erro ao criar contato")
  }

  return response.json()
}

export async function atualizarContato(id, contato) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contato)
  }

  const response = await fetch(`${BASE_URL}/${id}`, options)

  if (!response.ok) {
    throw new Error("Erro ao atualizar contato")
  }

  return response.json()
}

export async function deletarContato(id) {
  const options = {
    method: "DELETE"
  }

  const response = await fetch(`${BASE_URL}/${id}`, options)

  if (!response.ok) {
    throw new Error("Erro ao deletar contato")
  }

  return true
}
 const novoContato = {
        nome: "Doidas do PSI",
        celular: "11 9 7070-2020",
        foto: "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
        email: "Capivaras@yahoo.com.br",
        endereco: "sei la eu, 234",
        cidade: "São Roque"
    }



deleteContato(106)
