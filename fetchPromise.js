function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("food");
    }, 1000);
  });
}

module.exports = fetchPromise;
