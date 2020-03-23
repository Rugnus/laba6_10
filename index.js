$(document).ready(function(){
    let heart = 20;
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
        $('.try25').addClass('game__time');



        $('.try8').addClass('game__board');
        $('.hide-image').removeClass('hide-image').addClass('game__board');

        // $('.game__circle1').addClass('circle__animation');

        // ADDING A RANDOM POSITION 
        function moveElement(el){ setInterval(function(){
    // setTimeout(move, 10000, time = time/2)
            var height1 = $('.game__field').offset().top
            var width1 = $('.game__field').offset().left;
            var width2 = $('.game__field').width() ;
            var height2 = $('.game__field').height() - $(el).height();
            var randomVertical = Math.floor(Math.random() * (height2 - height1)) + 200;
            var randomHorizontal = Math.floor(Math.random() * (width2 - width1) + 50);
            $(el).css({
                'top' : randomVertical+'px',
                'left' : randomHorizontal+'px'
            })
        }, 2000)}

elements = [$('.game__circle1'),$('.game__circle2'),$('.game__circle3'),$('.game__circle4'),$('.game__circle5'), $('.game__circle6'), $('.game__circle7'), $('.game__circle8'), $('.game__circle9')];
    console.log(elements.length)
    for (let i = 0; i < elements.length; i++) {
        moveElement(elements[i]);
      }

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

        // Ловля Элементов и получение очков

        $(".game__circle1").click(function(){
            $(".game__circle1").addClass('hide__circle');
            points =points + 30;
            $('.game__user_points').empty().append(points);

        });
        $(".game__circle2").click(function(){
            $(".game__circle2").addClass('hide__circle');
            points = points + 30;
            $('.game__user_points').empty().append(points);
        });

        $(".game__circle3").click(function(){
            $(".game__circle3").addClass('hide__circle');
            points = points + 30;
            $('.game__user_points').empty().append(points);
        });
        $(".game__circle4").click(function(){
            $(".game__circle4").addClass('hide__circle');
            points = points + 20;
            $('.game__user_points').empty().append(points);
        });
        $(".game__circle5").click(function(){
            $(".game__circle5").addClass('hide__circle');
            points = points + 20;
            $('.game__user_points').empty().append(points);
        });
        $(".game__circle6").click(function(){
            $(".game__circle6").addClass('hide__circle');
            points = points + 20;
            $('.game__user_points').empty().append(points);
        });

        $(".game__circle7").click(function(){
            $(".game__circle7").addClass('hide__circle');
            points = points + 10;
            $('.game__user_points').empty().append(points);
        });

        $(".game__circle8").click(function(){
            $(".game__circle8").addClass('hide__circle');
            points = points + 10;
            $('.game__user_points').empty().append(points);
        });

        $(".game__circle9").click(function(){
            $(".game__circle9").addClass('hide__circle');
            points = points + 10;
            $('.game__user_points').empty().append(points);
        });
        
        // Если игрок набрал максимальное кол-во баллов, то вручение ему звания победителя
        if(points >= 180) {
            $('.game__field').removeClass('game__field');
            $('.try4').addClass('winner');
            $('.winner').text('You win!!!').css("font-size", "4rem").css("text-align", "center");
        };
        
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
                $('.game__field').removeClass('.game__field').addClass("gameover").text('Game Over!')
                $(".gameover").text('Game Over!').append("<p>Your Points: " + points + "<p>").css("text-align", "center").css("font-size", "4rem");

                clearInterval(time)
            }
        }, 1000)



        return false;
    });


    
    

    

    
    
});

// $(document).ready(function(){
//     animateDiv();
    
// });

// function makeNewPosition(){
    
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
    
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
    
//     return [nh,nw];    
    
// }

// function animateDiv(){
//     var newq = makeNewPosition();
//     $('.a').animate({ top: newq[0], left: newq[1] }, function(){
//       animateDiv();        
//     });
    
// };

