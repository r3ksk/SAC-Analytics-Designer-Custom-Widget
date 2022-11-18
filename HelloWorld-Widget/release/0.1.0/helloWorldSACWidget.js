(function () {

  let tmpl = document.createElement('template');
  let name;

  this.tmpl.innerHTML = '<span id="hwName">No Data</span>';


class HelloWorldElement extends HTMLElement {
    
    constructor() {
      // Always call super first in constructor
      super();

      // Create a shadow root
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }

  set Name (a){
    this._shadowRoot.getElmentById("hwName").value = a;
  }

  get Name() {
    return this._shadowRoot.getElmentById("hwName").value;
  }
}

  // Define the new element
  customElements.define('hw-e', HelloWorldElement);

})();  