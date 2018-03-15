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
   
    function winlose() {
        if (userscore === displaynum) {
            wins++;
        } else if (userscore > displaynum) {
            losses++;
        }
        $('#Wins').text(wins);
        $('#Losses').text(losses);
    }
    

    $("#crystals").on('click',"#green", function () {
            userscore =userscore + greencrystal;
            console.log(greencrystal);
        $('#score').text(userscore);
            if (userscore === displaynum) {
                wins++;
            } else if (userscore > displaynum) {
                losses++
            }
        })
    
        
    $("#crystals").on('click',"#blue", function () {
        userscore =userscore + bluecrystal;
        console.log(bluecrystal);
        $('#score').text(userscore);
            if (userscore === displaynum) {
                wins++;
            } else if (userscore > displaynum) {
                losses++
            }
        })
    $("#crystals").on("click", '#purple', function (){
        userscore =userscore + purplecrystal;
        console.log(purplecrystal);
        $('#score').text(userscore);
        console.log(purplecrystal);
            if (userscore === displaynum) {
                wins++;
            } else if (userscore > displaynum) {
                losses++
            }
        })
    $("#crystals").on("click", "#red" , function () {
        userscore =userscore + redcrystal;
        console.log(redcrystal);
        $('#score').text(userscore);
        })

    
    });
    
    
     //if (i>= 10) {
       // document.getElementById("#game").reset()};

    







