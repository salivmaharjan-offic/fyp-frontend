export const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    const currentTime = Date.now() / 1000;

    return payload.exp < currentTime;
  } catch {
    return true;
  }
};
