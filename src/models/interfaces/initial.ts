export interface IInitial {
    tasks : string[];
    contents : string[];
    isLoading : boolean;
    error : null | string | undefined
    page : number;
  }
export interface IAuthInitial {
    isLoading : boolean;
    error : null | string | undefined
    accessToken : string | never[],
    refreshToken : string | never[]
  }