$(document).ready(function(){

  $('button').click(function(){
    $(this).parent().html('<h1>Select Players</h1><select name="playerOne"><option selected>Choose a ninja</option><option>donny</option><option>mikey</option><option>raphael</option><option>leo</option></select><select name="playerTwo"><option selected disabled>Choose a ninja</option><option>donny</option><option>mikey</option><option>raphael</option><option>leo</option></select>');
    $('.container').append('<div class="ninjas"></div>');
  })

  $('.location').hover(function(){
    var image = $(this).text();
    console.log(image);
    $('.container').css('background-image', `url('images/${image}.jpg')`);
    $('.container').css('background-repeat', 'no-repeat');
    $('.container').css('background-size', 'cover');
  });

  $(document).on('change', 'select', function(){
    var select = $(`select[name="${$(this).attr('name')}"] option:selected`).val();

    // this will loop through the options of the other select tag and change the attribute of the option tag to disabled so that the same ninja can not be selected twice
    $(this).siblings('select').children().each(function(){
      if($(this).val() == select){
        $(this).attr('disabled', 'disabled');
      }
    })

    $('.ninjas').append('<div class="ninja"></div>');
    $('.ninja:last').css(`background-image`, `url('images/${select}.png')`);
    if($('.ninjas > div').length > 1){
      $(this).parent().hide();
      $('.ninjas').css('margin-top', '200px');
    }
  })
})