import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class like_res extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      like_res_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users', // Bảng users (liên kết khóa ngoại)
          key: 'user_id'
        }
      },
      res_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'restaurant', // Bảng restaurant (liên kết khóa ngoại)
          key: 'res_id'
        }
      },
      date_like: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    }, {
      sequelize,
      tableName: 'like_res', // Tên bảng trong cơ sở dữ liệu
      timestamps: false, // Không sử dụng cột `createdAt` và `updatedAt`
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "like_res_id" },
          ]
        },
        {
          name: "user_id",
          using: "BTREE",
          fields: [
            { name: "user_id" },
          ]
        },
        {
          name: "res_id",
          using: "BTREE",
          fields: [
            { name: "res_id" },
          ]
        },
      ]
    });
  }
}
