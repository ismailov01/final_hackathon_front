const { CREATE_SUCCESS, DELETE_SUCCESS } = require("../utils/consts");
const LikeServices = require("../services/like-service");



const create = async (req, res, next) => {
    try {
        const { status, productId, userId } = req.body
        const { id } = req.user
        await LikeServices.create(status, productId, id);
        res.json(CREATE_SUCCESS);
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const getAll = async (req, res, next) => {
    try {
        const { id } = req.params;
        const like = await LikeServices.getAll(id)
        // console.log(like)
        res.json(like)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const update = async (req, res, next) => {
    try {
        const { status } = req.body;

        const { id } = req.params;
        await LikeServices.update(id, status);
        res.json({ message: DELETE_SUCCESS });
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params
        await LikeServices.deleteOne(id)
        res.json({ message: DELETE_SUCCESS })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;

        const like = await LikeServices.getOne(id);
        res.json(like);
    } catch (error) {
        console.log(error);
        next(error)
    }
}
module.exports = {
    create,
    getAll,
    update,
    deleteOne,
    getOne
}