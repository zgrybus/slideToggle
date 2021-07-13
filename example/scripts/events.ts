export namespace Events {
  export const on = (
    selector: string,
    event: string,
    callback: (event: Event) => void
  ) => {
    const element = document.querySelector(selector);
    element && element.addEventListener(event, callback);
    return {
      destroy: () => element && element.removeEventListener(event, callback),
    };
  };
}
