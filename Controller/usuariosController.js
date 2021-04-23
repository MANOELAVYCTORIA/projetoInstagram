const bcrypt = require('bcryptjs');
const {Usuario, sequelize} = require('../models');



const usuariosController = {
    index: async (req, res) => {
        let usuarios =  await Usuario.findAll();
       
        return res.render('usuarios', {listaUsuarios: usuarios});
    },

    login: (req, res) =>{
        return res.render('login')
    },

    registro: (req,res) =>{
        return res.render('registro');
    },

  

    create: async (req, res) => {
         const {nome, email, senha} = req.body;
         
         const senhaCrypt = bcrypt.hashSync(senha, 10);

         const novoUsuario = await Usuario.create ({
          nome,
          email,
          senha: senhaCrypt
         });

         

         return res.redirect('/usuarios/login');
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



