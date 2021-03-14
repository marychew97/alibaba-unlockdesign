// var tour = new Tour({
//     name: "tour",
//     steps: [
//     {
//         element: "#selangor",
//         title: renderTitle('selangor.svg', 'Selangor'),
//         content: selangorContent()
//     },
//     {
//         element: "#startTour",
//         title: "General hgquiz of Malaysia's States",
//         content: "This is to help you to understand the story behind of each state"
//     },
//     {
//       element: "#perlis",
//       title: "<img src='images/perlis.png' alt='perlis' class='stateImg'/> Perlis",
//       content: perlisContent()
//     },
//     {
//       element: "#kedah",
//       title: "Kedah",
//       content: "Content of my step"
//     },
//     {
//         element: "#kelantan",
//         title: "Kelantan",
//         content: "Content of my step"
//     },
//     {
//         element: "#penang",
//         title: "Penang",
//         content: "Content of my step"
//     },
//     {
//         element: "#perak",
//         title: "Perak",
//         content: "Content of my step"
//     },
    
//     {
//         element: "#pahang",
//         title: "Pahang",
//         content: "Content of my step"
//     },
//     {
//         element: "#terengganu",
//         title: "Terengganu",
//         content: "Content of my step"
//     },
//     {
//         element: "#negsembilan",
//         title: "Negeri Sembilan",
//         content: "Content of my step"
//     },
//     {
//         element: "#melaka",
//         title: "Melaka",
//         content: "Content of my step"
//     },
//     {
//         element: "#johor",
//         title: "Johor",
//         content: "Content of my step"
//     },
//     {
//         element: "#sarawak",
//         title: "Sarawak",
//         content: "Content of my step"
//     },
//     {
//         element: "#sabah",
//         title: "Sabah",
//         content: "Content of my step"
//     },
//     ],
//     container: "body",
//     smartPlacement: true,
//     keyboard: true,
//     storage: false,
//     debug: false,
//     backdrop: false,
//     backdropContainer: 'body',
//     backdropPadding: 0,
//     redirect: true,
//     orphan: false,
//     duration: false,
//     delay: false,
//     basePath: "",
//     template: "<div class='popover tour'><div class='arrow'></div> <h3 class='popover-title'></h3> <div class='popover-content'></div> <div class='popover-navigation'> <button class='btn btn-default' data-role='prev'>« Prev</button> <span data-role='separator'>|</span> <button class='btn btn-default' data-role='next'>Next »</button></div><button class='btn btn-default' data-role='end'>End tour</button></div>"
// });

// Initialize the tour
// tour.init();

var handGesturesQuests = [
    {
        question: 'What does this hand gesture mean?',
        image: 'getbill.gif',
        choices: ['Get bill', 'Get menu', 'Get waiters'],
        correctAnswer: 'Get bill'
    },
    {
        question: 'What does this hand gesture mean?',
        image: 'getmenu.gif',
        choices: ['Get money', 'Get menu', 'Get food from others'],
        correctAnswer: 'Get menu'
    },
    {
        question: 'When will you use this hand gesture?',
        image: 'donemeal.webp',
        choices: ['When you wish to order the food', 'When you want to complain about the food', 'After done your meal'],
        correctAnswer: 'After done your meal'
    },
    {
        question: 'When will you use this hand gesture?',
        image: 'crossroadHand.png',
        choices: ['When you don’t let people talk', 'When you are crossing the road', 'When you are meeting someone'],
        correctAnswer: 'When you are crossing the road'
    },
]

var languagesQuests = [
    {
        question: 'Which of the following is the correct way that Malaysians express yes?',
        choices: ['Ya lah, Ya loh, Ya hor', 'Ya hor, Ya loh, Ya mie', 'Ya lah, Ya ka, Ya hor'],
        correctAnswer: 'Ya lah, Ya loh, Ya hor'
    },
    {
        question: 'What is the meaning of Pokai?',
        choices: ['Fall down', 'No money', 'Get caught by someone', 'All the above'],
        correctAnswer: 'All the above'
    },
    {
        question: 'What is the meaning of Gostan?',
        choices: ['To reverse a vehicle', 'To stop the vehicle', 'To park the vehicle'],
        correctAnswer: 'To reverse a vehicle'
    },
    {
        question: 'What is the meaning of Cincai?',
        choices: ['I have no question', 'I\'m not fussy, everything is fine for me', 'Be faster'],
        correctAnswer: 'I\'m not fussy, everything is fine for me'
    },
    {
        question: 'What is the meaning of Chup?',
        choices: ['A kind of sauce', 'The sound when you are chewing', 'Wait a moment'],
        correctAnswer: 'Wait a moment'
    },
    {
        question: 'What is the meaning of Tapau?',
        choices: ['Take away', 'Pack a food', 'A kind of food'],
        correctAnswer: 'Take away'
    },
    {
        question: 'What is the meaning of “Walao/Walao Eh”?',
        choices: ['What is that', 'What the hell', 'I don’t care'],
        correctAnswer: 'What the hell'
    },
]

