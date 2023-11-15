class MyCustomInput extends HTMLInputElement {
  static observedAttributes = ['label', 'name'];

  constructor() {
    super();

    this._shadow = this.attachShadow({ mode: "open" });

    this.label = '';

    this.name = '';

    this._render(); 
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue != newValue) {
      this[name] = newValue;
      this._render(); 
    }
  }

  _render () {
    // bad for XSS but who cares here :)
    // this.innerHTML = `
    //   <label for="input">${this.label}</label>
    //   <input id="input" name="${this.name}" />
    // `;
  }
}

customElements.define("my-custom-input", MyCustomInput, { extends: "input" });