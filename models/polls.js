module.exports = function(sequelize, DataTypes) {
    let Poll = sequelize.define("Poll", {
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Poll.associate = (models) => {
        Poll.hasMany(models.Option, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    }

    return Poll;
}