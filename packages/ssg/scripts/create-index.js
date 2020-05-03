const { getPaths, loadConfig, createIndex } = require("./api");

const config = loadConfig();
const paths = getPaths();

createIndex(paths, config);
