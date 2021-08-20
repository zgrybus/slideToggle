export namespace Events {
  export const on = (element: HTMLElement, event: string, callback: (event: Event) => void) => {
    element.addEventListener(event, callback);
    return {
      destroy: () => element && element.removeEventListener(event, callback),
    };
  };
}
