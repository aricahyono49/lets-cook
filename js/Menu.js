import $ from "jquery";
class Menu {
   constructor(apiKey) {
       this.apiKey = apiKey;
   }

halamanUtama() {
    const minProtein        = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    const maxProtein        = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const apiKey            =  this.apiKey;
    const linkHalamanUtama  = "https://api.spoonacular.com/recipes/findByNutrients?minCarbs=" + minProtein +
                                "&maxCarbs=" + maxProtein + "&number=8&" + apiKey;

    $('#food').append("<foods-menu></foods-menu>");

    $.get(linkHalamanUtama, function (data) {
            $.each(data, function (i) {
                $('#foodsMenu').append(`
                    <div class="col-lg-3 col-md-4 col-12 p-lg-2 pt-lg-0 p-md-2 pt-md-0 
                    py-sm-2 pt-sm-0 text-center">
                        <a class="food-recipe foodOrigin" href="${data[i].id}" id="${data[i].image}"
                            name="${data[i].title}">
                            <div class="card " style="">
                                <img src="${data[i].image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-title">${data[i].title}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                 `);
            });
            Menu.linkMakanan(apiKey);
        });
}

   pencarianMakanan() {
       const apiKey = this.apiKey;
      $('#searchFood').keyup(function () {
          
     const inputSearch  = $(this).val();
     const listSearch   = `
                <ul class="list-group list-group-flush " style="position: absolute; z-index: 1; " id="searchItem">
                    <!-- item List -->
                </ul>
                 `;

    $('#search').html(' ');
    $('#search').append(listSearch);

    const linkPencarian = "https://api.spoonacular.com/food/products/suggest?query=" + inputSearch +
            "&number=7&" + apiKey;
          $.get(linkPencarian, function (dataSearch) {
                  $.each(dataSearch.results, function (i) {
                      $('#searchItem').append(`
                        <a href = "${dataSearch.results[i].id}" name="${dataSearch.results[i].title}" 
                        id = "${`https://spoonacular.com/recipeImages/${dataSearch.results[i].id}-312x231.jpg`}"
                        class = "food-recipe" > 
                        <li class = "list-group-item py-2 px-4" >
                        ${dataSearch.results[i].title}
                        </li ></a > 
                `);
            });
                Menu.linkMakanan(apiKey);
        });
      });
  }

   halamanMakananAsal() {
    const apiKey = this.apiKey;
    
    $('.makananAsal').click(function (e) {
         e.preventDefault();
         $('#food').html(" ");
         $('#food').append("<foods-menu></foods-menu>");

        const origin          = $(this).text();
        const linkMakananAsal = "https://api.spoonacular.com/recipes/complexSearch?cuisine="
                                     + origin + "&number=8&" + apiKey;
      
          $.get(linkMakananAsal, function (data) {
                  $.each(data.results, function (i) {
                      $('#foodsMenu').append(`
                        <div class="col-lg-3 col-md-4 col-12 p-lg-2 p-md-2 text-center">
                            <a class="food-recipe " href="${data.results[i].id}" id="${data.results[i].image}" 
                                name="${data.results[i].title}">
                                <div class="card " style="">
                                    <img src="${data.results[i].image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <p class="card-title">${data.results[i].title}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                     `);
            });
            Menu.linkMakanan(apiKey);
        });
     });
  }

  static linkMakanan(apiKey) { 
        $('.food-recipe').click(function (e) {
            e.preventDefault();
            const idMakanan = $(this).attr('href');
            const gambarMakanan = $(this).attr('id');
            const namaMakanan = $(this).attr('name');
            const link = "https://api.spoonacular.com/recipes/" + idMakanan;

            const makanan = new Makanan(link, apiKey);
            makanan.nutrisi(gambarMakanan, namaMakanan);
            makanan.bahan();
            makanan.tahapPembuatan();

        });
   }

}

