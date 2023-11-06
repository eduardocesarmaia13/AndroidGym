import { configs } from "../../data/configs";
import { users } from "../../data/users";
import { Configs } from "../entities/configs";

export function ConfigsSeeds() {
  this.execute = async (pgAdmin) => {
    for await (const config of configs) {
      const configEntity = new Configs(config);

      configEntity.setLabel(config.label);
      configEntity.setValue(config.value);
      configEntity.setReference(config.reference);

      const foundUser = await pgAdmin.findFirst(configEntity, config);

      if (!foundUser) await pgAdmin.insert(configEntity);
    }
    console.log("** SEEDS CONFIGS INSERIDOS COM SUCESSO ** QTD: " + users.length);
  };
}
