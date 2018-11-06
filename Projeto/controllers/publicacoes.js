const api = require('../api')

const novaForm = async (req, res) => {
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', { categorias })
}

const nova = async (req, res) => {
    await api.create('publicacoes/' + req.body.categoria, { 
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/' + req.body.categoria)
}

const list = async (req, res) => {
    const publicacoes = await api.list('publicacoes/')
    const categoria = publicacoes[0].id
    res.render('publicacoes/index', { publicacoes, categoria })
}

const listCategoria = async (req, res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacoes/'+ categoria)
    res.render('publicacoes/index', { publicacoes, categoria })
}

const editarForm = async (req, res) => {
    const categoria = req.params.categoria
    const publicacao = await api.get('publicacoes/' + categoria, req.params.id)
    res.render('publicacoes/editar', {
        publicacao,
        categoria
    })
}

const editar = async (req, res) => {
    const categoria = req.params.categoria
    await api.update('publicacoes/'+ categoria, req.params.id, { 
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    res.redirect('/publicacoes/categoria/' + categoria)
}

const excluir = async (req, res) => {
    const categoria = req.params.categoria
    await api.apagar('publicacoes/' + categoria, req.params.id)
    res.redirect('/publicacoes/categoria/' + req.params.categoria)
}

module.exports = {
    novaForm, nova, list, listCategoria, editarForm, editar, excluir
}