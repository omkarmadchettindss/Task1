const logger = require("../utils/logger");

const getUsers = (req, res, next) => {
  try {
    const users = [{ name: "Omkar" }, { name: "Aditya" }];
    logger.info("Fetched users successfully");
    return res
      .status(200)
      .json({ message: "Users fetched successfully", users });
  } catch (err) {
    logger.error("Errro fetching users : ", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getApi = (req, res) => {
  try {
    return res.status(200).json({ message: "Hello world" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const postApi = (req, res) => {
  try {
    const body = req.body;
    return res.status(200).json({ body });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const putApi = (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Id for Update : ${id}`);
    return res.status(200).json({ id, body: req.body });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteApi = (req, res) => {
  try {
    const id = req.params.id;
    console.log(`Removed Id : ${id}`);
    return res.status(200).json({ message: `Item with ID ${id} deleted.` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUsers, getApi, postApi, putApi, deleteApi };
