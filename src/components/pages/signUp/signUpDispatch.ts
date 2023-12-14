import { signUp } from "../../../store/slices/authFetchContent";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { ISignUpDispatchArgs } from "../../../models/interfaces/form";

export const SignUpDispatch = async ({data, reset, dispatch, navigate}: ISignUpDispatchArgs) => {
  try {
    reset();
    const action = await dispatch(signUp(data));
    if (signUp.fulfilled.match(action)) {
      tokenCookie.set({
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
      });
      navigate("/signIn");
    }
  } catch (error) {
    console.error("Error during sign up:", error);
    throw error;
  }
};
