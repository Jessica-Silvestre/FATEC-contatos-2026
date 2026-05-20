'use strict'

import { uploadParaCloudinary } from "./cloudinary.js"

const inputFoto = document.getElementById('campo-foto')
const previewImagem = document.getElementById('preview-imagem')

let linkImagem = ''

async function uploadImagem() {

  linkImagem = await uploadParaCloudinary(inputFoto.files[0])

  return linkImagem
}

function mostrarPreview({ target }) {

  previewImagem.src = URL.createObjectURL(target.files[0])
}

inputFoto.addEventListener('change', mostrarPreview)

export { uploadImagem, linkImagem }