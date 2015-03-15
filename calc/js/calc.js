$(function(){
        $("#draggable").draggable();             //Перемещение
        
        $("#btn_bl2").click(function(){             //Дополнительный блок
                $("#block2").toggle('fold', 0, 500);
        });
        
$('#input').bind("change keyup input click", function() {        //Парсер input
    if (this.value.match(/[^0-9\-\.]/g)) {
        this.value = this.value.replace(/[^0-9\-\.]/g, '');
    }
});    
   numLength = function(number) {     // Длина вводимого числа 
            if (number.length > 11) {
                number = "";
                $("#input").val("Error");
            }
    };
number= '';
operator = '';
newnumber = '';
    $("#input").val("0");
    $("button:not(.oper, #equals, #btn_bl2, .log)").on('click', function () {
        number += $(this).text();
        $("input:not(#memory)").val(number);
        numLength(number);
        console.log("number - ", number);
    });
 
    $("button.oper, .log").on('click', function () {
        operator = $(this).val();
        console.log('operator - ', operator);
        newnumber = number;
        number = "";
        numLength(number);
        console.log("newnumber - ", newnumber);
    });  
    $("#clear").on('click', function () {
        number = "";
        $("#input").val("0");
    });  
memory = '0';
    $('#mp').on('click', function () {
        memory = ((parseFloat(memory)) + (parseFloat(newnumber)));
        $('#memory').val(memory);
        console.log('memory - ', memory);
    });    
    $('#mr').on('click', function () {
        $('#input').val(memory);
        //number = $(this).val();
    }); 
    $('#mc').on('click', function () {
        memory = '0';
        $('#memory').val('');
    }); 
    $('#equals').on('click',function(){
        switch (operator) {
            case '+':     number = parseFloat(newnumber) + parseFloat(number); break;
            case '-':     number = parseFloat(newnumber) - parseFloat(number); break;
            case '/':     number = parseFloat(newnumber) / parseFloat(number); break;
            case '*':     number = parseFloat(newnumber) * parseFloat(number); break;
            case 'sin':   number = Math.sin(newnumber); number = number.toFixed(9);  break;
            case 'cos':   number = Math.cos(newnumber); number = number.toFixed(9);  break;
            case 'ln':    number = Math.log(newnumber); number = number.toFixed(9);  break;
            case 'pow':   number = Math.pow(newnumber, number);  break;
            case 'sqrt':  number = Math.sqrt(newnumber);  break;
            case 'tan':   number = Math.tan(newnumber); number = number.toFixed(9);  break;
            case 'round': number = Math.round(newnumber);   break;
            case 'e':     number = Math.E; number = number.toFixed(9);  break;
            case 'pi':    number = Math.PI; number = number.toFixed(9);  break;
        }
            $("input:not(#memory)").val(number);
    }); 
 $(document).keypress(function(e){
        keycode = (e.keyCode ? e.keyCode : e.which);
        switch (keycode){
            case 49: $("#one").click(); break;
            case 50: $("#two").click(); break;
            case 51: $("#three").click(); break;
            case 52: $("#four").click(); break;
            case 53: $("#five").click(); break;
            case 54: $("#six").click(); break;
            case 55: $("#seven").click(); break;
            case 56: $("#eight").click(); break;
            case 57: $("#nine").click(); break;
            case 48: $("#zero").click(); break;
            case 27: $("#clear").click(); break;
            case 99: $("#clear").click(); break;
            case 8:  $("#clear").click(); break;
            case 61: $("#equals").click(); break;
            case 13: $("#equals").click(); break;
            case 43: $("#plus").click(); break;
            case 45: $("#minus").click(); break;
            case 42: $("#multiply").click(); break;
            case 47: $("#divide").click(); break;
            case 46: $("#dot").click(); break;
        }
    });
 });   
