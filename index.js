$(document).ready(function(){
    let heart = 15;
    let points = 0;

    // BASIC SHI...
    $("a").click(function () {

        // При клике на кнопку, показываем игру

        $('.game__timing').empty();
        $('.game__user_points').empty();
        // $('.game__field').empty();
        $('.try').addClass('game');
        $('.try1').addClass('game__user');
        $('.try2').addClass('game__fields');
        $('.try3').addClass('game__timing');
        $('.try4').addClass('game__field');
        $('.try5').addClass('game__user_points');
        $('.try7').addClass('game__circle1');
        $('.try9').addClass('game__circle2');
        $('.try10').addClass('game__circle3');
        $('.try11').addClass('game__circle4');
        $('.try12').addClass('game__circle5');
        $('.try13').addClass('game__circle6');
        $('.try14').addClass('game__circle7');
        $('.try15').addClass('game__circle8');
        $('.try16').addClass('game__circle9');
        $('.try17').addClass('game__circle10');
        $('.try18').addClass('game__circle11');
        $('.try19').addClass('game__circle12');
        $('.try20').addClass('game__circle13');
        $('.try21').addClass('game__circle14');
        $('.try22').addClass('game__circle15');
        $('.try25').addClass('game__time');



        $('.try8').addClass('game__board');
        $('.hide-image').removeClass('hide-image').addClass('game__board');

        // $('.game__circle1').addClass('circle__animation');

        // ADD INFO IN INFO FIELDS :)

        $('.game__timing').append("<p>Hearts: </p>" + heart);
        $('.game__user_points').append("<p>Points: </p>");
        

        //ADDING USERNAME FROM INPUT FIELD 
        //Переходим вниз
        var userName = $('.form__field').val();
        if (userName == "") {
        $('.game__user').text("Player: NoName");
        }
        else{
            $('.game__user').text("Player: " + userName);
        } 
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 800);

        // Ловля Элементов

        $(".game__circle1").click(function(){
            $(".game__circle1").addClass('hide__circle');
            points =points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);

        });
        $(".game__circle2").click(function(){
            $(".game__circle2").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle3").click(function(){
            $(".game__circle3").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });
        $(".game__circle4").click(function(){
            $(".game__circle4").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });
        $(".game__circle5").click(function(){
            $(".game__circle5").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });
        $(".game__circle6").click(function(){
            $(".game__circle6").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle7").click(function(){
            $(".game__circle7").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle8").click(function(){
            $(".game__circle8").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle9").click(function(){
            $(".game__circle9").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle10").click(function(){
            $(".game__circle10").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle11").click(function(){
            $(".game__circle11").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle12").click(function(){
            $(".game__circle12").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle13").click(function(){
            $(".game__circle13").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle14").click(function(){
            $(".game__circle14").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });

        $(".game__circle15").click(function(){
            $(".game__circle15").addClass('hide__circle');
            points = points + 1;
            $('.game__user_points').empty().append("<p>Points: </p>" + points);
        });
        
        
        // Убавка серцец, если не попал в квадрат(Возможна переделка под время)

        $(".game__field").click(function(){
            heart = heart - 1;
            $(".game__timing").empty().append("<p>Hearts: </p>" + heart);
            if (heart <= 0){
                $(".game__field").removeClass('game__field');
                $(".try4").addClass('gameover');

                $(".gameover").text('Game Over!').append("<p>Your Points: " + points + "<p>").css("text-align", "center").css("font-size", "4rem");
            }
        })

        let time = setInterval(() => {
            let overTime = Number($('.game__time').text())
            $('.game__time').text(overTime -1);
            console.log(overTime)
            if(Number($('.game__time').text() == 0)) {
                $('.game__field').add('.game__field').addClass("gameover").text('Game Over!')
                $(".gameover").text('Game Over!').append("<p>Your Points: " + points + "<p>").css("text-align", "center").css("font-size", "4rem");

                clearInterval(time)
            }
        }, 1000)


        return false;
    });


    
    

    

    
    
});