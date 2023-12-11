import { IToken } from "../models/interfaces/token";

export const tokenCookie = {
  set: ({ accessToken }: IToken): void => {
    const expirationDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `accessToken=${JSON.stringify(accessToken)}; expires=${expirationDate.toUTCString()}; path=/`;
  },
  get: (accessToken: string): IToken | null => {
    const name = accessToken + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        const tokenValue = cookie.substring(name.length, cookie.length);
        try {
          const tokenObject: IToken = JSON.parse(tokenValue);
          return tokenObject;
        } catch (error) {
          console.error("Ошибка при парсинге токена:", error);
          return null;
        }
      }
    }
    return null;
  },
  remove: (): void => {
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; SameSite=None";  
    window.location.href = "/signIn";
  },
  
};