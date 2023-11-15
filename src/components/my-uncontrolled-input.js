import { css, html, LitElement } from 'lit';

export class MyUncontrolledInput extends LitElement {
  static get properties () {
    return {
      label: { type: String },
      defaultValue: { type: String },
    };
  }

  // FIXME change defaultValue to value
  constructor () {
    super();

    this.label = null;

    this.defaultValue = '';
  }

  render () {
    return html`
      <label for="my-input">${this.label}</label>
      <!-- note that we set the value attribute because we only want to set the initial value of the input and let the HTML element drive its own state -->
      <input id="my-input" type="text" value=${this.defaultValue} />
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

window.customElements.define('my-uncontrolled-input', MyUncontrolledInput);