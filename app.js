const userRecipes = [];

function addRecipeListeners() {
  $("#instructBtn").on("click", function () {
    console.log("instructBtn clicked");
    $(".instruct").append(
      `<input type="text" id="instruct ${currentIngredCount}" placeholder="instruct ${currentIngredCount}" />`
    );
  });

  $("#ingredBtn").on("click", function () {
    let currentIngredCount = $(".ingred input").length;
    currentIngredCount++;
    $(".ingred").append(
      `<input type="text" id="ingred ${currentIngredCount}" placeholder="ingred ${currentIngredCount}" />`
    );
  });

  $(".submitBtn").on("click", function () {
    let recipeName = {
      recipeName: $("#recipeName").val(),
      recipeImageURL: $("#imageURL").val(),
      ingredients: [],
      instructions: [],
    };

    $(".ingreds input").each(function () {
      recipeName.ingredients.push($(this).val());
    });

    $(".instructs input").each(function () {
      recipeName.ingredients.push($(this).val());
    });

    userRecipes.push(recipe);
    alert("Recipe submitted!");

    console.log(recipe);
  });

  function removeRecipeListeners() {
    $("#instructBtn").off("click");
    $("#ingredBtn").off("click");
    $(".submitBtn").off("click");
  }
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/pageID/pageID.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      if (pageId == "recipeForm") {
        addRecipeListeners();
      } else if (pageID == "showAllRecipes") {
        removeRecipeListeners();
      } else {
        removeRecipeListeners();
      }
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
});
