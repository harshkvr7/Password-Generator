$("#myRange").on("input", function () {
    $("#charlen").text($(this).val());
});

const upper_letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
const lower_letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


var combined_arr = [];
var char_len = 8;

$("#gen").on("click", function () {

    combined_arr = [];

    if ($("#IUL").is(":checked") == true) {
        combined_arr = combined_arr.concat(upper_letters);
    }
    if ($("#ILL").is(":checked") == true) {
        combined_arr = combined_arr.concat(lower_letters);
    }
    if ($("#IN").is(":checked") == true) {
        combined_arr = combined_arr.concat(numbers);
    }
    if ($("#IS").is(":checked") == true) {
        combined_arr = combined_arr.concat(symbols);
    }

    char_len = $("#myRange").val();
    arr_len = combined_arr.length;

    console.log(combined_arr);

    ans_str = '';

    for (let i = 0; i < char_len; i++) {

        var index = Math.floor(Math.random() * arr_len);
        console.log(index);

        ans_str = ans_str.concat(combined_arr[index]);
        console.log(ans_str);
    }

    $("#out-box").text(ans_str);

    if (char_len >= 4) {
        pass_strength = 1;
    }
    if (char_len > 7) {
        pass_strength = 2;
    }
    if (char_len > 10) {
        pass_strength = 3;
    }
    if (char_len >= 14) {
        pass_strength = 4;
    }

    console.log(pass_strength);

    switch (pass_strength) {
        case 1:
            $(".b1").css("background-color", "red");
            $(".b2").css("background-color", "rgba(98, 98, 99, 0)");
            $(".b3").css("background-color", "rgba(98, 98, 99, 0)");
            $(".b4").css("background-color", "rgba(98, 98, 99, 0)");
            break;
        case 2:
            $(".b1").css("background-color", "yellow");
            $(".b2").css("background-color", "yellow");
            $(".b3").css("background-color", "rgba(98, 98, 99, 0)");
            $(".b4").css("background-color", "rgba(98, 98, 99, 0)");
            break;
        case 3:
            $(".b1").css("background-color", "orange");
            $(".b2").css("background-color", "orange");
            $(".b3").css("background-color", "orange");
            $(".b4").css("background-color", "rgba(98, 98, 99, 0)");
            break;
        case 4:
            $(".b1").css("background-color", "green");
            $(".b2").css("background-color", "green");
            $(".b3").css("background-color", "green");
            $(".b4").css("background-color", "green");
            break;
        default:
            break;
    }
})

$(".icon-tabler-copy").on("click", function () {
    navigator.clipboard.writeText($("#out-box").text()).then(function () {
        alert("Text copied !");
    });
})

var pass_strength = 0;

if (char_len >= 4) {
    pass_strength = 1;
}
if (char_len > 7) {
    pass_strength = 2;
}
if (char_len > 10) {
    pass_strength = 3;
}
if (char_len >= 14) {
    pass_strength = 4;
}

switch (pass_strength) {
    case 1:
        $(".b1").css("background-color", "red");
        $(".b2").css("background-color", "rgba(98, 98, 99, 0)");
        $(".b3").css("background-color", "rgba(98, 98, 99, 0)");
        $(".b4").css("background-color", "rgba(98, 98, 99, 0)");
        break;
    case 2:
        $(".b1").css("background-color", "yellow");
        $(".b2").css("background-color", "yellow");
        $(".b3").css("background-color", "rgba(98, 98, 99, 0)");
        $(".b4").css("background-color", "rgba(98, 98, 99, 0)");
        break;
    case 3:
        $(".b1").css("background-color", "orange");
        $(".b2").css("background-color", "orange");
        $(".b3").css("background-color", "orange");
        $(".b4").css("background-color", "rgba(98, 98, 99, 0)");
        break;
    case 4:
        $(".b1").css("background-color", "green");
        $(".b2").css("background-color", "green");
        $(".b3").css("background-color", "green");
        $(".b4").css("background-color", "green");
        break;
    default:
        break;
}





