import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsLoginDm-styles.js';
import { BGADPGrantingTicketsPostV0 } from '@cells-components/bgadp-granting-tickets-v0';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-login-dm></cells-login-dm>
```

##styling-doc

@customElement cells-login-dm
*/
export class CellsLoginDm extends LitElement {
  static get is() {
    return 'cells-login-dm';
  }

  // Declare properties
  static get properties() {
    return {
      host: {type: String},
      country: {type: String},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.host = 'https://cal-glomo.bbva.pe/SRVS_A02';
    this.country = 'pe';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-login-dm-shared-styles')
    ];
  }

  login(userId, password, consumerId){
    const dataProvider = new BGADPGrantingTicketsPostV0(this.country, {
      host: this.host
    });

    dataProvider.generateRequest({
      consumerId,
      userId,
      password
    }).then(
      success => {
        this._parseLoginResponse(success)
      },
      error => {
        this._parseLoginError(error)
      }
    );
  }

  _parseLoginResponse(response) {      
    this.dispatchEvent(new CustomEvent('login-success', {
      composed: true,
      detail: response.getResponseHeader('tsec')
    }));
  }

  _parseLoginError(error) {
    this.dispatchEvent(new CustomEvent('login-error', {
      composed: true,
      detail: error
    }));

  }   

  // Define a template
  render() {
    return html`
      <slot></slot>
    `;
  }
}
