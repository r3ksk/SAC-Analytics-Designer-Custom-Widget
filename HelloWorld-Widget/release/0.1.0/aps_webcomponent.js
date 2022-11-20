(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Custom Widget Text</legend>
				<table>
					<tr>
						<td>Text</td>
						<td><input id="aps_text" type="string"></td>
					</tr>
				</table>
			</fieldset>
		</form>
		<form id="config">
			<fieldset>
				<legend>SAP Process Automation Configurations</legend>
				<table>
					<tr>
						<td>Base URL</td>
						<td><input id="baseURL" type="string"></td>
						<td>UAA URL</td>
						<td><input id="uaaURL" type="string"></td>
						<td>Client ID</td>
						<td><input id="clientID" type="string"></td>
						<td>Client Secret</td>
						<td><input id="clientSecret" type="string"></td>
					</tr>
				</table>
			</fieldset>
		</form>
	`;

	class HelloWorldAps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
			this._shadowRoot.getElementById("config").addEventListener("submit", this._submitConfigurationChanges.bind(this));
		}

		_submit(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							widgetText: this.widgetText
						}
					}
			}));
		}

		_submitConfigurationChanges(e) {
			e.preventDefault();
			this.dispatchEvent(new CustomEvent("spaConfigurations", {
					detail: {
						properties: {
							baseURL : this.baseURL,
							uaaURL : this.uaaURL,
							clientID: this.clientID,
							clientSecret : this.clientSecret
						}
					}
			}));
		}

		set widgetText(newText) {
			this._shadowRoot.getElementById("aps_text").value = newText;
		}

		get widgetText() {
			return this._shadowRoot.getElementById("aps_text").value;
		}

		set baseURL(url) {
			this._shadowRoot.getElementById("baseURL").value = url;
		}

		get baseURL() {
			return this._shadowRoot.getElementById("baseURL").value;
		}

		set uaaURL(url) {
			this._shadowRoot.getElementById("uaaURL").value = url;
		}

		get uaaURL() {
			return this._shadowRoot.getElementById("uaaURL").value;
		}

		set clientID(id) {
			this._shadowRoot.getElementById("clientID").value = id;
		}

		get clientID() {
			return this._shadowRoot.getElementById("clientID").value;
		}

		set clientSecret(secret) {
			this._shadowRoot.getElementById("clientSecret").value = secret;
		}

		get clientSecret() {
			return this._shadowRoot.getElementById("clientSecret").value;
		}
	}

customElements.define("com-sap-sample-helloworld4_1-aps", HelloWorldAps);
})();