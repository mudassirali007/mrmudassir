var mainEventClass = function () {
  var main = this;
  main.init = function () {
    main.initEvents();
  }
  main.initEvents = function(){
    main.bindNavBarClick();
    main.bindFormSubmit();
  }
  main.bindNavBarClick = function(){
    $(".page").click(function(){
      $(".page").removeClass('active');
      $(this).addClass('active');
      if($(this).data('id')=='home')
      {
        $(".home").css('display','block')
      }
      else if($(this).data('id')=='about-me')
      {
        $(".about-me").css('display','block')
      }
      else if($(this).data('id')=='projects')
      {
        $(".projects").css('display','block')
      }
      else
      {
        $(".contact").css('display','block')
      }
    })
  }; 
  main.bindFormSubmit = function(){
    $("#send").click(function(){
      $.ajax({
          type: "POST",
          url: "send.php",
          data: { "name": $("#name").val(), "email": $("#email").val(), "message": $("#message").val() },
          success: function (response) {
              alert("Message Posted");
              window.location.href = "./";
           }
        })
      })
  };
}
$(function() {
  var main = new mainEventClass();
  main.init();
});