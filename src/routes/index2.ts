import express from 'express'
import dietRoute from './diet.route.js';

const router = express.Router();

export default (): express.Router => {
    dietRoute(router);
    return router;
  };