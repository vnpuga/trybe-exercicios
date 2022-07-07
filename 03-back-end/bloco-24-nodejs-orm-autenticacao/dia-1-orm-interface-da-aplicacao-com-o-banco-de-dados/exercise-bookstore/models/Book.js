const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", { 
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return Book;
};

module.exports = Book;
// é o Book q está dentro do define() q é lido pelo index.js no models