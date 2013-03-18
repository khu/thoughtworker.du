var navigation = function() {
  $('.nav').on('click', function() {
    var $this = $(this);

    $('.nav').removeClass('selected');
    $this.addClass('selected');

    return false;
  });
};

$(function(){
  navigation();
});
