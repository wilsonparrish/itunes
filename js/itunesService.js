var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
 
    this.getArtist = function(artist){
    	var deferred = $q.defer();
    	$http({
    		method: 'JSONP',
    		url:'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    	}).then(function(response){
    		var myFinalArray = [];
    		var songs = response.data.results;
    		for(var i = 0; i < songs.length; i++){
                var temp = {};
                temp.AlbumArt = songs[i].artworkUrl60;
                temp.Artist = songs[i].artistName;
                temp.Collection = songs[i].collectionName;
                temp.CollectionPrice = songs[i].collectionPrice;
                temp.Play = songs[i].previewUrl;
                temp.Type = songs[i].kind;
				temp.SongName = songs[i].trackName;
                myFinalArray.push(temp);
                // myFinalArray.push(
                //     AlbumArt: songs[i].artworkUrl30,
                //     Artist: songs[i].artistName,
                //     Collection: songs[i].collectionName,
                //     CollectionPrice: songs[i].collectionPrice,
                //     Play: songs[i].previewUrl,
                //     Type: songs[i].kind,
                //     SongName: songs[i].trackName
                // );
    		}
        console.log(songs);
        console.log(myFinalArray);
	    deferred.resolve(myFinalArray);
	    deferred.reject("YOU SCREW UP!");
        });
	return deferred.promise;
    };
});