var questionCounterHand = 0; //Tracks question number
var selectionsHand = []; //Array containing user choices
var questionCounterLang = 0; //Tracks question number
var selectionsLang = []; //Array containing user choices
var hgquiz = $('#handGesturesQuiz'); //Quiz div object

window.onload = function () {
            setTimeout(
                function () {
                    $('#myVideo').css('display', 'none')
                    $('#map').css('display', 'block')
                    // $('#Div-A').replaceWith($('#Div-B'));
                    // $('#Div-B').addClass('showMap');
                    alert('Welcome to Malaysia! Visit each state by clicking it and answer the quiz.')
                    // Start the tour
                    // tour.start();
                    displayNextHand();
                    displayNextLang();
                      // Click handler for the 'next' button
                    $('#handGesturesQuiznext').on('click', function (e) {
                        e.preventDefault();
                        // Suspend click listener during fade animation
                        // if($('#handGesturesQuiz').is(':animated')) {        
                        // return false;
                        // }
                        chooseHand();
                        
                        // If no user selection, progress is stopped
                        if (!(selectionsHand[questionCounterHand])) {
                        alert('Please make a selection!');
                        } else {
                        questionCounterHand++;
                        displayNextHand();
                        }
                    });
                    
                    // Click handler for the 'prev' button
                    $('#handGesturesQuizprev').on('click', function (e) {
                        e.preventDefault();
                        
                        // if($('#handGesturesQuiz').is(':animated')) {
                        // return false;
                        // }
                        chooseHand();
                        questionCounterHand--;
                        displayNextHand();
                    });
                    
                    // Click handler for the 'Start Over' button
                    $('#handGesturesQuizstart').on('click', function (e) {
                        e.preventDefault();
                        
                        // if($('#handGesturesQuiz').is(':animated')) {
                        // return false;
                        // }
                        questionCounterHand = 0;
                        selectionsHand = [];
                        displayNextHand();
                        $('#handGesturesQuizstart').hide();
                    });

                    $('#languagesQuiznext').on('click', function (e) {
                        e.preventDefault();
                        // Suspend click listener during fade animation
                        // if($('#languagesQuiz').is(':animated')) {        
                        // return false;
                        // }
                        chooseLang();
                        
                        // If no user selection, progress is stopped
                        if (!(selectionsLang[questionCounterLang])) {
                        alert('Please make a selection!');
                        } else {
                        questionCounterLang++;
                        displayNextLang();
                        }
                    });
                    
                    // Click Langler for the 'prev' button
                    $('#languagesQuizprev').on('click', function (e) {
                        e.preventDefault();
                        
                        // if($('#languagesQuiz').is(':animated')) {
                        // return false;
                        // }
                        chooseLang();
                        questionCounterLang--;
                        displayNextLang();
                    });
                    
                    // Click Langler for the 'Start Over' button
                    $('#languagesQuizstart').on('click', function (e) {
                        e.preventDefault();
                        
                        // if($('#languagesQuiz').is(':animated')) {
                        // return false;
                        // }
                        questionCounterLang = 0;
                        selectionsLang = [];
                        displayNextLang();
                        $('#languagesQuizstart').hide();
                    });
                    
                    // Animates buttons on hover
                    $('.button').on('mouseenter', function () {
                        $(this).addClass('active');
                    });
                    $('.button').on('mouseleave', function () {
                        $(this).removeClass('active');
                    });

                    $(function () { 
                        $("#tourStart").popover('show');
                      });
                },
                5000
            );
        };

$(function () {
    $('[data-toggle="popover"]').popover()
})

  // Creates and returns the div that contains the questions and 
  // the answer selectionsHand
function createQuestionElementHand(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h4>Question ' + (index + 1) + ':</h4>');
    qElement.append(header);

    var image = $('<image src="images/' + handGesturesQuests[index].image + '" alt="' + handGesturesQuests[index].image + '" class="questionImg"/>');
    qElement.append(image);
    
    var question = $('<p>').append(handGesturesQuests[index].question);
    qElement.append(question);
    
    var radioButtons = createRadiosHand(index);
    qElement.append(radioButtons);
    
    return qElement;
}
  
  // Creates a list of the answer choices as radio inputs
