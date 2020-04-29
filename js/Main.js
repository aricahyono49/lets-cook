
 $(document).ready(function () {
      const apiKey = "apiKey=81ebd2b4abd8437c93a9f590a4ff1942";
        let Menu1 = new Menu(apiKey);

        Menu1.pencarianMakanan();
        Menu1.foodOrigin();
    _loadAwal(apiKey);

 });

function _loadAwal(apiKey) {
 const minProtein = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
 const maxProtein = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

 $.get("https://api.spoonacular.com/recipes/findByNutrients?minCarbs=" + minProtein +
     "&maxCarbs=" + maxProtein + "&number=8&" + apiKey,
     function (data) {
         $('#food').append("<foods-menu></foods-menu>");
         $.each(data, function (i) {
             $('#foodsMenu').append(`
    <div class="col-lg-3 col-md-4 col-12 p-lg-2 pt-lg-0 p-md-2 pt-md-0 py-sm-2 pt-sm-0 text-center">
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

         resep(apiKey)

     });
}

       function resep(apiKey) {
           $('.food-recipe').click(function (e) {
               e.preventDefault();
               $('food').html("");
              
               const idMakanan      = $(this).attr('href');
               const gambarMakanan  = $(this).attr('id');
               const namaMakanan    = $(this).attr('name');
               const link           = "https://api.spoonacular.com/recipes/"+idMakanan;

               const Makanan = new ResepMakanan( link, apiKey);
               Makanan.nutrisi(gambarMakanan,namaMakanan);
               Makanan.bahan();
               Makanan.tahapPembuatan();
             
           }
           );
            
       }