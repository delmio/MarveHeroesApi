const { Schema, model } = require("mongoose");

const HeroeTeamSchema = Schema({
    id: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});
// Schema.Types.ObjectId
module.exports = model("HeroeTeam", HeroeTeamSchema);