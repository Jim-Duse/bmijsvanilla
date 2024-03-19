//FOOTER TEXT RENDER
let footerYear = new Date().getFullYear();
let footerYearElement = document.getElementById("main-text-footer").innerHTML = footerYear;




//MAIN JS FUNCTION CALLBACK
function bmiCalculate() {

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
        document.getElementById("result-canva--recomm").innerHTML = "123";

        

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
    //PULL_JSON_DATA_TIPS
    fetch('./tipsVault.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Request unavailable');
            }
            return response.json();
        })
        .then(data => {
            let dataJsonArray = data.length;
            let index = Math.floor(Math.random() * dataJsonArray);
            if (index >= 0 && index < data.length) {
              const item = data[index];
              //console.log(item.tipTitle, item.tipBody);
              //console.log(dataJsonArray);
              //Export-JSON
              document.getElementById("textOutTitle").innerHTML = item.tipTitle;
              document.getElementById("textOutParaph").innerHTML = item.tipBody;
            } else {
              console.error('Index is out of bounds');
            }
          })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
