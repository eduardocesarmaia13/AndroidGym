import { BAD_REQUEST } from "../../../constants/status";
import { Users } from "../../../database/entities/users";
import { BaseModel } from "../../../database/utils/baseModel";

export function PostUsersUseCase() {
  this.execute = async ({ email, cpf, ...payload }) => {
    const model = await BaseModel();
    const users = new Users();

    const foundUserWithEmail = await model.findFirst(users, {
      email,
    });

    const foundUserWithCPF = await model.findFirst(users, {
      cpf,
    });

    if (foundUserWithEmail)
      throw {
        message: "O e-mail já está sendo utilizado",
        code: BAD_REQUEST,
      };

    if (foundUserWithCPF)
      throw {
        message: "O CPF já está sendo utilizado",
        code: BAD_REQUEST,
      };

    users.setName(payload.name);
    users.setCPF(payload.cpf);
    users.setGender(payload.gender);
    users.setCep(payload.cep);
    users.setEmail(payload.email);
    users.setIsAdmin(false);
    users.setMobile(payload.mobile);
    users.setPassword(payload.password);
    users.setStatus(payload.status);
    users.setHeight(payload.height);
    users.setWeight(payload.weight);
    users.setBirthdate(payload.birthdate);

    const userId = await model.insert(users);

    return {
      succces: "Usuário criado com sucesso",
      user: userId,
    };
  };
}
