

$(document).ready(function () {

    // creating click event on anchor tag.
    $('.container .grid-col li a').click(function (e) {

        let href = e.target.parentElement.getAttribute('href');

        $('.tabcontent').each(function (index, element) {
            if (`#${element.id}` != href) {
                $(element).removeClass('active');
            }
        })

        $('.container .blog-content span').click(function () {
            $(href).removeClass('active');
        })

        $(href).toggleClass('active');
        $('.tabcontent').css({
            height: "50rem"
        });

    })


})

/* function myFunction(c) 
{
    document.getElementById("y").style.color = c;
}

function myFunction(c) 
{
    document.getElementById("t").style.color = c;
}

 */



function colorbg()
{
    let x=document.getElementById("selectidbg");
    let bgcolor=x.options[x.selectedIndex].value;
    document.getElementById("bgc1").style.background = bgcolor;
    document.getElementById("bgc2").style.background = bgcolor;
    document.getElementById("bgc3").style.background = bgcolor;
    document.getElementById("bgc4").style.background = bgcolor;
    document.getElementById("bgc5").style.background = bgcolor;
    document.getElementById("bgc6").style.background = bgcolor;
    document.getElementById("bgc7").style.background = bgcolor;
    document.getElementById("bgc8").style.background = bgcolor;
    document.getElementById("bgc9").style.background = bgcolor;
    document.getElementById("bgc10").style.background = bgcolor;
    document.getElementById("bgc11").style.background = bgcolor;
    document.getElementById("bgc12").style.background = bgcolor;
}


function colorfont()
{
    let x=document.getElementById("selectidfont");
    let fontcolor=x.options[x.selectedIndex].value;
    document.getElementById("text1").style.color = fontcolor;
    document.getElementById("p1").style.color = fontcolor;
    document.getElementById("pp1").style.color = fontcolor;

    document.getElementById("text2").style.color = fontcolor;
    document.getElementById("p2").style.color = fontcolor;
    document.getElementById("pp2").style.color = fontcolor;
    
    document.getElementById("text3").style.color = fontcolor;
    document.getElementById("p3").style.color = fontcolor;
    document.getElementById("pp3").style.color = fontcolor;

    document.getElementById("text4").style.color = fontcolor;
    document.getElementById("p4").style.color = fontcolor;
    document.getElementById("pp4").style.color = fontcolor;

    document.getElementById("text5").style.color = fontcolor;
    document.getElementById("p5").style.color = fontcolor;
    document.getElementById("pp5").style.color = fontcolor;

    document.getElementById("text6").style.color = fontcolor;
    document.getElementById("p6").style.color = fontcolor;
    document.getElementById("pp6").style.color = fontcolor;

    document.getElementById("text7").style.color = fontcolor;
    document.getElementById("p7").style.color = fontcolor;
    document.getElementById("pp7").style.color = fontcolor;

    document.getElementById("text8").style.color = fontcolor;
    document.getElementById("p8").style.color = fontcolor;
    document.getElementById("pp8").style.color = fontcolor;

    document.getElementById("text9").style.color = fontcolor;
    document.getElementById("p9").style.color = fontcolor;
    document.getElementById("pp9").style.color = fontcolor;

    document.getElementById("text10").style.color = fontcolor;
    document.getElementById("p10").style.color = fontcolor;
    document.getElementById("pp10").style.color = fontcolor;

    document.getElementById("text11").style.color = fontcolor;
    document.getElementById("p11").style.color = fontcolor;
    document.getElementById("pp11").style.color = fontcolor;

    document.getElementById("text12").style.color = fontcolor;
    document.getElementById("p12").style.color = fontcolor;
    document.getElementById("pp12").style.color = fontcolor;
}


function defaultbg()
{
    document.getElementById("bgc1").style.background = "#ffa500";
    document.getElementById("bgc2").style.background = "#ffa500";
    document.getElementById("bgc3").style.background = "#ffa500";
    document.getElementById("bgc4").style.background = "#ffa500";
    document.getElementById("bgc5").style.background = "#ffa500";
    document.getElementById("bgc6").style.background = "#ffa500";
    document.getElementById("bgc7").style.background = "#ffa500";
    document.getElementById("bgc8").style.background = "#ffa500";
    document.getElementById("bgc9").style.background = "#ffa500";
    document.getElementById("bgc10").style.background = "#ffa500";
    document.getElementById("bgc11").style.background = "#ffa500";
    document.getElementById("bgc12").style.background = "#ffa500";
}


function defaultfont()
{
    document.getElementById("text1").style.color = "Black";
    document.getElementById("p1").style.color = "Black";
    document.getElementById("pp1").style.color = "Black";

    document.getElementById("text2").style.color = "Black";
    document.getElementById("p2").style.color = "Black";
    document.getElementById("pp2").style.color = "Black";
    
    document.getElementById("text3").style.color = "Black";
    document.getElementById("p3").style.color = "Black";
    document.getElementById("pp3").style.color = "Black";

    document.getElementById("text4").style.color = "Black";
    document.getElementById("p4").style.color = "Black";
    document.getElementById("pp4").style.color = "Black";

    document.getElementById("text5").style.color = "Black";
    document.getElementById("p5").style.color = "Black";
    document.getElementById("pp5").style.color = "Black";

    document.getElementById("text6").style.color = "Black";
    document.getElementById("p6").style.color = "Black";
    document.getElementById("pp6").style.color = "Black";

    document.getElementById("text7").style.color = "Black";
    document.getElementById("p7").style.color = "Black";
    document.getElementById("pp7").style.color = "Black";

    document.getElementById("text8").style.color = "Black";
    document.getElementById("p8").style.color = "Black";
    document.getElementById("pp8").style.color = "Black";

    document.getElementById("text9").style.color = "Black";
    document.getElementById("p9").style.color = "Black";
    document.getElementById("pp9").style.color = "Black";

    document.getElementById("text10").style.color = "Black";
    document.getElementById("p10").style.color = "Black";
    document.getElementById("pp10").style.color = "Black";

    document.getElementById("text11").style.color = "Black";
    document.getElementById("p11").style.color = "Black";
    document.getElementById("pp11").style.color = "Black";

    document.getElementById("text12").style.color = "Black";
    document.getElementById("p12").style.color = "Black";
    document.getElementById("pp12").style.color = "Black";
}
