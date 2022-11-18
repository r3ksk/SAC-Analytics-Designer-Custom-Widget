class PopUpInfo extends HTMLElement {
    
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
      hello.setAttribute('class', 'info');

      // Take attribute content and put it inside the info span
      hello.textContent = this.name;

     // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);
  
      style.textContent = `
        .wrapper {
          position: relative;
        }
  
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
  
        img {
          width: 1.2rem;
        }
  
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      shadow.appendChild(hello);
    }
  }
  
  // Define the new element
  customElements.define('popup-info', PopUpInfo);