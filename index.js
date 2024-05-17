//FOOTER TEXT RENDER
let footerYear = new Date().getFullYear();
let footerYearElement = document.getElementById("main-text-footer").innerHTML = footerYear;

let textBodyOjectUw = {
    uw_recomm: "It seems like to are underweight! according to the results, you may consider eating food that contain a reasonable amount of carbohydrate, and make sure you eat a lot of protein, be aware of sodium. Too much sodium is not recommended by FDA.",
    uw_actve: "Make sure exercise every other week, its always good to exercise to get a good night sleep.",
    uw_medic: "Regular check ups won’t hurt. You may consider talking to your doctor since your are underweight, this also can be optional as of right now.",
};

let textBodyOjectHty = {
    hty_recomm: "You are healthy! Congratulation you should be proud of yourself. Make sure to eat healthy food. Watch out for sugar and sodium intake.",
    hty_actve: "Make sure you exercise once or twice a week, its always good to exercise to get a good night sleep. Keep up the good work.",
    hty_medic: "Regular check ups wouldn’t hurt. However there is no need to go see a doctor at this moment. Vitamins should be a good option for you.",
};

let textBodyOjectOw = {
    ow_recomm: "You are overweight, Don’t panic. This is normal Make sure to eat more healthy food. Such as salads and fruits. Stay away from sodium and sugar.",
    ow_actve: "Make sure you exercise regularly, jog, walk or sign up for gym membership. its always good to exercise to get a good night sleep.",
    ow_medic: "Regular check ups wouldn’t hurt. Although you may consult your doctor to check your blood pressure and your sugar level.",
};

let textBodyOjectOb = {
    ob_recomm: "Obesity is a common issue to the western countries, make sure you start fasting right away and only eat salads and fruits.",
    ob_actve: "Make sure you exercise everyday, jog, walk or sign up for gym membership today. its always good to exercise to get a good night sleep.",
    ob_medic: "You may consult your doctor to check your blood pressure and your sugar level regularly. Obesity is generally not good for your health.",
};

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
        
        if(bmiCalculateForm) {
            var heightFeetClear = document.getElementById("feetHeight");
            var heightInchInitClear = document.getElementById("inchHeight");
            var weightClear = document.getElementById("weightVar");

            heightFeetClear.disabled = true;
            heightInchInitClear.disabled = true;
            weightClear.disabled = true;
        }
    }
}
    if(bmiCalculateForm < 18) {
        document.getElementById("result_main_text").innerHTML = "You are underweight";

        var canva_uw_element = document.getElementById("main-ref--canva");
        canva_uw_element.classList.add("main-ref--canva-uw");
        


            var topRefImg = document.getElementById("topFlexReferrer");
            topRefImg.setAttribute("src", "./assets/uw_food.png");
            document.getElementById("result-canva--recomm").innerHTML = textBodyOjectUw.uw_recomm;

            var midRefImg = document.getElementById("midFlexReferrer");
            midRefImg.setAttribute("src", "./assets/lightexercise.png");
            document.getElementById("result-canva--sub-main-flex-text-active").innerHTML = textBodyOjectUw.uw_actve;
            
            var bottomRefImg = document.getElementById("bottomFlexReferrer");
            bottomRefImg.setAttribute("src", "./assets/vitamins.png");
            document.getElementById("result-canva--sub-main-flex-text-medc").innerHTML = textBodyOjectUw.uw_medic;
        //Call_submit_checker
        submitChecker();
    }

    else if(bmiCalculateForm > 18 && bmiCalculateForm < 25) {
        document.getElementById("result_main_text").innerHTML = "You are healthy";

        var canva_h_element = document.getElementById("main-ref--canva");
        canva_h_element.classList.toggle("main-ref--canva-h");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/h_food.png");
        document.getElementById("result-canva--recomm").innerHTML = textBodyOjectHty.hty_recomm;

        var midRefImg = document.getElementById("midFlexReferrer");
        midRefImg.setAttribute("src", "./assets/lightexercise.png");
        document.getElementById("result-canva--sub-main-flex-text-active").innerHTML = textBodyOjectHty.hty_actve;

        var bottomRefImg = document.getElementById("bottomFlexReferrer");
        bottomRefImg.setAttribute("src", "./assets/vitamins.png");
        document.getElementById("result-canva--sub-main-flex-text-medc").innerHTML = textBodyOjectHty.hty_medic;

        //Call_submit_checker
        submitChecker();
    }

    else if(bmiCalculateForm > 25 && bmiCalculateForm < 30) {
        document.getElementById("result_main_text").innerHTML = "You are over weight";

        var canva_ow_element = document.getElementById("main-ref--canva");
        canva_ow_element.classList.add("main-ref--canva-ow");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/ow_food.png");
        document.getElementById("result-canva--recomm").innerHTML = textBodyOjectOw.ow_recomm;

        var midRefImg = document.getElementById("midFlexReferrer");
        midRefImg.setAttribute("src", "./assets/ow_exercise.png");
        document.getElementById("result-canva--sub-main-flex-text-active").innerHTML = textBodyOjectOw.ow_actve;

        var bottomRefImg = document.getElementById("bottomFlexReferrer");
        bottomRefImg.setAttribute("src", "./assets/ow_health.png");
        document.getElementById("result-canva--sub-main-flex-text-medc").innerHTML = textBodyOjectOw.ow_medic;
        //Call_submit_checker
        submitChecker();
    }

    else if(bmiCalculateForm > 30 && bmiCalculateForm < 35) {
        document.getElementById("result_main_text").innerHTML = "You are obese";

        var canva_ob_element = document.getElementById("main-ref--canva");
        canva_ob_element.classList.add("main-ref--canva-ob");

        var topRefImg = document.getElementById("topFlexReferrer");
        topRefImg.setAttribute("src", "./assets/ob_food.jpg");
        document.getElementById("result-canva--recomm").innerHTML = textBodyOjectOb.ob_recomm;
        
        var midRefImg = document.getElementById("midFlexReferrer");
        midRefImg.setAttribute("src", "./assets/ob_exercise.png");
        document.getElementById("result-canva--sub-main-flex-text-active").innerHTML = textBodyOjectOb.ob_actve;
                
        var bottomRefImg = document.getElementById("bottomFlexReferrer");
        bottomRefImg.setAttribute("src", "./assets/ob_health.png");
        document.getElementById("result-canva--sub-main-flex-text-medc").innerHTML = textBodyOjectOb.ob_medic;
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
              document.getElementById("textOutParaphjson").innerHTML = "-external JSON datasource-";
            } else {
              console.error('Index is out of bounds');
            }
          })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
