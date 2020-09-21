import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cors from "cors";

const handler = nc()
  .use(cors())
  .get((req: NextApiRequest, res: NextApiResponse) => {
    res.json({
      hello: "World",
    });
    res.end();
  });

export default handler;
