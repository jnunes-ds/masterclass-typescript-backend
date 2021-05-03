import { Request, Response } from 'express';

const users = [
    { name: 'Júnior', email: 'denisonprobable13@gmail.com' }
];

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    }
};