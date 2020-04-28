class BottomNavigasi extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
                <ul class="d-lg-none list-group list-group-flush text-center">
            <li class="list-group-item pl-sm-2 pl-md-4"><i class="fas fa-home"> Home</i></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark foodOrigin">Japanese</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark foodOrigin">Chinese</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark foodOrigin">Korean</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark foodOrigin">Italian</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark foodOrigin">Spanih</a></li>
        </ul>
        `;
    }

}
customElements.define("bottom-navigasi", BottomNavigasi);