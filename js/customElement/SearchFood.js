class SearchFood extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
       <div class="row mt-3 mb-2">
            <div class="offset-lg-3 col-lg-6 ">
                <input id="searchFood" class="form-control" type="text" placeholder="Search Your Receipe...">
                <span id="search"></span>
            </div>
        </div>
        `;
    }

}
customElements.define("search-food", SearchFood);