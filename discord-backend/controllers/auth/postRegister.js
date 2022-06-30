const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { firstName, lastName, username, mail, password } = req.body;

    console.log("user register request came");
    // check if user exists
    const userMailExists = await User.exists({ mail: mail.toLowerCase() });
    const userUsernameExists = await User.exists({ username: username.toLowerCase() });

    console.log(userMailExists);
    console.log(userUsernameExists);

    if(userMailExists && userUsernameExists){
      return res.status(409).send("E-mail and Username both already in use");
    }
    else{
      if (userMailExists) {
        return res.status(409).send("E-mail already in use");
      }
      else{
        if (userUsernameExists) {
          return res.status(409).send("Username already in use");
        }
      }
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const user = await User.create({
      firstName,
      lastName,
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        mail,
      }, 
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      userDetails: {
        firstName: user.firstName,
        lastName: user.lastName,
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};

module.exports = postRegister;
