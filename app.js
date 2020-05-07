//submitting form on enter key
$(window).keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault();

    //creating object by calling G$
    var greet = G$($("#name").val());

    //hide the form
    $(".form").hide();

    //show greetings by using greet object and its methods we made and logs it too
    greet.set_Time($("#dropdown").val()).jquerySelected("#text").log();
    $("#text1").text("Hope you are having a good day.");

    $("#text").show();
    $("#text1").show();
  }
});
