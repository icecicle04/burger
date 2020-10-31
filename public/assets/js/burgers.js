$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured,
    };

    //send put request
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // reloads the page with the new devoured burger
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: $("[name:devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created a new burger");
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    //send delete req
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
