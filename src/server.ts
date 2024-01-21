
// const express, { Request, Response } = require("express");
// const next = require ("next");
import express, { Request, Response } from 'express';
import next from 'next';

const app = next ({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then( () => {

    const server = express();

    server.get ('*', (req: Request, res: Response) => {
        return handle(req, res)
    })

    // const server = express ();
    server.listen (3000, () => {
        console.log ("server ready on localhost: 3000")
    })
})

// import express, { Request, Response } from 'express';
// import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const port = 3000;

// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get('*', (req: Request, res: Response) => {
//     return handle(req, res);
//   });

//   server.listen(port, () => {
//     console.log(`Server ready on http://localhost:${port}`);
//   });
// });