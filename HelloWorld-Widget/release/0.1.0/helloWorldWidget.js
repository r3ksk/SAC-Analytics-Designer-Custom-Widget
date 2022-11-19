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
      shadow.appendChild(hello);


     

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic c2ItMmY3ZTg2YjYtOWJkNC00MjE3LWE5MzItM2Y3OTlhMmJkMjQ2IWIxMzEyNTF8eHN1YWEhYjEyMDI0OTpxQXI0YTdEbFIzOFhCNW15SnRZV0lpTkRBYkU9");
      var obj;
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://extension-suite-workshop.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials", requestOptions)
        .then(response => response.text())
        .then(
          result => {
            console.log(result);
            this.obj = JSON.parse(result);
            const container = document.createElement('div');
            const access_token = document.createElement('span');
            access_token.textContent = "Recieved Access token is " + this.obj.access_token;
            container.appendChild(access_token);
            this.shadow.appendChild(container);
          } 
        )
        .catch(error => console.log('error', error));
    } // constructor
  } // class
  
  // Define the new element
  customElements.define('hw-e', HelloWorldElement);