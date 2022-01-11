const ErrorHandler = require("./../utils/error-handler.js");
const { Like } = require("./../models/index.js");


const create = async (status, productId, userId) => {
    const like = await Like.create({ status, productId, userId });

    return like
};

const getAll = async (id) => {
    return Like.findAll({ where: { productId: id } })
}

const deleteOne = async (id) => {
    return await Like.destroy({ where: { id } })
}
const update = async (id, status) => {
    return await Like.update(
        { status },
        { where: { id } }
    );
    //   return await Product.patch({ where: { id } });
};
const getOne = async (id) => {
    const like = await Like.findOne({
        where: { id },
    });
    // console.log(like);
    return like.dataValues;
};

module.exports = {
    create,
    update,
    getAll,
    getOne,
    deleteOne
};
