
const checkRequestIdAndUserId = async (req, res, next) => {
    const { prodID } = req.params;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, "evaluation");
    const requestId = decoded.userID;
  
    try {
      const note = await ProductModel.findOne({ _id: prodID });
      const userIdInProduct = note.userID;
  
      if (requestId === userIdInProduct) {
        req.note = note;
        next();
      } else {
        res.status(403).send({ msg: "You are not authorized to perform this action" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  };

  module.exports={checkRequestIdAndUserId}