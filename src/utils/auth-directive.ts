import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils"
import { defaultFieldResolver, GraphQLSchema } from "graphql"
import ForbiddenError from "../error/ForbiddenError";

export function authDirective (): (schema: GraphQLSchema) => GraphQLSchema {
    return schema => mapSchema(schema, {
        [MapperKind.OBJECT_FIELD]: fieldConfig => {
            const authDirective = getDirective(schema, fieldConfig, 'isAuthenticated')?.[0]
            if (authDirective) {
                const { resolve = defaultFieldResolver } = fieldConfig
                return {
                    ...fieldConfig,
                    resolve: async function (source, args, context, info) {

                        if(!context.user){
                            throw new ForbiddenError();
                        }

                        return await resolve(source, args, context, info);
                    }
                }
            }
        }
    });
}