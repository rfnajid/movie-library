import * as express from 'express';
import { PageGraphiql } from './controller/graphiql.controller';

const router = express.Router();

router.get('', (req,res) => {
    res.send("hello world");
});

router.get("/graphiql", PageGraphiql);

export default router;