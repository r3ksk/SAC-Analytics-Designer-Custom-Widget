class HelloWorldElement extends HTMLElement {
    
    constructor() {
      // Always call super first in constructor
      super();

      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});

      let name;

    //   setName (name){
    //     this.name = name;
    //   }

    //   getName (name) {
    //     return this.name;
    //   }

      if(this.hasAttribute('name')) {
        this.name = this.getAttribute('name');
      } else {
        this.name =  "No Name Given";
      }

    //   sayHello (name){
    //     this.setName(name);
    //   }

      const hello = document.createElement('span');

      // Take attribute content and put it inside the info span
      hello.textContent = this.name;

      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      shadow.appendChild(hello);
    }
  }
  
  // Define the new element
  customElements.define('hwe', HelloWorldElement);