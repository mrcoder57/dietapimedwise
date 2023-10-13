import express from 'express';
import dietRoute from './diet.route.js';
const router = express.Router();
export default () => {
    dietRoute(router);
    return router;
};
//# sourceMappingURL=index2.js.map