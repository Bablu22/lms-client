import { apiSlice } from "../api/apiSlice";
import { userRegistration } from "./authSlice";

type responseData = {
  success: boolean;
  message: string;
  data: any;
};

type RegistrationData = {
  token: string;
  code: string;
};

type verificationData = {
  name: string;
  email: string;
  password: string;
};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<responseData, RegistrationData>({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      onQueryStarted: (data) => {
        const { token } = data;
        userRegistration(token);
      },
    }),

    sendVerification: builder.mutation<responseData, verificationData>({
      query: (data) => ({
        url: "auth/send-varification-token",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useRegisterMutation, useSendVerificationMutation } = authApi;
