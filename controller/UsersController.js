const { v4: uuidv4 } = require('uuid');
const users = require('../model/Users');


exports.creatUsers = async (req, res) => {

    console.log("Req===data==>", req.body);

    try {

        const newUsers = new users({
            userId: uuidv4(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNumber: req.body.mobileNumber,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email,
        })

        const saveUser = await newUsers.save();

        res.status(200).json(saveUser)

    } catch (error) {
        res.status(500).json("error", error.message)
    }
}

exports.allUsers = async (req, res) => {

    try {
        const allUser = await users.find();
        console.log("allUser==>", allUser);
        res.status(200).json(allUser);

    } catch (error) {
        res.status(500).json("error", error.message)
    }

}

exports.findUser = async (req, res) => {
    try {

        const userId = req.params.id;
        const findUser = await users.findById(userId);

        res.status(200).json(findUser);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.updateUser = async (req, res) => {
    console.log("id===>", req.params.id);
    try {

        const userId = req.params.id;
        const updateData = req.body;

        const updatedUser = await users.findByIdAndUpdate(userId, updateData, {
            new: true,
            runValidators: true,
        });

        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json(error.message);
    }
}



exports.deleteUser = async (req, res) => {
    console.log("delect===>id===>", req.params.id);
    
    try {

        const userId = req.params.id;
        const deleteUser = await users.deleteOne({ userId: userId });

        res.status(200).json(deleteUser);

    } catch (error) {
        res.status(500).json(error.message);
    }
}


exports.searchUsers = async (req, res) => {
    try {
        const keywords = req.params.keywords;

        const searchUsers = await users.find({
            $or: [
                { mobileNumber: keywords },
                { firstName: { $regex: keywords, $options: 'i' } } 
            ]
        });

        res.status(200).json(searchUsers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
