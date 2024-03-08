const UsersModel = require("../models/users");
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  //console.log(req.body);
  const { body } = req;

  try {
    console.log(req)
    await UsersModel.createNewUser(req.body);
    res.json({
      message: "CREATE new user succees",
      data: res.data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
}

const updateUser = async(req, res) => {
  const { id } = req.params;
  const {body} =req;
  try {
      await UsersModel.updateUser(body, id);
      res.json({
        message: "UPDATE user success",
        data:req.body
      });
  } catch (error) {
    res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
  }
}
const deleteUser = async(req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
      res.json({
        message: "DELETE user success",
        data:null
      })
    
  } catch (error) {
    res.status(500).json({
        message: "Server Error",
        serverMessage: error,
      });
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
