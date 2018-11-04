const api = require('../api')

const novaForm = async (req, res) => {
    const categorias = await api.list('categorias')
    res.render('publicacoes/nova', { categorias })
}

const nova = async (req, res) => {
    console.log('oii', req.body)
    await api.create('publicacoes/' + req.body.categoria, { 
        titulo: req.body.titulo,
        publicacao: req.body.conteudo
    })
    res.redirect('/publicacoes')
}

const list = async (req, res) => {
    const publicacoes = await api.list('publicacoes')
    res.render('publicacoes/index', { publicacoes })
}

const editarForm = async (req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    res.render('categorias/editar', {
        categoria
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