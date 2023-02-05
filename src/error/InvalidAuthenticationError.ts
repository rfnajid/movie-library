import { GraphQLError } from "graphql";

export default class InvalidAuthenticationError extends GraphQLError {
    constructor(){
        super("Invalid Authenttications", {
            extensions: {
                code: "INVALID_AUTH"
            }
        });
    }
}