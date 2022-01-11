const ErrorHandler = require("./../utils/error-handler.js");
const { Comment } = require("./../models/index.js");


const create = async (text, productId, userId, owner) => {
    const product = await Comment.create({ text, productId, userId, owner });

    return product
};

const getAll = async (id) => {
    return Comment.findAll({ where: { productId: id } })
}

const deleteOne = async (id) => {
    return await Comment.destroy({ where: { id } })
}
const update = async (id, text) => {
    return await Comment.update(
        { text },
        { where: { id } }
    );
    //   return await Product.patch({ where: { id } });
};
const getOne = async (id) => {
    const comment = await Comment.findOne({
        where: { id },
    });
    // console.log(comment);
    return comment.dataValues;
};

module.exports = {
    create,
    update,
    getAll,
    getOne,
    deleteOne
};
