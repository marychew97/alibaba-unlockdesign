var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 10,
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "on_click"
  },
  state_specific: {
    MYS1137: {
      name: renderTitle('Perak', 'perak.png'),
      description: renderBody([
        {
            title: 'Ipoh is the capital city of Perak. What is t well known for besides great food, and limestone mountains and caves?',
            image: 'ipoh_mountain.jpg',
            choices: ['Tin mines', 'Seafoods', 'Mangroves'],
            answer: 'Tin mines'
        },
        {
            title: 'How tall is the Lord Murugan Statue in Batu Caves?',
            image: 'batucaves.jpg',
            choices: ['122.0 meters', '42.7 meters', '43.5 meters'],
            answer: '42.7 meters'
        }
    ]),
      color: "#f29400",
      hover_color: "default",
      url: "default"
    },
    MYS1139: {
      name: renderTitle('Pulau Pinang', 'penang.png'),
      description: renderBody([
        {
            title: 'The name Penang comes from the Malay word Pinang, means the betel nut tree. The original name of Penang was Pulau Ka-satu or “First Island”, but on August 12, 1786 it was it renamed. What was the name?',
            image: 'penangbridge.jpg',
            choices: ['Prince of Wonderland Island', 'Prince of Settlefield Island', 'Prince of Wales Island'],
            answer: 'Prince of Wales Island'
        }
    ]),
      color: '#2e3194'
    },
    MYS1140: {
      name: renderTitle('Kedah', 'kedah.png'),
      description: renderBody([
        {
            title: 'As we all know, Kedah produces more than half of the country\'s home grown rice supply. But do you know Kedah has a name that is related to "Rice"?',
            image: 'paddy.jpg',
            choices: ['The Rice Box', 'The Rice Tank', 'The Rice Bowl', 'The Rice and Noodle'],
            answer: 'The Rice Bowl'
        }
    ]),
      color: '#ed1e79'
    },
    MYS1141: {
      name: renderTitle('Perlis', 'perlis.png'),
      description: renderBody([
          {
              title: 'Kota Kayang Museum is also known as the Perlis State Museum. What does it showcase?',
              image: 'kotakayang.jpg',
              choices: ['3D Drawings and paintings', 'Antique furnitures', 'History and culture of the area and the ruling family'],
              answer: 'History and culture of the area and the ruling family'
          }
      ]),
      color: '#0071bd'
    },
    MYS1143: {
      name: renderTitle('Johor', 'johor.png'),
      description: renderBody([
        {
            title: 'Johor has the most theme parks in the whole country. How many theme parks in Johor?',
            image: 'legoland.jpg',
            choices: [9, 13, 6],
            answer: 9
        }
    ]),
      color: "#f8931f"
    },
    MYS1144: {
      name: renderTitle('Kelantan', 'kelantan.svg'),
      description: renderBody([
        {
            title: 'Kelantan is located in the north-eastern corner of the Peninsula, Kelantan, which is said to translate as the "Land of Lightning", is an agrarian state with lush paddy fields, rustic fishing villages and casuarina-lined beaches. Kelantan is home to some of the most ancient archaeological discoveries in Malaysia, including several prehistoric aboriginal settlements. There is one pasar named as Pasar Khadijah, wife of Prophet Muhammad, Khadija bint Khuwaylid. Why?',
            image: 'pasarkhadijah.jpg',
            choices: ['Because it is dominated by Womensellers', 'Because Kelantan is known as the most Islamic state', 'Because Kelantan has a lot of women'],
            answer: 'Because it is dominated by Womensellers'
        }
    ]),
      color: "#803789"
    },
    MYS1145: {
      name: renderTitle('Melaka', 'melaka.svg'),
      description: renderBody([
        {
            title: 'A Famosa is one of the most visited sightseeing spot in Melaka. Who constructed A Famosa?',
            image: 'afamosa.jpg',
            choices: ['JWW Birch', 'Alfonso de Albuquerque', 'Sir Stamford Raffles'],
            answer: 'Alfonso de Albuquerque'
        }
    ]),
      color: "#803789"
    },
    MYS1146: {
      name: renderTitle('Negeri Sembilan', 'negerisem.png'),
      description: renderBody([
        {
            title: 'Negeri Sembilan is named as the ninth state. What does Negeri Sembilan mean?',
            image: 'minangkabau.jpg',
            choices: ['Land of the Nine Districts', 'Land of the Nine States', 'Land of the Nine Towns'],
            answer: 'Land of the Nine States'
        }
    ]),
      color: "#3ab54a"
    },
    MYS1147: {
      name: renderTitle('Pahang', 'pahang.png'),
      description: renderBody([
        {
            title: 'Bukit Tinggi is a small town in Bentong district of Pahang, Malaysia. This small town is located along Kuala Lumpur–Karak Expressway, notable for its famous restaurants that lure visitors coming from Genting Highlands. There are several notable attractions in Bukit Tinggi. Which of the following is one of the attractions?',
            image: 'bukittinggi.jpg',
            choices: ['Colmar Tropicale', 'Fraser\'s Hill', 'Elephant Sanctuary'],
            answer: 'Colmar Tropicale'
        }
    ]),
      color: "#e3001b"
    },
    MYS1148: {
      name: renderTitle('Selangor', 'selangor.svg'),
      description: renderBody([
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
    ]),
      color: "#0071bd"
    },
    MYS1149: {
      name: renderTitle('Terengganu', 'terengganu.png'),
      color: "#3ab54a"
    },
    MYS1186: {
      name: renderTitle('Sabah', 'sabah.png'),
      description: renderBody([
        {
            title: 'Dairy farm in Malaysia recently gained attention for its uncanny resemblance to the scenic New Zealand grasslands. Where is it located?',
            image: 'dairyfarm.jpg',
            choices: ['Kota Kinabalu', 'Kundasang', 'Sandakan', 'Semporna'],
            answer: 'Kundasang'
        }
    ]),
      color: "#0071bd"
    },
    MYS1187: {
      name: renderTitle('Sarawak', 'sarawak.png'),
      description: renderBody([
        {
            title: 'Kuching is the capital city of Sarawak. It was named as Kuching because it is where James Brooke referred to the Kuching City as “Kuchin”. It bore resemblance to the old word “Cochin” which being commonly used in India or Indochina. What does "Cochin" mean?',
            image: 'kuching.jpg',
            choices: ['Cat', 'River', 'Port', 'Island'],
            answer: 'Port'
        }
    ]),
      color: "#803789"
    },
    MYS4831: {
      name: renderTitle("Federal Territory of Kuala Lumpur", 'kualalumpur.png'),
      description: renderBody([
        {
            title: 'KL Tower is always come to our mind when we talk about Kuala Lumpur. It was the tallest building between year 1998 and 2004. How high it is?',
            image: 'kltower.jpg',
            choices: ['400.0m', '421.3m', '451.9m', '488.8m'],
            answer: '451.9m'
        }
    ]),
      color: "#fd940f"
    },
    MYS4832: {
      name: renderTitle("Federal Territory of Putrajaya", 'putrajaya.png'),
      description: renderBody([
        {
            title: '38% of the area in Putrajaya is made up of parks, lakes and wetlands. The remaining areas are for offices, commercial and residential developments, public utilities and amenities. This development is known as _______',
            image: 'putrajaya_masjid.jpeg',
            choices: ['City in a Garden', 'Garden in a City', 'The Pink Palace'],
            answer: 'City in a Garden'
        }
    ]),
      color: "#e31370"
    },
    MYS4833: {
      name: renderTitle("Federal Territory of Labuan", 'labuan.png'),
      description: renderBody([
        {
            title: 'Local kuihs are popular in Labuan and are mostly sold in the weekend market. Which of the following is the most popular kuih in Labuan?',
            image: 'kelupis.jpg',
            choices: ['Seri muka', 'Kuih lapis', 'Kelupis'],
            answer: 'Kelupis'
        }
    ]),
      color: "#f8931f"
    }
  },
  locations: {
    "0": {
      lat: "3.166667",
      lng: "101.7",
      name: "Kuala Lumpur"
    },
    "1": {
      lat: "4.61175",
      lng: "101.113506",
      name: "Ipoh",
      description: "Ipoh is my hometown"
    },
    "2": {
      lat: "6.4406",
      lng: "100.1984",
      name: "Kangar"
    },
    "3": {
      lat: "5.4141",
      lng: "100.3288",
      name: "George Town"
    },
    "4": {
      lat: "3.7634",
      lng: "103.2202",
      name: "Kuantan"
    },
    "5": {
      lat: "6.1263",
      lng: "100.3672",
      name: "Alor Setar"
    },
    "6": {
      lat: "1.4927",
      lng: "103.7414",
      name: "Johor Bahru"
    },
    "7": {
      lat: "6.1248",
      lng: "102.2544",
      name: "Kota Bharu"
    },
    "8": {
      lat: "2.1896",
      lng: "102.2501",
      name: "Malacca"
    },
    "9": {
      lat: "2.7259",
      lng: "101.9378",
      name: "Seremban"
    },
    "10": {
      lat: "3.0733",
      lng: "101.5185",
      name: "Shah Alam"
    },
    "11": {
      lat: "5.3296",
      lng: "103.1370",
      name: "Kuala Terengganu"
    },
    "12": {
      lat: "1.5535",
      lng: "110.3593",
      name: "Kuching"
    },
    "13": {
      lat: "5.9804",
      lng: "116.0735",
      name: "Kota Kinabalu"
    },
    "14": {
      lat: "2.9264",
      lng: "101.6964",
      name: "Putrajaya"
    },
    "15": {
      lat: "5.2831",
      lng: "115.2308",
      name: "Labuan"
    },
  },
  labels: {},
  regions: {}
};