function createRadiosHand(index) {
    var radioList = $('<ul class="listSection">');
    var item;
    var input = '';
    for (var i = 0; i < handGesturesQuests[index].choices.length; i++) {
        item = $('<li class="choiceList">');
        input = '<input type="radio" name="answer" value="' + handGesturesQuests[index].choices[i] + '"/>';
        input += '<span class="choicelabel">' + handGesturesQuests[index].choices[i] + '</span>';
        item.append(input);
        radioList.append(item);
    }
    return radioList;
}
  
  // Reads the user selection and pushes the value to an array
function chooseHand() {
    if($('input[name="answer"]:checked').val() !== undefined){
        selectionsHand.push($('input[name="answer"]:checked').val());
    }
    
    console.log(selectionsHand)
}

function displayNextHand() {
    $('#question').remove();
    
    if(questionCounterHand < handGesturesQuests.length){
      var nextQuestion = createQuestionElementHand(questionCounterHand);
      $('#handGesturesQuiz').append(nextQuestion).show();
      if (!(selectionsHand[questionCounterHand])) {
        $('input[value='+selectionsHand[questionCounterHand]+']').prop('checked', true);
      }
      
      // Controls display of 'prev' button
      if(questionCounterHand === 1){
        $('#handGesturesQuizprev').show();
      } else if(questionCounterHand === 0){
        
        $('#handGesturesQuizprev').hide();
        $('#handGesturesQuiznext').show();
      }
    }else {
      var scoreElem = displayScoreHand();
      $('#handGesturesQuiz').append(scoreElem).show();
      $('#handGesturesQuiznext').hide();
      $('#handGesturesQuizprev').hide();
      $('#handGesturesQuizstart').show();
      
    }
}

// Computes score and returns a paragraph element to be displayed
function displayScoreHand() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selectionsHand.length; i++) {
      if (selectionsHand[i] === handGesturesQuests[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 handGesturesQuests.length + ' right!!!');
    return score;
}

function createQuestionElementLang(index) {
    var qElement = $('<div>', {
      id: 'questionLang'
    });
    
    var header = $('<h4>Question ' + (index + 1) + ':</h4>');
    qElement.append(header);
    
    var question = $('<p>').append(languagesQuests[index].question);
    qElement.append(question);
    
    var radioButtons = createRadiosLang(index);
    qElement.append(radioButtons);
    
    return qElement;
}
  
  // Creates a list of the answer choices as radio inputs
function createRadiosLang(index) {
    var radioList = $('<ul class="listSection">');
    var item;
    var input = '';
    for (var i = 0; i < languagesQuests[index].choices.length; i++) {
        item = $('<li class="choiceList">');
        input = '<input type="radio" name="answer" value="' + languagesQuests[index].choices[i] + '"/>';
        input += '<span class="choicelabel">' + languagesQuests[index].choices[i] + '</span>';
        item.append(input);
        radioList.append(item);
    }
    return radioList;
}
  
  // Reads the user selection and pushes the value to an array
function chooseLang() {
    if($('input[name="answer"]:checked').val() !== undefined){
        selectionsLang.push($('input[name="answer"]:checked').val());
    }
    
    console.log(selectionsLang)
}

function displayNextLang() {
    $('#questionLang').remove();
    
    if(questionCounterLang < languagesQuests.length){
      var nextQuestion = createQuestionElementLang(questionCounterLang);
      $('#languagesQuiz').append(nextQuestion).show();
      if (!(selectionsLang[questionCounterLang])) {
        $('input[value='+selectionsLang[questionCounterLang]+']').prop('checked', true);
      }
      
      // Controls display of 'prev' button
      if(questionCounterLang === 1){
        $('#languagesQuizprev').show();
      } else if(questionCounterLang === 0){
        
        $('#languagesQuizprev').hide();
        $('#languagesQuiznext').show();
      }
    }else {
      var scoreElem = displayScoreLang();
      $('#languagesQuiz').append(scoreElem).show();
      $('#languagesQuiznext').hide();
      $('#languagesQuizprev').hide();
      $('#languagesQuizstart').show();
      
    }
}

// Computes score and returns a paragraph element to be displayed
function displayScoreLang() {
    var score = $('<p>',{id: 'questionLang'});
    
    var numCorrect = 0;
    for (var i = 0; i < selectionsLang.length; i++) {
      if (selectionsLang[i] === languagesQuests[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 languagesQuests.length + ' right!!!');
    return score;
}