class TopNavigasi extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
                <nav class=" d-none d-lg-flex bg-info text-center text-white">
                    <div class="p-2 flex-fill "> <i class="fas fa-home"> Home</i></div>
                    <div class="p-2 flex-fill "> <a href="" class="text-white foodOrigin">Japanese</a> </div>
                    <div class="p-2 flex-fill "><a href="" class="text-white foodOrigin">Chinese</a></div>
                    <div class="p-2 flex-fill "><a href="" class="text-white foodOrigin">Korean</a></div>
                    <div class="p-2 flex-fill "><a href="" class="text-white foodOrigin">Italian</a></div>
                    <div class="p-2 flex-fill "><a href="" class="text-white foodOrigin">Spanish</a></div>
                </nav>
        `;
    }

}
customElements.define("top-navigasi", TopNavigasi);