import { signIn } from "../../../store/slices/authFetchContent";
import { tokenCookie } from "../../../hooks/tokenCookie";
import { ISignInDispatchArgs } from "../../../models/interfaces/form";

export const SignInDispatch = async ({data, reset, dispatch, navigate}:ISignInDispatchArgs) => {
  try {
    reset();
    const action = await dispatch(signIn(data));
    if (signIn.fulfilled.match(action)) {
      
      tokenCookie.set({
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
      });
      
      navigate("/tasks");
    }
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};
