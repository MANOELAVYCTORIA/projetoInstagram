const {Usuario, sequelize} = require('../models');


const usuariosController = {
    index: async (req, res) => {
        let usuarios =  await Usuario.findAll();
       
        return res.render('usuarios', {listaUsuarios: usuarios});
    },

    create: async (req, res) => {
         const {nome: _nome, email: _email, senha: _senha} = req.body;
         const novoUsuario = await Usuario.create ({
          nome: _nome,
          email: _email,
          senha: _senha
         });

         

         return res.json(novoUsuario);
    },

    update: async (req,res) => {
        const {id} = req.params;
        const{nome, email,senha} = req.body;

        const usuario = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {id}
        });

        return res.json(usuario);
    },

    delete: async (req, res) => {
        const {id} = req.params;

        const usuario = await Usuario.destroy({
            where: {id}
        });

        return res.json(usuario);
    }

    }
    

module.exports = usuariosController;



