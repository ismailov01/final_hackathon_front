const { Op } = require("sequelize");
const { Product } = require("./../models");
// const PictureService = require('./../services/picture-service')
const ErrorHandler = require("./../utils/error-handler.js");

const create = async (name, description, brand, image, price) => {
  const product = await Product.create({ name, description, brand, image, price });
  // if (Array.isArray(images)) {

  //   images.forEach((item) => {
  //     PictureService.createPicture(item, product.id)
  //   })
  // } else {
  //   PictureService.createPicture(images, product.id)
  // }
  return product
};

const getAll = async ({ offset, limit, q, brand }) => {
  if (q || brand) {
    q = q || ""
    if (brand) {
      console.log(brand);
      return await Product.findAndCountAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: '%' + q + '%'
              }
            },
          ],
          brand,
        },

        limit,
        offset
      })
    }
    else {
      return await Product.findAndCountAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: '%' + q + '%'
              }
            }
          ],
        },

        limit,
        offset
      })
    }
  }

  return await Product.findAndCountAll({
    limit,
    offset,

  })
}

const deleteOne = async (id) => {
  return await Product.destroy({ where: { id } })
}
const update = async (id, name, description, price, image, brand) => {
  return await Product.update(
    { name, description, price, image, brand },
    { where: { id } }
  );
  //   return await Product.patch({ where: { id } });
};
const getOne = async (id) => {
  const product = await Product.findOne({
    where: { id },
  });
  console.log(product);
  return product.dataValues;
};
module.exports = {
  create,
  getAll,
  deleteOne,
  update,
  getOne
};
