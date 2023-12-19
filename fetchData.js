function fetchData(callback) {
  setTimeout(() => {
    callback("i like food");
  }, 1000);
}
module.exports = fetchData;
