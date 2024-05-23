import Express from "express";
import images from "./api/images";
const routes = Express.Router();

routes.use("./images", images);

export default routes;