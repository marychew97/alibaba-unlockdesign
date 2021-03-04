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
      description: "default",
      color: "#f29400",
      hover_color: "default",
      url: "default"
    },
    MYS1139: {
      name: renderTitle('Pulau Pinang', 'penang.png'),
      color: '#2e3194'
    },
    MYS1140: {
      name: renderTitle('Kedah', 'kedah.png'),
      color: '#ed1e79'
    },
    MYS1141: {
      name: renderTitle('Perlis', 'perlis.png'),
      color: '#0071bd'
    },
    MYS1143: {
      name: renderTitle('Johor', 'johor.png'),
      color: "#f8931f"
    },
    MYS1144: {
      name: renderTitle('Kelantan', 'kelantan.svg'),
      color: "#803789"
    },
    MYS1145: {
      name: renderTitle('Melaka', 'melaka.svg'),
      color: "#803789"
    },
    MYS1146: {
      name: renderTitle('Negeri Sembilan', 'negerisem.png'),
      color: "#3ab54a"
    },
    MYS1147: {
      name: renderTitle('Pahang', 'pahang.png'),
      description: '',
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
      color: "#0071bd"
    },
    MYS1187: {
      name: renderTitle('Sarawak', 'sarawak.png'),
      color: "#803789"
    },
    MYS4831: {
      name: renderTitle("Federal Territory of Kuala Lumpur", 'kualalumpur.png'),
      color: "#fd940f"
    },
    MYS4832: {
      name: renderTitle("Federal Territory of Putrajaya", 'putrajaya.png'),
      color: "#e31370"
    },
    MYS4833: {
      name: renderTitle("Federal Territory of Labuan", 'labuan.png'),
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
  return "<img src='images/" + img + "' class='stateImg'/> " + name;
}

function renderBody(array){
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
                '<button type="button" class="btn btn-primary buttonText" onclick="submitAnswer(' + array[i].answer + ')">Submit</button>' + 
                '</div>'
    }
    return html
}

function renderPahangFunc(){
  console.log('testing')
}