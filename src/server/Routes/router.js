// import bodyParser from 'koa-bodyparser';
// import cigarDB from `./db`
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

// import all routes here

const apiRouter = new Router({ prefix: '/api' });
apiRouter.use(bodyParser({ enableTypes: ['json', 'text', 'form', 'xml'] }));
// Pulling in all here.
// apiRouter.use(userRouter.routes()).use(userRouter.allowedMethods());

apiRouter.get('/', async (ctx) => {
    ctx.body = 'got me';
// const conn = await cigarDB();

// //CALL
// const response = await conn.query('select * from customer')

// console.log(response)
});

apiRouter.start(8000);

