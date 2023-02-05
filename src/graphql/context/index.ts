import * as jwt from "jsonwebtoken";
import User, { UserModel } from "../../models/user";
require('dotenv').config();

const verifyToken = async (token) => {
    let user: UserModel = null;
    try{    
        const decoded = await jwt.verify(token, process.env.JWT_SECRET!);
        const {id} = decoded as {id};
        user = await User.findByPk(id);
    }catch(err){
        console.log('Anonymous Access!');
    }

    return user;

}

const context = async ({req, res}) => {
    let token = req.get('Authorization') || '';
    token = token.replace('Bearer', '').trim();

    const user = await verifyToken(token);

    return {user};
}

export default context;