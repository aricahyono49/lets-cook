class ImgBrand extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div div class = " flex-fill d-flex  d-lg-none " >
                <img src="img/Lets'cook3.png" alt="" style="height: 150px;" class=" ">
            </div>`
            ;
    }

}
customElements.define("img-brand", ImgBrand);