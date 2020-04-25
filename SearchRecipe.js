class SearchRecipe extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="offset-lg-3 col-lg-6 ">
                  <input class="form-control" type="text" placeholder="Search Your Receipe...">
        </div>`;
    }

}
customElements.define("search-recipe", SearchRecipe);