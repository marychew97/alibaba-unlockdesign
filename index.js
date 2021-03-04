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
//         title: "General Quiz of Malaysia's States",
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

var answerChosen = '';

// Initialize the tour
// tour.init();

window.onload = function () {
            setTimeout(
                function () {
                    $('#myVideo').css('display', 'none')
                    $('#map').css('display', 'block')
                    // $('#Div-A').replaceWith($('#Div-B'));
                    // $('#Div-B').addClass('showMap');
                    // Start the tour
                    // tour.start();
                    $('#handGestures').on('click', function(){
                        alert('hand gestures')
                    })
                    
                    $('#languages').on('click', function(){
                        alert('languages')
                    })
                    
                    $('#holidays').on('click', function(){
                        alert('holidays')
                    })
                    
                    $('#localFoods').on('click', function(){
                        alert('local foods')
                    })

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

         

function renderTitle(img, name){
    return "<img src='images/" + img + "' alt='" + img + "' class='stateImg'/> " + name; 
}

function perlisContent(){
    return '<span>perlis quiz</span>'
}

function selangorContent(){
    var array = [
        {
            title: 'How many pasar malam are there in Selangor?',
            image: 'pasarmalam.jpeg',
            choices: [75, 135, 265],
            answer: 135
        },
        {
            title: 'How tall is the Lord Murugan Statue in Batu Caves?',
            image: 'batucaves.jpg',
            choices: ['122.0 meters', '42.7 meters', '43.5 meters'],
            answer: '42.7 meters'
        }
    ]
    console.log(array)
    var html = ''
    
    for(var i=0; i<array.length; i++){
        var choices = array[i].choices;
        var inputs = '';
        for(var j=0; j<choices.length; j++){
            inputs += '<span class="inputChoice"><input type="radio" value="' + choices[j] + '" name="choice" class="inputValue" onchange="chooseValue(' + choices[j] + ')"/>' + choices[j] + '</span>';
        }

        html += '<div class="contents">' +
                '<span>' + array[i].title + '</span>' +
                '<img src="images/' + array[i].image + '" class="contentImg"/>'+ inputs +
                '<br/><span class="finalAnswer" style="display: none">Answer: ' + array[i].answer +'</span>' + 
                '<button type="button" class="btn btn-default buttonText" onclick="submitAnswer(' + array[i].answer + ')">Submit</button>' + 
                '</div>'
    }
    return html
}

function submitAnswer(answer){
    if(answerChosen === answer){
        $('.finalAnswer').css('color', 'green')
    }else{
        $('.finalAnswer').css('color', 'red')
    }
    $('.finalAnswer').css('display', 'block')
    $('.inputValue').attr('disabled', true)
    $('.buttonText').text('Next')
}

function chooseValue(answer){
    answerChosen = answer;
}