class ImgBrand extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
               this.innerHTML = `
            <div class=" flex-fill text-center ">
                <img src="img/Lets'cook3.png" alt="" style="height: 150px;">
            </div>`;
    }

}
customElements.define("img-brand", ImgBrand);