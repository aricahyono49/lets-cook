class Menu {
   constructor(apiKey) {
       this.apiKey = apiKey;
   }
   pencarianMakanan() {
       const apiKey = this.apiKey;
      $('#searchFood').keyup(function () {
          const listSearch = `
    <ul class="list-group list-group-flush " style="     position: absolute;   z-index: 1;   " id="searchItem">
        <!-- item List -->
    </ul>
    `;
          const inputSearch = $(this).val();
          $('#search').html(' ');
        const linkPencarian = "https://api.spoonacular.com/food/products/suggest?query=" + inputSearch +
            "&number=7&" + apiKey;
          $.get(linkPencarian,
              function (dataSearch) {
                  $('#search').append(listSearch);

                  $.each(dataSearch.results, function (i) {
                      $('#searchItem').append(`
    <a href = "${dataSearch.results[i].id}" name="${dataSearch.results[i].title}" class="food-recipe" > <li class = "list-group-item py-2 px-4" > 
    ${dataSearch.results[i].title}
     </li ></a > `);
                  });


 $('.food-recipe').click(function (e) {
     e.preventDefault();
     $('food').html("");
     const idMakanan = $(this).attr('href');
     const linkGambar = 'https://api.spoonacular.com/food/products/' + idMakanan + "?" + apiKey;
     
     $.get(linkGambar, function (dataGambar) {
          gambar = dataGambar.images[1];
     });


     const gambarMakanan = $(this).attr('id') ? $(this).attr('id') : gambar;
     const namaMakanan = $(this).attr('name');
     const link = "https://api.spoonacular.com/recipes/" + idMakanan;

     const Makanan = new ResepMakanan(link, apiKey);
     Makanan.nutrisi(gambarMakanan, namaMakanan);
     Makanan.bahan();
     Makanan.tahapPembuatan();
 });

              });
      });
  }

   foodOrigin() {
       const apiKey = this.apiKey;
      $('.foodOrigin').click(function (e) {
          e.preventDefault();
          $('#food').html(" ");
          $('#food').append("<foods-menu></foods-menu>");
          const origin = $(this).text();
           const linkMakananAsal = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + origin + "&number=8&" +
              apiKey;
          $.get(linkMakananAsal,
              function (data) {
                  $.each(data.results, function (i) {
                      console.log(data.results[i].image);
                      $('#foodsMenu').append(`
                                <div class="col-lg-3 col-md-4 col-12 p-lg-2 p-md-2 text-center">
                                    <a class="food-recipe " href="${data.results[i].id}" id="${data.results[i].image}" name="${data.results[i].title}">
                                        <div class="card " style="">
                                            <img src="${data.results[i].image}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <p class="card-title">${data.results[i].title}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
        `);
                  });
                 $('.food-recipe').click(function (e) {
                     e.preventDefault();
                     $('food').html("");
                     const idMakanan = $(this).attr('href');
                    const linkGambar = 'https://api.spoonacular.com/food/products/'+idMakanan+"?"+apiKey;
                    const gambar     =  $.get(linkGambar, function (dataGambar) {
                        console.log(dataGambar.images[1]);
        });

                     const gambarMakanan = $(this).attr('id') ? $(this).attr('id') : gambar;
                     const namaMakanan = $(this).attr('name');
                     const link = "https://api.spoonacular.com/recipes/" + idMakanan;

                     const Makanan = new ResepMakanan( link, apiKey);
                     Makanan.nutrisi(gambarMakanan, namaMakanan);
                     Makanan.bahan();
                     Makanan.tahapPembuatan();
                 });
              });
      });
     
  }
}

