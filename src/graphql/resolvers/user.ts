import User from "../../models/user";
import { Crypt } from "../../util/crypt";
import * as jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-express";
require('dotenv').config();

const UserResolver = {
    Mutation : {
        async register(root, args, context) {
            const { name, email, password } = args.input;
            return User.create({ name, email, password });
        },
    
        async login(root, { input }, context) {
            const { email, password } = input;
            const user = await User.findOne({ where: { email } });

            console.log('login : '+JSON.stringify(user));
            if (user && Crypt.compare(password, user.password)) {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
                return { ...user.toJSON(), token };
            }
            throw new AuthenticationError('Invalid credentials');
        },
    },
}

export default UserResolver;