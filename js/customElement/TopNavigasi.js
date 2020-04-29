class TopNavigasi extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
                <nav class=" d-none d-lg-flex bg-info text-center text-white">
                    <a href="index.html" class="text-white p-2 flex-fill"><i class="fas fa-home"> Home</i></a>
                    <a href="" class="text-white makananAsal p-2 flex-fill">Japanese</a>
                    <a href="" class="text-white makananAsal p-2 flex-fill">Chinese</a>
                    <a href="" class="text-white makananAsal p-2 flex-fill">Korean</a>
                    <a href="" class="text-white makananAsal p-2 flex-fill">Italian</a>
                    <a href="" class="text-white makananAsal p-2 flex-fill">Spanish</a>
                </nav>
        `;
    }

}
customElements.define("top-navigasi", TopNavigasi);