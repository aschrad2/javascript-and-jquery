$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var answerOne = $('input[name="switch-one"]:checked').val();
    var answerTwo = $('input[name="switch-two"]:checked').val();
    var answerThree = $('input[name="switch-three"]:checked').val();
    var answerFour = $('input[name="switch-four"]:checked').val();
    var answerFive = $('input[name="switch-five"]:checked').val();
    var result = "Palm Desert, California";
    $("#output").text(result);
  });
});
