class SlideShow extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
       <div div class = "row d-none d-sm-block" >
            <div class="col-lg-8 offset-lg-2 col-md-12 ">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="10000">
                            <img src="img/ramadan.jpeg" class="d-block w-100 slide-show" >
                        </div>
                        <div class="carousel-item" data-interval="2000">
                            <img src="img/ramadan3.jpg" class="d-block w-100 slide-show" >
                        </div>
                        <div class="carousel-item">
                            <img src="img/corona1.jpeg" data-interval="2000" class="d-block w-100 slide-show" >
                        </div>
                        <div class="carousel-item">
                            <img src="img/corona2.jpeg" data-interval="2000" class="d-block w-100 slide-show" >
                        </div>
                        <div class="carousel-item">
                            <img src="img/corona3.jpeg" data-interval="2000" class="d-block w-100 slide-show" >
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("slide-show", SlideShow);