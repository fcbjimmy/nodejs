const path = require("path");

console.log(path.sep);

//join method
const filePath = path.join("/content", "subfolder", "test.txt");

//base name just want the last portion
const base = path.basename(filePath);
console.log(base);

//returns an absolute path, it accepts a sequence of path or path segments and resolve it into an absolute path

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
