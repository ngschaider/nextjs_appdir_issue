import { NextApiRequest, NextApiResponse } from "next";
import { randomNumber } from "../../server/randomNumber";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.json({
        value: randomNumber,
    });
}