function renderTitle(name, img){
  return "<img src='images/" + img + "' class='stateImg'/> " + name + "</span>";
}

function renderBody(array){
    console.log(array)
    var html = ''
    
    for(var i=0; i<array.length; i++){
        var choices = array[i].choices;
        var inputs = '';
        // var answer = array[i].answer.indexOf(' ') > 0 ? array[i].answer.split(' ').join('_') : array[i].answer;
        for(var j=0; j<choices.length; j++){
            // var choiceName = choices[j].indexOf(' ') > 0 ? choices[j].split(' ').join('_') : choices[j];
            inputs += '<span class="inputChoice"><input type="radio" value="' + choices[j] + '" name="choice" class="inputValue" onchange="chooseValue(\'' + choices[j] + '\')"/>' + choices[j] + '</span>';
        }

        html += '<div class="contents">' +
                '<span>' + array[i].title + '</span>' +
                '<img src="images/' + array[i].image + '" class="contentImg"/>'+ inputs +
                '<br/><span class="finalAnswer" style="display: none">Answer: ' + array[i].answer +'</span>' + 
                '<button type="button" class="btn btn-primary buttonSubmitText" onclick="submitAnswer(\'' + array[i].answer + '\')">Submit</button>' + 
                '</div>'
    }

    return html
}

function submitAnswer(answer){
  if(answer && answerChosen === answer){
      $('.finalAnswer').css('color', 'green')
  }else{
      $('.finalAnswer').css('color', 'red')
  }
  $('.finalAnswer').css('display', 'block')
  $('.inputValue').attr('disabled', true)
  $('.buttonSubmitText').text('Next')
}

function chooseValue(answer){
  console.log(answer)
  answerChosen = answer;
}

function renderPahangFunc(){
  console.log('testing')
}