const ErrorHandler = require("./../utils/error-handler.js");
const { Rating } = require("./../models/index.js");


const create = async (rate, productId, userId) => {
    const ratings = await Rating.create({ rate, productId, userId });

    return ratings
};

const getAll = async (id) => {
    return Rating.findAll({ where: { productId: id } })
}

const deleteOne = async (id) => {
    return await Rating.destroy({ where: { id } })
}
const update = async (id, rate) => {
    return await Rating.update(
        { rate },
        { where: { id } }
    );
    //   return await Product.patch({ where: { id } });
};
const getOne = async (id) => {
    const rating = await Rating.findOne({
        where: { id },
    });
    // console.log(rating);
    return rating.dataValues;
};

module.exports = {
    create,
    update,
    getAll,
    getOne,
    deleteOne
};
