import User from "../../models/user";
import { Crypt } from "../../util/crypt";
import * as jwt from "jsonwebtoken";
import InvalidAuthenticationError from "../../error/InvalidAuthenticationError";
require('dotenv').config();

const UserResolver = {
    Mutation : {
        async register(root, args, context) {
            const { name, email, password } = args;
            return User.create({ name, email, password });
        },

        async login(root, args, context) {
            const { email, password } = args;
            const user = await User.findOne({ where: { email } });

            console.log('login : '+JSON.stringify(user));
            if (user && Crypt.compare(password, user.password)) {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
                return { user, token };
            }
            throw new InvalidAuthenticationError()
        },
    },
}

export default UserResolver;