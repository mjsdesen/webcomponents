class BaseComponent extends HTMLElement {
  constructor(templatePath) {
    super();
    this.templatePath = templatePath;
  }

  async connectedCallback() {
    const templateResponse = await fetch(this.templatePath);
    const templateHTML = await templateResponse.text();
    this.innerHTML = templateHTML;
  }
}

function defineComponent(tagName, templatePath) {
  customElements.define(tagName, class extends BaseComponent {
    constructor() {
      super(templatePath);
    }
  });
}

// Definir os Web Components
defineComponent('menu-component', 'components/menu.html');
defineComponent('body-component', 'components/body.html');
defineComponent('footer-component', 'components/footer.html');
