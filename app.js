//PLAN of steps to do 
$(function() {

    //STEP 1 : get the data from API youtube 
    function getData() {
        var url = 'https://www.googleapis.com/youtube/v3/search';
        var params = {
            part: 'snippet',
            key: 'AIzaSyCQQNC20CuEMQVuJSe-NVyZ9NXZHUbWlgc',
            q: 'cats', //searchTerm here
            maxResults: 10
        };

        $.getJSON(url, params, function(data) {
            console.log(data);
        });
    }

    getData();
    
    function showData(){
        var html = '';
        $.each(data, function(index, value) {
            html = '<img src="' + value.snippet.thumbnails.high.url + '" class="col-xs-12 col-md-4 img-responsive">'
            $("#resultsContainer").append(html);
        });
    }

});


//STEP 2 : Analize the API Data  

// STEP 3 : Show/render it to HTML 

//STEP 4 : Work with design