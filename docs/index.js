const basicInfo = require('./basic-info')
const components = require('./components')
const paths = require('./paths')
const servers = require('./servers')
const tags = require('./tags')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...paths
}