function bmiCalculate() {
    var myDictText = [
        {id: 1,
        name: "name1",
        secname: "secname1"
        },
        {id: 2,
        name: "name2",
        secname: "secname2"
        },

    ];
    var heightFeet = +document.getElementById("feetHeight").value;
    var heightInchInit = +document.getElementById("inchHeight").value;
    var weight = +document.getElementById("weightVar").value;

    var heightFin = (heightFeet * 12) + heightInchInit;

    var bmiCalculateForm = ((703 * weight)/(heightFin * heightFin)).toFixed(1);

function submitChecker() {
    if(bmiCalculateForm) {
        var submitCheckNotNull = document.getElementById("submitData");
        submitCheckNotNull.value = "Reset";
        submitCheckNotNull.setAttribute("onclick", "document.location.reload()");
    }
}
    if(bmiCalculateForm < 18) {
        document.getElementById("result_main_text").innerHTML = "You are underweight";
        var canva_uw_element = document.getElementById("main-ref--canva");
        canva_uw_element.classList.add("main-ref--canva-uw");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/uw_food.png");
            var midRefImg = document.getElementById("midFlexReferrer");
            midRefImg.setAttribute("src", "./assets/lightexercise.png");
                var bottomRefImg = document.getElementById("bottomFlexReferrer");
                bottomRefImg.setAttribute("src", "./assets/vitamins.png");
        //Call_submit_checker
        submitChecker();
    }

    else if(bmiCalculateForm > 18 && bmiCalculateForm < 25) {
        document.getElementById("result_main_text").innerHTML = "You are healthy";
        var canva_h_element = document.getElementById("main-ref--canva");
        canva_h_element.classList.toggle("main-ref--canva-h");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/h_food.png");
            var midRefImg = document.getElementById("midFlexReferrer");
            midRefImg.setAttribute("src", "./assets/lightexercise.png");
                var bottomRefImg = document.getElementById("bottomFlexReferrer");
                bottomRefImg.setAttribute("src", "./assets/vitamins.png");
        //Call_submit_checker
        submitChecker();
    }

    else if(bmiCalculateForm > 25 && bmiCalculateForm < 30) {
        document.getElementById("result_main_text").innerHTML = "You are over weight";
        var canva_ow_element = document.getElementById("main-ref--canva");
        canva_ow_element.classList.add("main-ref--canva-ow");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/ow_food.png");
            var midRefImg = document.getElementById("midFlexReferrer");
            midRefImg.setAttribute("src", "./assets/ow_exercise.png");
                var bottomRefImg = document.getElementById("bottomFlexReferrer");
                bottomRefImg.setAttribute("src", "./assets/ow_health.png");
        //Call_submit_checker
        submitChecker();
    }

    else if(bmiCalculateForm > 30 && bmiCalculateForm < 35) {
        document.getElementById("result_main_text").innerHTML = "You are obese";
        var canva_ob_element = document.getElementById("main-ref--canva");
        canva_ob_element.classList.add("main-ref--canva-ob");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/ob_food.jpg");
            var midRefImg = document.getElementById("midFlexReferrer");
            midRefImg.setAttribute("src", "./assets/ob_exercise.png");
                var bottomRefImg = document.getElementById("bottomFlexReferrer");
                bottomRefImg.setAttribute("src", "./assets/ob_health.png");
        //Call_submit_checker
        submitChecker()
    }

    else if(bmiCalculateForm > 35) {
        document.getElementById("result_main_text").innerHTML = "Severly obese";
        var canva_so_element = document.getElementById("main-ref--canva");
        canva_so_element.classList.add("main-ref--canva-so");
        //Call_submit_checker
        submitChecker()
    }

    if(bmiCalculateForm === "NaN") {
        var resultMainlog = document.getElementById("result_main");
        resultMainlog.innerHTML = "Empty input";
        console.log(resultMainlog);
    } else {
        document.getElementById("result_main").innerHTML = bmiCalculateForm;
    }
    document.getElementById("textOut").innerHTML = myDictText[1].name;
}
