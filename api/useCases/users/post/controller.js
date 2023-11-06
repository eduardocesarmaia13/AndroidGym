import { yupOptions } from "../../../config/yup";
import { INTERNAL_ERROR, OK } from "../../../constants/status";
import { postUsersSchema } from "./dto";
import { PostUsersUseCase } from "./useCase";

export function PostUsersController() {
  this.handle = async (request, response) => {
    try {
      const postUsecase = new PostUsersUseCase();

      const { body, query, params } = request;
      const payload = {
        ...query,
        ...body,
        ...params,
      };
      delete params[0];

      await postUsersSchema.validate(payload, yupOptions);

      const resp = await postUsecase.execute(payload);

      return response.status(OK).json(resp);
    } catch (yupErrors) {
      const err = yupErrors.errors ? yupErrors.errors : yupErrors;

      return response.status(err.code ?? INTERNAL_ERROR).json(err.message);
    }
  };
}
