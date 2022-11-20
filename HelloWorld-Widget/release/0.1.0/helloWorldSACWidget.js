(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
  `;

    customElements.define('com-sap-sample-helloworld4_1', class HelloWorld extends HTMLElement {


        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ mode: "open" });
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
            this._tagContainer;
            this._tagType = "h1";
            this._tagText = "Hello World";
            this._selectedRowData = "";
            this._endpointAPI = "";
            this._uaaURL = "";
            this._clientID = "";
            this._clientSecret = "";
            this._accessToken = "";

            this._myHeaders = new Headers();
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback() {
            this._firstConnection = true;
            this.redraw();
        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback() {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {
            // if(oChangedProperties == "propertiesChanged"){
            //     if (this._firstConnection) {
            //         this.redraw();
            //     }
            // }else if(oChangedProperties == "spaConfigurations"){
                this._tURL = this._uaaURL + "oauth/token?grant_type=client_credentials";
                console.log("tURL - " + this._tURL);
                this._apiURL = this._endpointAPI + "workflow/rest/v1/workflow-instances"
                console.log("api url - " + this._apiURL);
                this.triggerWorkflow();

            // }
        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy() {

        }


        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        //Getters and Setters

        get Header() {
            return this._myHeaders;
        }

        set Header(value) {
            return this_myHeaders = value;
        }

        AppendToHeader(type, value) {
            this._myHeaders.append(type, value);
        }

        clearHeader() {
            this.myHeaders = null;
            this.myHeaders = new Headers();
        }

		set endpointAPI(url) {
			this._endpointAPI = url;
		}

		get endpointAPI() {
			return this._endpointAPI;
		}

		set uaaURL(url) {
			this._uaaURL = url;
		}

		get uaaURL() {
			return this._uaaURL;
		}

		set clientID(id) {
			this._clientID = id;
		}

		get clientID() {
			return this._clientID;
		}

		set clientSecret(secret) {
			this._clientSecret = secret;
		}

		get clientSecret() {
			return this._clientSecret;
		}

        get widgetText() {
            return this._tagText;
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

        fetchToken() {     
            console.log("inside fetchToken");

            console.log("Client ID " + this._clientID);
            console.log("Client Secret " + this._clientSecret);      
            let basicAuthCred = "Basic " +  btoa(this._clientID + ":" + this._clientSecret);
            console.log("Authorization " + basicAuthCred)
            this.AppendToHeader("Authorization", basicAuthCred);

            var requestOptions = {
                method: 'GET',
                headers: this._myHeaders,
                redirect: 'follow'
            };

            const promise = fetch(this._tURL, requestOptions);

            promise.then((response) =>  {
                response.json().then((json) => {
                    console.log("Access Token is " + json.access_token);
                    this._tagText = "Access Token is " + json.access_token;
                    this._tagType = "h1";
                    this._accessToken = json.access_token;
                    this.redraw();
                })
            });
        } // fetchToken end    

        // trigger workflow implementtion
        triggerWorkflow() {
            if(this._accessToken == ""){
                this.fetchToken();
            }
            console.log("inside trigger workflow");
            console.log("Current Access Token " + this._access_token);
            this.clearHeader()
            this.AppendToHeader("Authorization", "Bearer " + this._accessToken);
            this.AppendToHeader("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: this._myHeaders,
                redirect: 'follow'
            };

            const promise = fetch(this._apiURL, requestOptions);

            promise.then((response) =>  {
                response.json().then((json) => {
                    console.log("recieved response " + json);
                })
            });
        } // triggerWorkflow end

        // redraw
        redraw() {
            if (this._tagContainer) {
                this._tagContainer.parentNode.removeChild(this._tagContainer);
            }

            this._tagContainer = document.createElement(this._tagType);
            var theText = document.createTextNode(this._tagText);
            this._tagContainer.appendChild(theText);
            this._shadowRoot.appendChild(this._tagContainer);
        } // redraw end
    });

})();