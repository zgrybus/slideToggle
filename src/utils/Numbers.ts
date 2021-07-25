export namespace Numbers {
  export const parseOrElse = (str: string, or = '0') => {
    if (str) {
      return parseInt(str);
    }
    return or && typeof or === 'string' ? parseInt(or) : 0;
  };
}
