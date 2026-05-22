const jwt = require("jsonwebtoken");

function protect(req, res, next){

  let token = req.headers.authorization;

  if(!token){
    return res.status(401).json({
      message: "No token, authorization denied"
    });
  }

  try{

    token = token.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  }
  catch(error){

    return res.status(401).json({
      message: "Invalid token"
    });

  }

}

function adminOnly(req, res, next){

  if(req.user && req.user.role === "admin"){
    next();
  }
  else{
    return res.status(403).json({
      message: "Admin access only"
    });
  }

}

module.exports = {
  protect,
  adminOnly
};