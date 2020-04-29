class BottomNavigasi extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
                <ul class="d-lg-none list-group list-group-flush text-center">
            <li class="list-group-item pl-sm-2 pl-md-4"><i class="fas fa-home"> Home</i></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark makananAsal">Japanese</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark makananAsal">Chinese</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark makananAsal">Korean</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark makananAsal">Italian</a></li>
            <li class="list-group-item pl-sm-2 pl-md-4"><a href="" class="text-dark makananAsal">Spanih</a></li>
        </ul>
        `;
    }

}
customElements.define("bottom-navigasi", BottomNavigasi);