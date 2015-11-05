var mongoose = require("mongoose");

var icecreamSchema = new mongoose.Schema({
                    name: String,
                    description: String,
                    imageUrl: String
                });

var Icecream = mongoose.model("icecream", icecreamSchema);

module.exports = Icecream;