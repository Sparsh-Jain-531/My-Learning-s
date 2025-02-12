import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Middleware for checking cookie in brower for authentication as it check that wheather the user is logged In or not
const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        try {
            const decoded = jwt.verify(token, "fdsfdsfdsfds");
            req.user = await User.findById(decoded._id);
            return next();
        } catch (error) {
            return res.redirect("/login");
        }
    }
    res.redirect("/login");
};

export default isAuthenticated;