const { CREATE_SUCCESS, DELETE_SUCCESS } = require("../utils/consts");
const FeedbackService = require("../services/feedback-service");



const create = async (req, res, next) => {
    try {
        const { rate, productId, userId } = req.body
        const { id } = req.user
        await FeedbackService.create(rate, productId, id);
        res.json(CREATE_SUCCESS);
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const getAll = async (req, res, next) => {
    try {
        const { id } = req.params;
        const ratings = await FeedbackService.getAll(id)
        // console.log(ratings)
        res.json(ratings)
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const update = async (req, res, next) => {
    try {
        const { rate } = req.body;

        const { id } = req.params;
        await FeedbackService.update(id, rate);
        res.json({ message: DELETE_SUCCESS });
    } catch (error) {
        console.log(error)
        next(error)
    }
}
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params
        await FeedbackService.deleteOne(id)
        res.json({ message: DELETE_SUCCESS })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;

        const rating = await FeedbackService.getOne(id);
        res.json(rating);
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