import { useNavigation } from "../../contexts/useNavigation";
// import { Users } from "../../database/entities/users";
// import { BaseModel } from "../../database/utils/baseModel";
import { Alert } from "react-native";

export function useAuthentication() {
  const { handleUser } = useNavigation();
  async function authentication({ email, password }) {
    // const model = new BaseModel();
    // const user = new Users();

    // user.setEmail(email);
    // user.setPassword(password);

    // const foundUser = await model.findFirst(user, {
    //   ...user.attributes,
    // });

    // if (!foundUser)
    //   throw new Error("O usuário encontra-se com credenciais inválidas");

    // return {
    //   success: true,
    //   user: foundUser.attributes,
    // };
  }

  return useMutation(authentication, {
    onSuccess: ({ user }) => {
      handleUser(user);
    },
    onError: (err) => {
      Alert.alert("Credenciais inválidas", err.message);
    },
  });
}
