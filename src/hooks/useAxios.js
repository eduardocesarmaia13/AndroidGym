import axios from "axios";

export function useAxios() {
  function request() {
    return axios.create({
      baseURL:
        process.env.NEXT_PUBLIC_BASE_INTERNAL_API_URL ??
        "https://a428-2804-3d28-6-2eee-b1cb-ba61-a97c-a1a.ngrok-free.app/api",
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
