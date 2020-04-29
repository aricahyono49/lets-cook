class ResepMakanan {
  
    constructor( link, apiKey ) {
        this.urlDasar = link;
        this.apiKey = apiKey;
    }

    templateRecipe = ` 
               <div class="d-none d-lg-block col-lg-4 pl-0 pr-0 pr-lg-3 ">
            <div class="card" style="" id="nutrition">
            </div>
        </div>
        <div class="col-lg-8">
            <div class="row">

                <!-- This Is Ingredients -->
                <div class="col-lg-12 pt-lg-4 mt-lg-0 pt-0  mt-3 text-center bg-white rounded">
                    <img src="https://spoonacular.com/recipeImages/716429-556x370.jpg"
                        class="img-fluid rounded d-lg-none " alt="...">
                    <h5 class=" d-lg-none ">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h5>
                    <h3>Ingredients</h3>
                    <div class=" row  " id="listIngredients">

                    </div>
                </div>
                <!-- This Is Step -->
                <div class="col-lg-12  pt-lg-4 mt-lg-0 pt-0  mt-lg-2 text-center bg-white rounded">
                    <h3 class="text-center">Step</h3>
                    <div class="col-12 text-left">
                        <ul class="list-group list-group-flush text-justify" id="listRecipeStep">

                        </ul>
                    </div>
                </div>
            </div>
        </div>`;

         get gambar() {
             return this._gambar;
         }

         set gambar(value) {
             this._gambar = value;
         }

    nutrisi(gambarMakanan, namaMakanan) {
        const linkNutrisi   = this.urlDasar + "/nutritionWidget.json?" + this.apiKey;
     console.log(gambarMakanan);
     console.log('halo');
     
     console.log(this.gambar);
     console.log(namaMakanan);
     console.log(linkNutrisi);
     
     
        $.get(linkNutrisi, function (dataNutrisi) {
            $('#nutrition').append(`
        <img src="${gambarMakanan}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${namaMakanan}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Calories: ${dataNutrisi.calories}</li>
                <li class="list-group-item">Carbs: ${dataNutrisi.carbs}</li>
                <li class="list-group-item">Fat: ${dataNutrisi.fat}</li>
                <li class="list-group-item">Protein: ${dataNutrisi.protein}</li>
            </ul>
        </div>
        </div>
        `);
        });
    }

    bahan(){
        const linkBahan = this.urlDasar + "/ingredientWidget.json?" + this.apiKey;
        const nomor = 0;
        $('#food').html(this.templateRecipe);
        $.get(linkBahan,
            function (dataBahan) {
                $.each(dataBahan.ingredients, function (i) {
                    $('#listIngredients').append(`
        <div class="col-5 offset-1 text-left">
            <p>${ i+1}) ${dataBahan.ingredients[i].name} ${dataBahan.ingredients[i].amount.metric.value}
                ${dataBahan.ingredients[i].amount.metric.unit}</p>
        </div>
        `);
                });
            }
        );
    }

    tahapPembuatan() {
         $('#search').html('');
         $('#searchFood').val('');
        const linkPembuatan = this.urlDasar + "/analyzedInstructions?" + this.apiKey;
        $.get(linkPembuatan,
            function (dataPembuatan) {
                $.each(dataPembuatan[0].steps, function (i) {
                    $('#listRecipeStep').append(`
        <li class="list-group-item ">
            <div class="row">
                <div class="col-lg-1 col-1 pr-lg-0 pr-2">${dataPembuatan[0].steps[i].number}.</div>
                <div class="col-lg-11 col-11 pl-lg-0 pr-2">
                    ${dataPembuatan[0].steps[i].step}
                </div>
            </div>
        </li>
        `);
                });
            }
        );
    }
}

