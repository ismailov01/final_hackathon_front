const { CREATE_SUCCESS } = require("../utils/consts");



const create = async (req, res, next) => {
    try {
        const { text, problemId } = req.body
        const { id } = req.user
        await ReplyService.create(text, id, problemId);
        res.json(CREATE_SUCCESS);
    } catch (error) {
        next(error)
    }
}
const getAll = async () => {
    try {

    } catch (error) {

    }
}


module.exports = {
    create,
    getAll
}