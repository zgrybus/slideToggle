export namespace Numbers {
  export const parseOrElse = (str: string, or = '0') => {
    if (!str) {
      return parseInt(or);
    }
    return parseInt(str);
  };
}
