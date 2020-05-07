const { getPages, createIndex } = require("./api");

const pages = getPages();
createIndex(pages);
