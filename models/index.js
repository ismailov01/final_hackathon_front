const { password } = require("pg/lib/defaults");
const { DataTypes } = require("sequelize");
const sequelize = require("./../db.js");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  brand: { type: DataTypes.ENUM(['Jordan', 'Lebron', 'Kobe Bryant', 'Under Armour']) },
  price: { type: DataTypes.INTEGER },
  image: { type: DataTypes.STRING }
});

// const Picture = sequelize.define("picture", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   image: { type: DataTypes.STRING },
// });

const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  owner: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.TEXT, allowNull: false },
});

const Like = sequelize.define("like", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.BOOLEAN, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Comment)
Comment.belongsTo(User)

Product.hasMany(Comment)
Comment.belongsTo(Product)

User.hasMany(Like)
Like.belongsTo(User)

Product.hasMany(Like)
Like.belongsTo(Product)

User.hasMany(Rating)
Rating.belongsTo(User)

Product.hasMany(Rating)
Rating.belongsTo(Product)

// User.hasMany(Comment);
// Comment.belongsTo(User);


module.exports = {
  User,
  Product,
  Like,
  Comment,
  Rating,
};
