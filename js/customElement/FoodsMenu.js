class FoodsMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="col-lg-12">
                 <!-- ini slide Show -->
                 <slide-show > </slide-show>
                    <div class="row mt-4 pl-2 d-block">
                        <div class="col-12">
                            <b>
                                <h4>
                                    Makanan Rumahan!
                                </h4>
                            </b>
                        </div>
                    </div>

                    <section class="row" id="foodsMenu"></section>
                </div>
        `;
    }

}
customElements.define("foods-menu", FoodsMenu);