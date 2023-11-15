import { css, html, LitElement } from 'lit';

export class MyControlledInput extends LitElement {
  static get properties () {
    return {
      label: { type: String },
      value: { type: String },
    };
  }

  constructor () {
    super();

    this.label = null;

    this.value = '';
  }

  render () {
    return html`
      <label for="my-input">${this.label}</label>
      <!-- note that we set the value property and not the attribute because we want to sync everything -->
      <input id="my-input" type="text" .value=${this.value} />
    `;
  }

  static get styles () {
    return [
      // language=CSS
      css`
        :host {
          display: block;
        }
      `,
    ];
  }
}

window.customElements.define('my-controlled-input', MyControlledInput);