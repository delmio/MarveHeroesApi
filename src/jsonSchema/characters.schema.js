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

  const characterTeamColor = {
    type: "object",
    properties: {
      id: {
        description: "Id del heroe a guardar",
        type: "string",
      },
      color: {
        description: "color a que corresponde el heroe",
        type: "string"
      }
    },
    required: ["id", "color"],
  };

  module.exports =  {
    characterOffsetSchema,
    characterByIdSchema,
    characterTeamColor
  }