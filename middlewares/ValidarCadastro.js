
const {Usuario,sequelize} = require('../models');

module.exports = async (req, res,next) => {
  
    let{nome, email, senha} = req.body;
    let usuarios = await Usuario.findAll({where: {email}});

    if(!nome){
        res.status(400).json({erro: "Nome é obrigadorio"});
    }else{
        if(!email){
            res.status(400).json({erro: "Email é obrigadorio"});
        } else {
            if(!senha || senha.length < 6 || senha.length > 12){
                res.status(400).json({erro: "Senha invalida"});
            }else{
                if(usuarios.length){
                    res.status(400).json({erro: "Email já cadastrado, por favor informe outro"});
                
                }else{
                            next()
                        }
                    }
            }
        }
    }


