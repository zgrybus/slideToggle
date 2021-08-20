export namespace JestDOM {
  export const selectors = {
    button: 'button-with-action',
    element: 'element',
  };

  const get = () => {
    return `
      <div>
        <button role="${selectors.button}">Button with action</button>
        <div role="${selectors.element}" style="height: 500px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec dictum ipsum non enim suscipit rutrum. 
          Praesent rutrum elit consequat ante imperdiet, ut gravida leo viverra. 
          Cras quis quam orci. Pellentesque eget quam ut quam consequat rhoncus vitae a mi.
          Duis vulputate consequat ligula vel maximus. Donec a posuere nibh. 
          Sed euismod purus augue, sed mollis nunc molestie ac. Aenean in sem venenatis, molestie nulla sed, semper ante.
          Integer ullamcorper non erat fringilla facilisis. Nullam id leo lacinia dolor pulvinar suscipit sed id sapien.
  
          Proin metus arcu, consectetur sit amet interdum sed, imperdiet vel velit. Maecenas eu tristique ipsum. 
          Morbi rhoncus, orci sed lacinia ornare, purus ex dapibus erat, sed sagittis urna leo vitae sapien. 
          Aenean nec enim eu urna feugiat sagittis. Donec et lorem in nisl cursus volutpat. 
          Pellentesque tincidunt mi nec arcu elementum, in consequat risus lobortis.
          Donec est magna, consectetur eu eleifend quis, ornare gravida diam. Sed vel felis id justo tempus blandit.
          Cras euismod fringilla finibus. Ut sit amet fringilla elit. Proin sit amet posuere tellus.
          Proin at urna quam. Sed ac lorem et nunc mollis tincidunt.
        </div>
      </div>
    `;
  };

  export const attach = () => {
    document.body.innerHTML = get();
  };
}
