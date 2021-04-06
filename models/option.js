module.exports = function(sequelize, DataTypes) {
    let Option = sequelize.define("Option", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        key: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Option.associate = (models) => {
        Option.belongsTo(models.Poll, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    }

    return Option;
}