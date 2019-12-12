const Comp = require('../models/Component')

module.exports = {
  // GET FUNCTION
    async index(req, res){
      if(req.query.comp_name == null || req.query.comp_name == ''){
        const components = await Comp.findAll({
          where: {
            comp_id: req.params.id
          }
        });

        return res.json(components);
      }else{
        const components = await Comp.findAll({
          where: {
            comp_name: req.body
          }
        });

        return res.json(components);
      }
    },

  // POST FUNCTION
    async store(req, res){
      const compInsert = req.body

      let comp = await Comp.findOne(compInsert)

      if(!comp){
        comp = await Comp.create(compInsert)
      }

      return res.json(comp)
    },

    async show(req, res) {

    },

    async update(req, res) {

    },

    async destroy(req, res) {

    },

    async restore(req, res) {
        
    }
}