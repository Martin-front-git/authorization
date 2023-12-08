import { AppDispatch, RootState } from "../../store/store";

export interface IFetchParams {
    dispatch: AppDispatch
    getState: () => RootState;
  }