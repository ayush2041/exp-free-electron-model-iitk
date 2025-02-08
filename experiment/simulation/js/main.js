let btn = document.querySelector("#start");
let txt = document.querySelector("#text");
let txt1 = document.querySelector(".step1");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1.2
    text_speak.pitch = 1
    text_speak.volume = 5
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

window.addEventListener('',()=>{
    speak(txt.innerText);
})

btn.addEventListener('click',()=>{
    speak(txt1.innerText)
})

// process

function start(){
    let msg = document.getElementById("text");
    msg.innerText = "click on the flask to put prepared solution  in cuvette."
}

function pourWater() {
    let bottle = document.getElementById("a3");
    let waterFill = document.getElementById("a5");
    let msg = document.getElementById("text");

    // Move flask near the cuvette and tilt it
    bottle.style.transform = "translate(8.6rem, 14rem) rotate(-40deg)";
    
    setTimeout(() => {
        bottle.style.transform = 'translate(19.6rem, 12rem) '; // return the flask to its initial position
      }, 2500);


    // Fill cuvette after 1.5s
    setTimeout(() => {
        waterFill.style.height = "50px"; // Adjust water height
    }, 1500);

    msg.innerText = "click on beaker  to fill solvent in refrence cuvette."
}

function pourSolvent(){
    let beaker = document.getElementById("a2");
    let solventFill = document.getElementById("a9");

    // Move beaker near the cuvette and tilt it
    beaker.style.transform = "translate(6.5rem, 10.5rem) rotate(-60deg)";

    setTimeout(()=>{
        beaker.style.transform = "translate(30rem, 15.5rem) rotate(0deg)"; // return the beaker to its initial position
    }, 2500);

    // Fill cuvette after 1.5s
    setTimeout(() => {
        solventFill.style.height = "50px";  // Adjust water height
    }, 1500);

    let msg = document.getElementById("text");
    msg.innerText = "click on solution cuvette to kept in spectrophotometer."
}

function pourBottle() {
    let bottle2 = document.getElementById("a4")
    
    // Move cuvette near the spectrophotometer and kept it
    bottle2.style.transform = "translate(6.5rem, 3.5rem) rotate(0deg)"; 

    setTimeout(() => {
        bottle2.style.display = "none"; // hide the cuvette
    }, 2500);

    let msg = document.getElementById("text");
    msg.innerText = "click on refrence cuvette to kept in spectrophotometer."
}

function pourBottle2() {
    let bottle3 = document.getElementById("a8")
    
    // Move cuvette near the spectrophotometer and kept it
    bottle3.style.transform = "translateX(-18rem) translateY( -6rem) rotate(0deg)";

    setTimeout(() => {
        bottle3.style.display = "none";
    }, 2500);

     let msg = document.getElementById("text");
    msg.innerText = "close the cover of spectrophotometer"
}

function changeImage(){
 let img =  document.getElementById("a1").src = "./images/specto-off.png";
}

//graph

// Get the context of the canvas element we want to select
var ctx = document.getElementById('myChart').getContext('2d');

// Define the data for the chart
var data = {
    labels: ['250', '275', '300', '325', '350', '375', '400', '425'],
    datasets: [{
        label: 'UVProbe-[Spectrum]',
        data: [0.05, 0.08, 0.29, 0.50, 0.20, 0.04, 0.01, 0.00],
        // fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.2 // This property makes the line smooth
    }]
};

// Define the options for the chart
var options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        tooltip: {
            enabled: true,
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Wavelength'
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Absorbance'
            }
        }
    }
};

// Create the chart
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});