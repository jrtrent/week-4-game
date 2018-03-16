$(document).ready(function(){
    var displaynum = Math.floor(Math.random() * 120 + 19 );
    $("#random").text(displaynum);
    var greencrystal =(Math.floor(Math.random() * 12 + 1));  
    var bluecrystal = (Math.floor(Math.random() * 12 + 1));
    var purplecrystal = (Math.floor(Math.random() * 12 + 1));
    var redcrystal = (Math.floor(Math.random() * 12 + 1));
    
    var wins= 0;
    var losses= 0;
    var userscore = 0;

        function reset(){
            var displaynum = Math.floor(Math.random() * 120 + 19 );
            $("#random").text(displaynum);
            var greencrystal =(Math.floor(Math.random() * 12 + 1));  
            var bluecrystal = (Math.floor(Math.random() * 12 + 1));
            var purplecrystal = (Math.floor(Math.random() * 12 + 1));
            var redcrystal = (Math.floor(Math.random() * 12 + 1));
            
            var wins= 0;
            var losses= 0;
            var userscore = 0;
            $('#score').text(userscore);
        }

        function win() {
            if (wins <= 10){
            wins++;
            $('#Wins').text(wins);
            } else {
                reset()
            }
        }
        
        function loose() {
            if (losses <=10) {
            losses++;
            $('#Losses').text(losses);
            } else {
                reset()
            } 
        }

        $("#crystals").on('click',"#green", function () {
                userscore = userscore + greencrystal;
                console.log(greencrystal);
            $('#score').text(userscore);
                if (userscore===random) {
                    win();
                } else if (userscore > displaynum) {
                    loose();
                }
            
            });
    
        
        $("#crystals").on('click',"#blue", function () {
            userscore = userscore + bluecrystal;
            console.log(bluecrystal);
            $('#score').text(userscore); 
                if (userscore===random) {
                    win();
                } else if (userscore > displaynum) {
                    loose();
                }
            
            });

        $("#crystals").on("click", '#purple', function (){
            userscore = userscore + purplecrystal;
            console.log(purplecrystal);
            $('#score').text(userscore);
                if (userscore===random) {
                    win();
                } else if (userscore > displaynum) {
                    loose();
                }
        
            });

        $("#crystals").on("click", "#red" , function () {
            userscore = userscore + redcrystal;
            console.log(redcrystal);
            $('#score').text(userscore);
            if (userscore===random) {
                win();
            } else if (userscore > displaynum) {
                loose();
            }
    
})

    
    
    


    







