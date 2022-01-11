const { NOT_FOUND } = require("../utils/consts")
const ErrorHandler = require("../utils/error-handler")


const checkPermission = (Model) => async (req, res, next) => {
    try {
        const { id } = req.params;
        const { user } = req;
        const data = await Model.findOne({ where: { id } });
        if (!data) return next(ErrorHandler.BadRequest(NOT_FOUND));
        if (user.id === data.userId || user.role === 'ADMIN') {
            return next();
        }
        next(ErrorHandler.ForbiddenError('Permission here denied'));
    } catch (error) {
        next(ErrorHandler.ForbiddenError('Permission denied'));
    }
};
module.exports = checkPermission