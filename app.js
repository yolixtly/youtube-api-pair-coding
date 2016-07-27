//PLAN of steps to do 
$(function() {

    //STEP 1 : get the data from API youtube 
    function getData(searchTerm) {
        var url = 'https://www.googleapis.com/youtube/v3/search/';
        var params = {
            part: 'snippet',
            key: 'AIzaSyCQQNC20CuEMQVuJSe-NVyZ9NXZHUbWlgc',
            q: searchTerm,
            maxResults: 10
        };

        $.getJSON(url, params, function(data) {
            //STEP 2 : Analize the API Data  
            console.log(data.items);
            showData(data.items);
        });
    }

    // STEP 3 : Show/render it to HTML 
    function showData(result) {
        var html = '';

        $.each(result, function(index, value) {
            html += '<a href="https://www.youtube.com/watch?v='+ value.id.videoId + ' "> <img src="' + 
            value.snippet.thumbnails.high.url + '" class="col-xs-12 col-md-4 img-responsive"></a> <h5>'+ 
            value.snippet.title +'</h5>';
        });
        $("#resultsContainer").append(html);
    }

    //STEP 4 : Create an Event handler 
    //that on click calls our data and Show Data functions

    $('form').submit(function(e) {
        e.preventDefault();
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        getData(searchTerm);
        $('#searchTerm').val('');

        //alert(searchTerm);

    });

});
//STEP 5 : Work with design