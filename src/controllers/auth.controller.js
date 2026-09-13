const { registerUser, loginUser } = require("../services/auth.service");

const signUp = (req,res)=>{
    try {
        const {userName , password} = req.body;

        const user = await registerUser(userName,password);

        res.status(201).json({
            success : true,
            message : "User Registered Successfully",

        })
    } catch (error) {
        res.status(500).json({
            sucess : false,
            message : "Server error.Please try again later"
        })
    }
}

const signIn = (req,res)=>{
    try {
        const {userName , password} = req.body;

        const [user,token] = await loginUser(userName,password);

        res.status(200).json({
            success : true,
            message : "User Logged in successfully"
        });
    } catch (error) {
                res.status(500).json({
            sucess : false,
            message : "Server error.Please try again later"
        })
    }
};

module.exports = {signIn , signUp}