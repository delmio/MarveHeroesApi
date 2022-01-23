const { validate } = require("jsonschema");

function validarSchema(schema){

    return async (req, res, next) => {
        try {
          validate(req.params, schema, { throwAll: true });
          next();
        } catch {
          return res.status(500).send("error de schema");
        }
      };

}

module.exports = {
    validarSchema
};