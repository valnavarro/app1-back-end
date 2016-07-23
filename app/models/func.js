var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var FuncSchema = new Schema({

  cod:    { type: Number, required: true, index: { unique: true} },
  nome:   { type: String, required: true },
  cargo:  { type: Object, required: true },
  salario:{ type: Number, required: true }
});
module.exports = mongoose.model('Func', FuncSchema);
