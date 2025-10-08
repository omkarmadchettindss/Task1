const info = (message) => {
  console.log(`[INFO] : ${message}`);
};

const error = (message, err) => {
  console.error(`[ERROR] : ${message}`, err);
};

module.exports = { info, error };
