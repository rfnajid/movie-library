import { GraphQLError } from "graphql";

export default class ForbiddenError extends GraphQLError {
    constructor(){
        super("Forbidden ACCESS", {
            extensions: {
                code: "FORBIDDEN"
            }
        });
    }
}