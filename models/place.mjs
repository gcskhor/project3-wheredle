export default function placeModel(sequelize, DataTypes) {
  return sequelize.define('place', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    formatted_address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    geometry: {
      type: DataTypes.JSON,
    },
    rating: {
      type: DataTypes.STRING,
    },
  },
  {
    underscored: true,
  });
}
