
import {
  getContatos,
  criarContato,
  atualizarContato,
  deletarContato

} from './contatos.js'


const lista = document.getElementById('lista-contatos')

const form = document.getElementById('form-contato')

let idEditando = null


// LISTAR CONTATOS// 

async function carregarContatos(){

  try{

    const contatos = await getContatos()

    lista.innerHTML = ''

    contatos.forEach(contato => {

      lista.innerHTML += `
      
        <div class="card">

          <img src="${contato.foto}">

          <h2>${contato.nome}</h2>

          <p>${contato.email}</p>

          <p>${contato.celular}</p>

          <p>${contato.cidade}</p>

          <button onclick="editar(${contato.id})">
            Editar
          </button>

          <button onclick="excluir(${contato.id})">
            Excluir
          </button>

        </div>
      `
    })

  }catch(error){

    alert(error.message)
  }
}


//  CADASTRAR / EDITAR// 

form.addEventListener('submit', async function(event){

  event.preventDefault()

  const contato = {

    nome: document.getElementById('nome').value,

    celular: document.getElementById('celular').value,

    foto: document.getElementById('foto').value,

    email: document.getElementById('email').value,

    endereco: document.getElementById('endereco').value,

    cidade: document.getElementById('cidade').value
  }

  try{

    // EDITAR
    if(idEditando){

      await atualizarContato(idEditando, contato)

      idEditando = null

    }else{

      // CRIAR
      await criarContato(contato)
    }

    form.reset()

    carregarContatos()

  }catch(error){

    alert(error.message)
  }
})


// EXCLUIR// 

async function excluir(id){

  try{

    await deletarContato(id)

    carregarContatos()

  }catch(error){

    alert(error.message)
  }
}


// EDITAR// 

async function editar(id){

  try{

    const contatos = await getContatos()

    const contato = contatos.find(c => c.id == id)

    document.getElementById('nome').value = contato.nome

    document.getElementById('celular').value = contato.celular

    document.getElementById('foto').value = contato.foto

    document.getElementById('email').value = contato.email

    document.getElementById('cidade').value = contato.cidade

    idEditando = id

  }catch(error){

    alert(error.message)
  }
}


// FUNÇÕES GLOBAIS
window.editar = editar

window.excluir = excluir

// PREVIEW E CONVERSÃO FOTO// 

const previewInput = document.getElementById('preview-input')
const previewImage = document.getElementById('preview-image')
const fotoInput = document.getElementById('foto')

previewInput.addEventListener('change', function () {

  const file = this.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.onload = function (event) {

    // base64 da imagem
    const base64 = event.target.result

    // coloca no input foto
    fotoInput.value = base64

    // atualiza preview
    previewImage.src = base64
  }

  reader.readAsDataURL(file)
})

// INICIAR
carregarContatos()