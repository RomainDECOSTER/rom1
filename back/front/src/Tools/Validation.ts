export const required = (value: string) => (value ? undefined : "Required");
export const number = (value: number) => (value && isNaN(Number(value)) ? "Must be a number" : undefined);
export const email = (value: string) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
};
