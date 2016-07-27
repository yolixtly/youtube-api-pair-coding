//PLAN of steps to do 
$(function() {

    //STEP 1 : get the data from API youtube 
    function getData() {
        var url = 'https://www.googleapis.com/youtube/v3/search/';
        var params = {
            part: 'snippet',
            key: 'AIzaSyCQQNC20CuEMQVuJSe-NVyZ9NXZHUbWlgc',
            q: 'cats', //searchTerm here
            maxResults: 10
        };

        $.getJSON(url, params, function(data) {
        	//STEP 2 : Analize the API Data  
        	// alert('hi');
           console.log(data);
            showData(data);
        });
    }

    // on click call this function
  
getData();

    // STEP 3 : Show/render it to HTML 
    function showData(result){
        var html = '';
        console.log('out of loop: ' + result.items[0].snippet.thumbnails.high.url);
        $.each(result, function(value, key) {
        	console.log('inside loop: ' + value.snippet.thumbnails.high.url);
            // html += '<img src="' + value.snippet.thumbnails.high.url  + '" class="col-xs-12 col-md-4 img-responsive">'
            // $("#resultsContainer").append(html);
        });
        // console.log(html);
    }

    //STEP 4 : Create an Event handler 
    //that on click calls our data and Show Data functions

   $('#submit').on('click', function(e){
   		e.preventDefault;
   		var searchTerm = $('#searchTerm').val();
   		alert(searchTerm);
   		// getData(searchTerm);
   });

});


//STEP 5 : Work with design






