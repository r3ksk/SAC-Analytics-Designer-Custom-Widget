(function()  {
  let tmpl = document.createElement('template');
  tmpl.innerHTML = `
  `;

  customElements.define('com-sap-sample-helloworld4_1', class HelloWorld extends HTMLElement {


  constructor() {
    super(); 
    this._shadowRoot = this.attachShadow({mode: "open"});
          this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
          this._firstConnection = false;
          this._tagContainer;
          this._tagType = "h1";
          this._tagText = "Hello World";
          this._selectedRowData = "";
          this._baseURL = "https://spa-api-gateway-bpi-eu-prod.cfapps.eu10.hana.ondemand.com/";
          this._uaaURL = "https://extension-suite-workshop.authentication.eu10.hana.ondemand.com/";
          this._tokenURL = this._uaaURL  + "oauth/token?grant_type=client_credentials";
          this._apiURL = this._baseURL  + "workflow/rest/v1/workflow-instances"

          this.fetchToken();

          var _myHeaders = new Headers();
        //   AppendToHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vZXh0ZW5zaW9uLXN1aXRlLXdvcmtzaG9wLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0xMzg5MTY0Nzk3IiwidHlwIjoiSldUIn0.eyJqdGkiOiI0ZGNlYzM2NWI0M2U0NTFiYjk0ZGRiMzZkMDJkNWEwOCIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiI5NDRiMmU0Ni1jMWMzLTQ2ZTYtOGI4MC1jNDU4NGJhNjA5MzciLCJ6ZG4iOiJleHRlbnNpb24tc3VpdGUtd29ya3Nob3AiLCJzZXJ2aWNlaW5zdGFuY2VpZCI6IjJmN2U4NmI2LTliZDQtNDIxNy1hOTMyLTNmNzk5YTJiZDI0NiJ9LCJzdWIiOiJzYi0yZjdlODZiNi05YmQ0LTQyMTctYTkzMi0zZjc5OWEyYmQyNDYhYjEzMTI1MXx4c3VhYSFiMTIwMjQ5IiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSJdLCJjbGllbnRfaWQiOiJzYi0yZjdlODZiNi05YmQ0LTQyMTctYTkzMi0zZjc5OWEyYmQyNDYhYjEzMTI1MXx4c3VhYSFiMTIwMjQ5IiwiY2lkIjoic2ItMmY3ZTg2YjYtOWJkNC00MjE3LWE5MzItM2Y3OTlhMmJkMjQ2IWIxMzEyNTF8eHN1YWEhYjEyMDI0OSIsImF6cCI6InNiLTJmN2U4NmI2LTliZDQtNDIxNy1hOTMyLTNmNzk5YTJiZDI0NiFiMTMxMjUxfHhzdWFhIWIxMjAyNDkiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjNhMjc5YzMxIiwiaWF0IjoxNjY4NjYxMTMzLCJleHAiOjE2Njg3MDQzMzMsImlzcyI6Imh0dHBzOi8vZXh0ZW5zaW9uLXN1aXRlLXdvcmtzaG9wLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vb2F1dGgvdG9rZW4iLCJ6aWQiOiI5NDRiMmU0Ni1jMWMzLTQ2ZTYtOGI4MC1jNDU4NGJhNjA5MzciLCJhdWQiOlsidWFhIiwic2ItMmY3ZTg2YjYtOWJkNC00MjE3LWE5MzItM2Y3OTlhMmJkMjQ2IWIxMzEyNTF8eHN1YWEhYjEyMDI0OSJdfQ.nL0ZjWweY9wEZNEeneclTpSCJ3B8RFrEmtV2r754v4p-IaQ3rZAbg2O8VCGyLiVFWyWS2Go6vGQOM5KhXP7yxzUaglCpKIxJhRX96Dzdtz7sMDDWHfSktnJjtHLl6gF2Q5hPPFs2JmA76Ci9XipzWG8ttaXkpRXz-bY_LI8h3BQLH8LdTBJp1teCMYiv6IqKbu9yANmUrx35nZW8KlfIiBVsOypC1lyrSD9buavboTO7Fp0_I8_VWqmRfeV2t9ICV87Kv1PtNo1VGp_qEWiNCWNRRacMsAtxZCxNJ2Y2E0z4KS1lOHzRENmvN_pZJ9-S0hAXf_OyomgZew7EpZ4WXA");
        //   AppendToHeader("Content-Type", "application/json");
  }

      //Fired when the widget is added to the html DOM of the page
      connectedCallback(){
          this._firstConnection = true;
          this.redraw(); 
      }

       //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
      disconnectedCallback(){
      
      }

       //When the custom widget is updated, the Custom Widget SDK framework executes this function first
  onCustomWidgetBeforeUpdate(oChangedProperties) {

  }

      //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
  onCustomWidgetAfterUpdate(oChangedProperties) {
          if (this._firstConnection){
              this.redraw();
          }
      }
      
      //When the custom widget is removed from the canvas or the analytic application is closed
      onCustomWidgetDestroy(){
      
      }

      
      //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
      // Commented out by default
      /*
      onCustomWidgetResize(width, height){
      
      }
      */

      //Getters and Setters

      get Header(){
        return this._myHeaders;
      }

      set Header(value){
        return this_myHeaders = value;
      }

      AppendToHeader(type, value){
        this_myHeaders.append(type, value);
      }

      clearHeader(){
        this.myHeaders = null;
        this.myHeaders = new Headers(); 
      }

      get widgetText() {
          return this._tagType;
      }

      set widgetText(value) {
          this._tagText = value;
      }


      get headingType() {
          return this._tagType;
          }

      set headingType(value) {
          this._tagType = value;
      }

      get selectedRowData() {
        return this._selectedRowData;
        }

      set selectedRowData(value) {
        this._selectedRowData = value;
      }

      // End - Getters and Setters

      fetchToken(){
        let clientID = "sb-2f7e86b6-9bd4-4217-a932-3f799a2bd246!b131251|xsuaa!b120249";
        let clientSecret = "qAr4a7DlR38XB5myJtYWIiNDAbE=";
        let basicAuthCred = "Basic c2ItMmY3ZTg2YjYtOWJkNC00MjE3LWE5MzItM2Y3OTlhMmJkMjQ2IWIxMzEyNTF8eHN1YWEhYjEyMDI0OTpxQXI0YTdEbFIzOFhCNW15SnRZV0lpTkRBYkU9";

        this.AppendToHeader("Authorization", basicAuthCred);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

      fetch(this._tokenURL, requestOptions)
        .then(response => response.text())
        .then(
          result => {
            var obj = JSON.parse(result);
            this._tagText = "Access Token is " + obj.access_token;
            this._tagType = "h1";
            this.redraw();
          } 
        )
        .catch(error => console.log('error', error));
      }
      
      // trigger workflow implementtion
      triggerWorkflow(){

      }

      // redraw
      redraw(){
          if (this._tagContainer){
              this._tagContainer.parentNode.removeChild(this._tagContainer);
          }

          var shadow = window.getSelection(this._shadowRoot);
          this._tagContainer = document.createElement(this._tagType);
          var theText = document.createTextNode(this._tagText);    
          this._tagContainer.appendChild(theText); 
          this._shadowRoot.appendChild(this._tagContainer);
      }
  });
      
})();