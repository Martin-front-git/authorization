export interface ICookie {
    token: string;
}

export const tokenCookie = {
  set: ({ token }: ICookie) => {
    const expirationDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/`;
  },
  get: (cookieName: string): string | null => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  },
};
