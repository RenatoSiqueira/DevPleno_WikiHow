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
    res.redirect('/publicacoes')
}

const list = async (req, res) => {
    const categoria = req.params.categoria
    const publicacoes = await api.list('publicacoes/'+ categoria)
    console.log(publicacoes)
    res.render('publicacoes/index', { publicacoes, categoria })
}

const editarForm = async (req, res) => {
    const publicacao = await api.get('publicacoes/' + req.params.categoria, req.params.id)
    res.render('publicacoes/editar', {
        publicacao
    })
}

const editar = async (req, res) => {
    await api.update('categorias', req.params.id, { 
        categoria: req.body.categoria 
    })
    res.redirect('/categorias')
}

const excluir = async (req, res) => {
    await api.apagar('publicacoes', req.param.id)
    res.redirect('/publicacoes')
}

module.exports = {
    novaForm, nova, list, editarForm, editar, excluir
}