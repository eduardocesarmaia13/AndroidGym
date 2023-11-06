import express from "express";
import { PostUsersController } from "../useCases/users/post/controller";
import { PostAuthenticationsController } from "../useCases/authentications/post/controller";

// eslint-disable-next-line new-cap
const routes = express.Router();

/** GET USERS */
routes.post("/users", new PostUsersController().handle);

/** GET AUTHENTICATIONS */
routes.post("/authentications", new PostAuthenticationsController().handle);

export default routes;
