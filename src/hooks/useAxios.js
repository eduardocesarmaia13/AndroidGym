export function useAxios() {
  function request() {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_INTERNAL_API_URL,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      proxy: false,
    });
  }

  return {
    request,
  };
}
