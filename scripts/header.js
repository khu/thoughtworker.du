var navigation = function() {
  $('.nav').on('click', function() {
    var $this = $(this);

    $('.nav').removeClass('active');
    $this.addClass('active');

    return false;
  });
};

$(function(){
  navigation();
});
