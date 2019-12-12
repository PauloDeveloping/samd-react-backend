const ArticleModel = require('../models/Article')

module.exports = {

    async index(req, res) {
        if(req.query.artcl_title == null || req.query.artcl_title == ''){
            const article = await Article.findAll()

            return res.json(article)
        }else{
            const article = await Article.findAll({
                where: {
                    artcl_title: req.query.artcl_title
                }
            })
            return res.json(article)
        }
    },

    async show(req, res) {

    },

    async store(req, res) {
        const articleInsert = req.body

        let article = await Article.findOne(articleInsert)

        if(!article){
            article = await Article.create(articleInsert)
        }
        return res.json(article)
    },

    async update(req, res) {

    },

    async destroy(req, res) {

    },

    async restore(req, res) {
        
    }

}