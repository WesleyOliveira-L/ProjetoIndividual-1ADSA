'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let usuario = sequelize.define('usuario', {
		idUser: {
			field: 'idUser',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nickName: {
			field: 'nickName',
			type: DataTypes.STRING,
			allowNull: false
		},
		celular: {
			field: 'celular',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		sexo: {
			field: 'sexo',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	},

		{
			tableName: 'usuario',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return usuario;
};
