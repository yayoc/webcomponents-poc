class AnimateImage extends HTMLImageElement {
  constructor() {
    super();
    window.onload = function() {
      const image = document.querySelector(":root img");
      image.animate(
        [
          { transform: "translate3D(0, 500px, 0)" },
          { transform: "translate3D(0, -1000px, 0)" }
        ],
        {
          duration: 1000,
          iterations: Infinity
        }
      );
    };
  }
}

customElements.define("animate-image", AnimateImage, { extends: "img" });
