
let questions = [
  {
    id: 1,
    question: "Are passengers allowed to travel in an open load space?",
    answer: "No",
    options: [
      "Yes, if the vehicle does not exceed 60km/h",
      "Yes, if the vehicle does not exceed 45km/h",
      "Yes, provided they are seated",
      "No"
    ]
  },
  {
    id: 2,
    question: "Which of the following statement is correct?",
    answer: "Passengers in vehicles are less likely to be injured in a crash if they are wearing seatbelts",
    options: [
      "Passengers in vehicles are less likely to be injured in a crash if they are wearing seatbelts",
      "The nature of injuries in motor vehicle accidents is not related to the wearing of seatbelts",
      "Passengers in the rear seats of vehicles are not required to wear seat belts",
      "None of the above"
    ]
  },
  {
    id: 3,
    question: "What must you do at a STOP sign?",
    answer: "Stop and give way to all traffic on the crossroad",
    options: [
      "Stop at least two metres before the sign",
      "Stop and give way to all traffic on the crossroad",
      "Slow down and be prepared to stop if any traffic is approaching",
      "None of the above"
    ]
  },
  {
    id: 4,
    question: "What is the rule regarding overtaking at a pedestrian crossing?",
    answer: "You must not overtake a vehicle that has stopped at a pedestrian crossing",
    options: [
      "You must not overtake a vehicle that has stopped at a pedestrian crossing",
      "Give way to pedestrians on your right",
      "Give way to pedestrians on your left ",
      "None of the above"
    ]
  },
  {
    id: 5,
    question: "What is the maximum speed learner drivers (L plates) are allowed to drive?",
    answer: "100km/h",
    options: [
      "110km/h",
      "100km/h",
      "90km/h",
      "60km/h"
    ]
  },
  {
    id: 6,
    question: "Are you allowed to park a vehicle on a pedestrian crossing?",
    answer: "No",
    options: [
      "Yes, if no pedestrians are using it",
      "Yes, if it is a passenger vehicle",
      "Yes, if it is a government vehicle",
      "No"
    ]
  },
  {
    id: 7,
    question: "What does a broken white line down the centre of the road mean?",
    answer: "You may cross the broken white line when overtaking or turning right, if it is safe to do so",
    options: [
      "You must not cross the broken white line",
      "You must cross the broken white line",
      "You may only cross the broken white line to turn right",
      "You may cross the broken white line when overtaking or turning right, if it is safe to do so"
    ]
  },
  {
    id: 8,
    question: "What is the safest way to approach an intersection?",
    answer: "Travelling at a speed that will allow you to stop, if required",
    options: [
      "Travelling at the speed limit for the area",
      "Travelling at a speed that will allow you to stop, if required",
      "Look steadily to the right",
      "None of the above"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "/end";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
