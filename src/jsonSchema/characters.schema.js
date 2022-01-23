const characterOffsetSchema = {
    type: "object",
    properties: {
      offset: {
        description: "Cantidad de registros a consultar",
        type: "string",
      }
    },
    required: ["offset"],
  };

  const characterByIdSchema = {
    type: "object",
    properties: {
      id: {
        description: "Id del heroe a consultar",
        type: "string",
      }
    },
    required: ["id"],
  };

  module.exports =  {
    characterOffsetSchema,
    characterByIdSchema
  }