export const getToken = (): string | null => localStorage.getItem('TOKEN');
export const setToken = (token: string): void => localStorage.setItem('TOKEN', token);
export const forgetToken = (): void => localStorage.removeItem('TOKEN');
