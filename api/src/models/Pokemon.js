const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allownull: false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {min:100 ,max:2000}
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {min:100, max:5000}
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {min:100, max:5000}
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate :{ min:100, max:1000}

    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate :{min: 80, max: 150}
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {min:160 ,max: 300}
    },
    createPoke: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }
  );
};
