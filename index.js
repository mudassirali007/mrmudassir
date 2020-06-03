$("#send").click(function(){
$.ajax({
    type: "POST",
    url: "send.php",
    data: { "name": $("#name").val(), "email": $("#email").val(), "message": $("#message").val() },
    success: function (response) {
        console.log(response);
        alert("Message Posted");
        // window.location.href = "./";
     },
  });
});