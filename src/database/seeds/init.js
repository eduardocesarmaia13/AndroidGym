import { BaseModel } from "../utils/baseModel";
import { ConfigsSeeds } from "./configs";
import { UsersSeeds } from "./users";

function SeedsInit() {
  this.execute = async () => {
    const pgAdmin = await new BaseModel();
    const users = new UsersSeeds();
    const configs = new ConfigsSeeds();

    await users.execute(pgAdmin);
    await configs.execute(pgAdmin);

    return process.exit(0);
  };
}

export const seeds = new SeedsInit().execute();
