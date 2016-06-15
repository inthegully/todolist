$(document).ready(function() {
    function updateCount () {
          var count = $('.to-do-text').not('.strike').length;
          $('#countDown').text('');
          $('#countDown').prepend(count + " items left");

    }
    $('input').keypress(function(e) {
        if (e.which == 13) {
            var text = $('input').val();
            var item = "<div class='item'><div class='check'></div><span class='to-do-text'>" + text + "</span><span class='delete'>+</span></div>";

            $('.items').append(item);
            $('input').val('');
            updateCount();
        }
    });
    $(document).on('click', '.check', function() {
        $(this).toggleClass('check-click');
        $(this).siblings('.to-do-text').toggleClass('strike');
        updateCount();
        $('.strike').removeClass('highlight');
    });
    $(document).on('click', '.delete', function (){
        $(this).closest('.item').fadeOut(300).remove();
        updateCount();
    });
    $('.filters').on('click', '#active', function (){
        $('.highlight').removeClass('highlight');
        $('.to-do-text').not('.strike').addClass('highlight');
    });
    $('.filters').on('click', '#complete', function (){
        $('.highlight').removeClass('highlight');
        $('.strike').addClass('highlight');
    });
    $('.filters').on('click', '#all', function (){
        $('.highlight').removeClass('highlight');
        $('.to-do-text').addClass('highlight');
    });
    $(document).on('click', '#clear', function(){
        if ($('.to-do-text').hasClass('strike')) {
          $(this).parent()
          .prev()
          .children('.item')
          .children('.strike')
          .parent()
          .remove();
      }
      updateCount();
    });
});
