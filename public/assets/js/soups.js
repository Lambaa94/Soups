$(document).ready(function () {

    // POST/ADD
    $("#addSoupForm").on("submit", function (event) {
      event.preventDefault();

      const newSoup = {
        soup_name: $("#soupText").val().trim()
      }

      //SEND POST
      $.ajax("/api/soups", {
        method: "POST",
        data: newSoup
      }).then(function () {
        console.log("Soup added successfully!");

        window.location = "/";
      });
    });

    // PUT/SLURP
    $(".slurpSoupBtn").on("click", function (event) {
      event.preventDefault();

      const soupId = $(this).data("id");
     

      $.ajax("/api/soups/" + soupId, {
        method: "PUT",
        data: {
          slurped: 1
        }
      }).then(function () {
        console.log("The Soup has been slurped!");

        window.location = "/";
      });
    });

    //DELETE
    $(".deleteSoupBtn").on("click", function (event) {
      event.preventDefault();

      const id = $(this).data("id");
      

      var deleteSoup = {
        id: id
      };

      $.ajax("/api/soups/" + id, {
        method: "DELETE",
        data: deleteSoup
      }).then(
        function () {
          console.log("deleted", deleteSoup)

          window.location = "/";

        });
    });

  });