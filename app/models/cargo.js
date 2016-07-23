var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var CargoSchema = new Schema({

  cod:    { type: Number, required: true, index: { unique: true} },
  nome:   { type: String, required: true }

});
module.exports = mongoose.model('Cargo', CargoSchema);