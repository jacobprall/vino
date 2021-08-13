import pool from '../db/pool';
import { Request, Response } from 'express';

class WineController {

    public async get(req: Request, res: Response) {
        try {
            const client = await pool.connect();
            console.log(req);
            const user = req.params.user_id;
            const sql = `SELECT * FROM wines WHERE user_id=${user}`;
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default WineController;
