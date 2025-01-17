// Objetivo: Criar um Web Component para o menu da aplicação
class MenuComponent extends HTMLElement {
  async connectedCallback() {
    // Carregar o arquivo menu.html
    const templateResponse = await fetch('components/menu.html');
    const templateHTML = await templateResponse.text();

    // Inserir o HTML diretamente no componente
    this.innerHTML = templateHTML;
  }
}
// Definir o Web Component do menu
customElements.define('menu-component', MenuComponent);


// ---------------------------------------------------------
// objecivo: Criar um Web Component para o head da aplicação

class bodyComponent extends HTMLElement {
  async connectedCallback() {
    // Carregar o arquivo head.html
    const templateResponse = await fetch('/components/body.html');
    const templateHTML = await templateResponse.text();

    // Inserir o HTML diretamente no componente
    this.innerHTML = templateHTML;
  }
}
// Definir o Web Component do head
customElements.define('body-component', bodyComponent);

// ---------------------------------------------------------
// objecivo: Criar um Web Component para o rodape da aplicação
class footerComponent extends HTMLElement {
  async connectedCallback() {
    // Carregar o arquivo rodape.html
    const templateResponse = await fetch('/components/footer.html');
    const templateHTML = await templateResponse.text();

    // Inserir o HTML diretamente no componente
    this.innerHTML = templateHTML;
  }
}
customElements.define('footer-component', footerComponent);

