class MyButton extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    // The mode property of the ShadowRoot specifies its mode — either open or closed.
    // This defines whether or not the shadow root's internal features are accessible from JavaScript.
    const shadow = this.attachShadow({ mode: "open" });

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    // Create button

    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.innerText = "Click me!!";

    // Create css to apply style to shadow dom
    const style = document.createElement("style");
    style.textContent = `
      .wrapper {
        position: relative;
      }
      .button {
        width: 250px;
        display: inline-block;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    `;

    // Attach the created elements to shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(button);
  }
}
customElements.define("my-button", MyButton);
