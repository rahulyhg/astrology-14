module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		sign_1: {
			type: DataTypes.STRING,
			allowNull:true
		},
		sign_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
			sign_2: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status: {
			type: DataTypes.ENUM('active', 'inactive'),
			defaultValue: 'active'
		}
	});

	return User;
}