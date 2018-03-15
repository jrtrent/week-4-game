$(document).ready(function(){
    var wins= 0;
    var loses= 0;
    var userscore = ' ';
    var greencrystal =(Math.floor(Math.random() * 12 + 1));  
    var bluecrystal = (Math.floor(Math.random() * 12 + 1));
    var purplecrystal = (Math.floor(Math.random() * 12 + 1));
    var redcrystal = (Math.floor(Math.random() * 12 + 1));
    var firstValue = ' ';
    var secondvalue = ' ';
    var thirdvalue = ' ';
    var fourthvalue = ' ';
    var displaynum = Math.floor(Math.random() * 120 + 19 );


    
    $("#random").text(displaynum);
    $("#crystals").on('click',"#green", function () {
            var value = $(this).val();
        
    $("#crystals").on('click',"#blue", function () {
        parseInt(bluecrystal)
            var value = $(this).val();
        });
    $("#crystals").on("click", '#purple', function (){
       
            });
    $("#crystals").on("click", "#red" , function () {
       
            console.log(redcrystal);
        });
    $(".crvalue").click(function () {
    
        $(".crvalue").each(function () {
                userscore += Number($(".crvalue").val()); 
                console.log(userscore);     
        })
        
    });
    
    
     if (i>= 10) {
        document.getElementById("#game").reset()};

    
})






