import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../services/Urls';

export const userAuth = createApi({
  reducerPath: 'userAuth',

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: builder => ({
    SignInUser: builder.mutation({
      query: body => ({
        url: '/user/userLogin',
        method: 'POST',
        body,
      }),
    }),
    SignUpUser: builder.mutation({
      query: body => ({
        url: '/user/userSignup',
        method: 'POST',
        body,
      }),
    }),

    ForgotPassUser: builder.mutation({
      query: body => ({
        url: '/user/forgetPassword',
        method: 'POST',
        body,
      }),
    }),

    verifyOtp: builder.mutation({
      query: body => {
        console.log('Data', body);
        return {
          url: `/user/otpVerify/${body._id}`,
          method: 'POST',
          body: body.data,
        };
      },
    }),
    changePassword: builder.mutation({
      query: body => ({
        url: `/user/resetPassword/${body.id}`,
        method: 'PATCH',
        body: body.data,
      }),
    }),
  }),
});

export const {
  useSignInUserMutation,
  useSignUpUserMutation,
  useForgotPassUserMutation,
  useVerifyOtpMutation,
  useChangePasswordMutation,
} = userAuth;
