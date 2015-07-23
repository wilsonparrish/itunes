var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){
 
  $scope.gridOptions = { 
        data: 'songData',
        height: '110px',
        sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
        columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'SongName', displayName: 'Song Title'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
        ]
    };
 
    $scope.getSongData = function(){
        itunesService.getArtist($scope.artist)
            .then(function(serviceResponse){
                $scope.songData = serviceResponse;
                console.log(serviceResponse);
            })
    }; 
});




