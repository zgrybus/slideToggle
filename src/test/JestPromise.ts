export namespace JestPromise {
  export const delay = (miliseconds: number) => {
    return new Promise(res => {
      setTimeout(() => res({}), miliseconds);
    });
  };
}
