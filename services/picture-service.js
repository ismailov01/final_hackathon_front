const { v4: uuid } = require("uuid");
const path = require('path');
const { Picture } = require("../models");

const createPicture = async (image, problemId) => {
    if (image) {
        let fileName = uuid() + '.' + image.mimetype.split('/')[1]
        image.mv(path.resolve('static', fileName))
        await Picture.create({ image: fileName, problemId })
    }

}
module.exports = {
    createPicture
}