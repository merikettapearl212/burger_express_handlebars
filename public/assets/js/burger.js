// $(document).ready(function() {
//     $(".devour").on("click", function(event) {
//       var id = $(this).data("burgerid");
  
//       var updatedBurger = {
//         devoured: true
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burgers" + id, {
//         type: "PUT",
//         data: updatedBurger
//       }).then(function() {
//         console.log("changed burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       });
//     });
//   });