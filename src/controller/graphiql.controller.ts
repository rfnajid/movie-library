import { Request, Response } from "express";
require("dotenv").config();


export const PageGraphiql = (req: Request, res: Response) => {
    res.render('./graphiql.ejs', {graphqlUrl : process.env.BASE_URL+process.env.GRAPHQL_PATH});
}