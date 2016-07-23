var Cargo       = require('../models/cargo');
var Func       = require('../models/func');

module.exports = function (app, express)
{
  var apiRouter = express.Router();
  
  // lista todos os cargos
  apiRouter.get('/cargo', function(req, res) {
    Cargo.find({}, function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Cargo..', err);
        res.json({err: err});
      } else {
        res.json( { dados: funcoes } );
      };    
    });
  });
  
  // lista o cargo selecionado
  apiRouter.get('/cargo/:cod', function(req, res) {
    Cargo.findOne({ cod: req.params.cod }, function(err, funcoes){
      if (err) {
        console.log('erro na leitura da col Cargo..', err);
        res.json({err: err});
      } else {
        res.json( { dados: funcoes } );
      };   
    });
  });


  // lista todos os funcionários
  apiRouter.get('/func', function(req, res) {
    Func.find({}, function(err, funcionarios){
      if (err) {
        console.log('erro na leitura da col v..', err);
        res.json({err: err});
      } else {
        res.json( { dados: funcionarios } );
      };    
    });
  });
  
  // lista o funcionário selecionado
  apiRouter.get('/func/:cod', function(req, res) {
    Func.findOne({ cod: req.params.cod }, function(err, funcionario){
      if (err) {
        console.log('erro na leitura da col Cargo..', err);
        res.json({err: err});
      } else {
        res.json( { dados: funcionario } );
      };   
    });
  });

/*
  apiRouter.get('/func-nome/:cod', function(req, res) {

    Func.findOne({ cod: req.params.cod })
      .select('nome')
      .exec(function(err, funcao){
        if (err) {
          console.log('erro na leitura da col Func..', err);
          res.json({err: err});
        } else {
          res.json( { dados: funcao } );
        };        
      })

  });
*/
  return apiRouter;
};

