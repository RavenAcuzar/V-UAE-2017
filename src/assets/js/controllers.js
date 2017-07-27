angular.module('starter.controllers', ['ngCordova', 'ngTwitter', 'ngCordovaOauth'])


.controller('MainCtrl', function($rootScope, $location, $scope, $ionicModal, $timeout, $http, $ionicLoading, $stateParams, $ionicPopup, $ionicHistory, $state) {
		$("#countdown").countdown({
                date: "20 september 2016 12:00:00",
                format: "on"
            },

            function () {
                // callback function
            });
})

.controller('VideosListCtrl', function($rootScope, $location, $scope, $ionicModal, $timeout, $http, $ionicLoading, $stateParams, $ionicPopup, $ionicHistory, $state) {
		$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
		var encodedString = 'action=' +
				encodeURIComponent('Video_GetByCategories') +
				'&count=6&category=Highlights&page=1';
				
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
				$scope.myvideos = data;
				$ionicLoading.hide();
			})
			.error(function(data, status, headers, config) {
				$scope.errorMsg = 'Unable to submit form' + status;
				$ionicPopup.alert({
					 title: 'No Internet Connection Detected.',
					 template: ''
				   });
				$ionicLoading.hide();
			})
})

.controller('MerchandiseCtrl', function(Apprsal, $rootScope, $location, $scope, $ionicModal, $timeout, $http, $ionicLoading, $stateParams, $ionicPopup, $ionicHistory, $state) {	
	$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
	$http({
				method: 'POST',
				url: 'http://cums.the-v.net/file.aspx',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
				$scope.mymerchant = data;
				$ionicLoading.hide();
			})
			.error(function(data, status, headers, config) {
				$scope.errorMsg = 'Unable to submit form' + status;
				$ionicPopup.alert({
					 title: 'No Internet Connection Detected.',
					 template: ''
				   });
				$ionicLoading.hide();
			})
	
})

.controller('VideosCtrl', function($rootScope, $location, $scope, $ionicModal, $timeout, $http, $ionicLoading, $ionicPopup,$ionicScrollDelegate) {

	//if a related video is clicked
	$scope.$watch(function () {
		return location.hash
	}, function (value) {
		console.log('url has changed: ' + $location.search()["id"]);
		if ( $location.search()["id"] != undefined) 
		{
			loadData($location.search()["id"]);
			$ionicScrollDelegate.scrollTop();
		}
	});

	var loadData = function(num) {
		$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
		$("#myframe").attr("src","http://players.brightcove.net/3745659807001/67a68b89-ec28-4cfd-9082-2c6540089e7e_default/index.html?videoId="+ $location.search()["id"]);
  
		var encodedString = 'action=' +
				encodeURIComponent('Video_GetDetails') +
				'&idorname=' + num;
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
				$scope.myvideos = data;
				$ionicLoading.hide();
			})
			.error(function(data, status, headers, config) {
				$scope.errorMsg = 'Unable to submit form' + status;
				$ionicPopup.alert({
					 title: 'No Internet Connection Detected.',
					 template: ''
				   });
				$ionicLoading.hide();
			})
	}
	var loadDataRelated = function(num) {
		$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
		
		var encodedString = 'action=' +
				encodeURIComponent('Video_GetRelated') +
				'&count=3' +
				'&id=' + num +
				'&page=1';
				
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
				$scope.myrelateds = data;
				$ionicLoading.hide();
			})
			.error(function(data, status, headers, config) {
				$scope.errorMsg = 'Unable to submit form' + status;
				$ionicPopup.alert({
					 title: 'No Internet Connection Detected.',
					 template: ''
				   });
				$ionicLoading.hide();
			})
	}
	
	loadData($location.search()["id"]);
	loadDataRelated($location.search()["id"]);
})

.controller('NewsListCtrl', function($rootScope, $location, $scope, $ionicModal, $timeout, $http, $ionicLoading, $stateParams, $ionicPopup, $ionicHistory, $state) {
		$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
		var encodedString = 'action=' +
				encodeURIComponent('getOldsNews') +
				'&count=6&page=2&language=en';
				
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
				$scope.mynews = data;
				$ionicLoading.hide();
			})
			.error(function(data, status, headers, config) {
				$scope.errorMsg = 'Unable to submit form' + status;
				$ionicPopup.alert({
					 title: 'No Internet Connection Detected.',
					 template: ''
				   });
				$ionicLoading.hide();
			})
})

.controller('NewsSCtrl', function($rootScope, $location, $scope, $ionicModal, $timeout, $http, $ionicLoading, $stateParams, $ionicPopup, $ionicHistory, $state) {
		$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
		if ( $location.search()["id"] != undefined) 
		{
			$scope.selectedNews = $location.search()["id"];
		}
		var encodedString = 'action=' +
				encodeURIComponent('getOldsNews') +
				'&count=6&page=1&language=en';
				
		$http({
				method: 'POST',
				url: 'http://cums.the-v.net/site.aspx',
				data: encodedString,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data, status, headers, config) {
				angular.forEach(data, function(value, key) {
				  if (data[key].Title == $scope.selectedNews)
				  {
					  $scope.mynews = data[key];
				  }
				});
				$ionicLoading.hide();
			})
			.error(function(data, status, headers, config) {
				$scope.errorMsg = 'Unable to submit form' + status;
				$ionicPopup.alert({
					 title: 'No Internet Connection Detected.',
					 template: ''
				   });
				$ionicLoading.hide();
			})
})
// pop-up controller
.controller('WelcomCtrl', function(Apprsal, $scope, $ionicPopup) {
  Apprsal.userSelectedData().firstTimeLayar = 1;
  $scope.data = {}

  $scope.openPopup = function() {
      var myPopup = $ionicPopup.show({
        title: 'WELCOME HOME DREAMER!',
		content: 'Welcome home, dreamer! As we prepare to unravel V-UAE 2016, which is expected to be yet another unbelievable event in network marketing history, allow us to help you gear up for such an amazing life-changing opportunity. Here, you get to know everything and anything about #VCON16--from those sought-after tickets, world-renowned speakers, performers, and activities to look forward to, the sights and sounds of Dubai, and everything else that will make your V-Con experience truly remarkable. You better brace yourself, the V-Con magic is about take over.',
        scope: $scope,
        buttons: [
          { text: 'Okay' }
       ]
  });
    
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
  }
  
  $scope.openPopup();

})

.controller('LocMapCtrl', function($scope,$ionicGesture, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, $ionicSideMenuDelegate) {
	
	var initZoom=0.3;
	$scope.$on('$ionicView.enter',function(){
		$ionicSideMenuDelegate.canDragContent(false);
      $ionicScrollDelegate.$getByHandle('setInitialZoom').zoomBy(initZoom);
	});
	$scope.$on('$ionicView.leave',function(){
		$ionicSideMenuDelegate.canDragContent(true);
	});
})

// downloadable controller
.controller('DownloadWallpaperCtrl', function($cordovaFileTransfer, $scope, $ionicLoading,$ionicPopup,$interval) {
				
	var filename = 'vuae2016_wallpaper.jpg';
	var targetPath = 'MyFiles/' + filename;
	
	$scope.getImage = function(){
		var url = "http://the-v.net/images/default-source/vcon16/dl-1080x1920.jpg?sfvrsn=2";
			MyFiles = cordova.file.externalRootDirectory + '/' + filename;
			
			$cordovaFileTransfer.download(url,MyFiles,{}, true).then(function(result){
		
		$ionicLoading.show({
			  template: '<ion-spinner></ion-spinner><br/>Loading...'
			});
		$interval(function(){
		$ionicLoading.hide()},3000,0);
				var alertPopup = $ionicPopup.alert({
							title: 'Download Successful!',
							template: 'Wallpaper saved in '+ targetPath
							});
			}, function(error){
				var alertPopup = $ionicPopup.alert({
							title: 'error!',
							template: 'Error occured please check your connection'
							});
			}, function(progress){
				
			});
			/*
		ionic.Platform.ready(function(){
			var url = "http://the-v.net/images/default-source/vcon16/dl-1080x1920.jpg?sfvrsn=2";
			MyFiles = cordova.file.externalRootDirectory + '/' + filename;
			
			$cordovaFileTransfer.download(url,MyFiles,{}, true).then(function(result){
				var alertPopup = $ionicPopup.alert({
							title: 'Download Successful!',
							template: 'Wallpaper saved in '+ targetPath
							});
			}, function(error){
				var alertPopup = $ionicPopup.alert({
							title: 'error!',
							template: 'Error occured please check your connection'
							});
			}, function(progress){
				
			});
		});
		*/
	}
})

// faq controller
.controller('FaqCtrl', function($scope) {
  $scope.items = [{
      title: 'How do I purchase a ticket?',
      text: 'To buy a ticket, CLICK HERE.'
    },{
      title: 'What are the available payment terms? ',
      text: 'Currently, you can pay with cash or credit card (Visa and MasterCard) '
    },{
      title: 'What to bring? ',
      text: 'Going to V-Con? Here are 5 important things you need to bring: \n 1. During registration, bring one (1) valid ID and copy of the confirmation letter that will be sent to you via email right after the purchase of your ticket. \n 2. Enough pocket money to last for 5 days, which you may spend on food, drinks, transportation, V-Con merchandise, souvenirs, etc. \n 3. Clothes good for 5 days. As it is expectedly warm in Dubai, UAE around September, make sure to bring extra shirts or towels. \n 4.	Bring a mobile phone with you as well to make sure that you can keep in touch with your team and loved ones. Don’t forget to bring a powerbank as well to make sure you can recharge your phone and other gadgets anytime.  \n 5. Take a camera with you to make your precious V-Con memories last, and have something you can show to your family and future prospects when you go back home.  '
    },{
      title: 'Will there be tickets for sale on the event day itself? ',
      text: 'Yes. Only transactions made thru cash and credit card will be accommodated. '
    },{
      title: 'Will there be single-day tickets available? ',
      text: ' No. The 5-day program we prepared for you is something that should be attended from Day 1 to 5 for a complete life-changing experience. It is a comprehensive, holistic event with an action-packed line-up of activities that are highly essential for you business. '
	  
  }];

  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

})

.controller('WhatsNewCtrl', function($scope, $ionicPlatform, $twitterApi, $cordovaOauth,$ionicLoading,$state,$interval) {
	
	
	$scope.btnTwitterAuthenticate = true;
	
	
	$ionicLoading.show({
		  template: '<ion-spinner></ion-spinner><br/>Loading...'
		});
	$interval(function(){
		
	$ionicLoading.hide()},3000,0);
	
	//twitter-plugin
	var twitterKey = "STORAGE.TWITTER.KEY";
	var clientId = 'slKNiOKJuBiSl7XbsY9XsmNGT';
	var clientSecret ='vt24uNlxAFXYmeflrQH1TLPybYc2Q62c46gBW413sp8VwfbbSu';
	
	var myToken = '761365525142212609-cs0DwGDIuuaQMUQylAsGoHaLvt1K4Sd';
	
	$scope.tweet ={};
	/*
	$ionicPlatform.ready(function(){
		myToken = JSON.parse(window.localStorage.getItem(twitterKey));
		
		if(myToken==='' || myToken===null)
		{
			$cordovaOauth.twitter(clientId,clientSecret).then(function(succ){
				myToken = succ;
				window.localStorage.setItem(twitterKey, JSON.stringify(succ));
				$twitterApi.configure(clientId, clientSecret, succ);
				
				$scope.showHomeTimeline();
			}, function(error){
				alert(error);
			})
		}
		else
		{
			$twitterApi.configure(clientId, clientSecret, myToken);
			$scope.showHomeTimeline();
		}
	});
	*/
	
	$scope.btnAuthenticate = function(){
		myToken = JSON.parse(window.localStorage.getItem(twitterKey));
		
		if(myToken==='' || myToken===null)
		{
			$cordovaOauth.twitter(clientId,clientSecret).then(function(succ){
				myToken = succ;
				window.localStorage.setItem(twitterKey, JSON.stringify(succ));
				$twitterApi.configure(clientId, clientSecret, succ);
				
				$scope.showHomeTimeline();
			}, function(error){
				alert(error);
			})
		}
		else
		{
			$twitterApi.configure(clientId, clientSecret, myToken);
			$scope.showHomeTimeline();
		}
	}
	$scope.showHomeTimeline = function(){
		
		$scope.btnTwitterAuthenticate = false;
		$twitterApi.getUserTimeline({screen_name: 'thev_official'}).then(function(data){
			$scope.home_timeline = data;
		});
	};
	
	$scope.doRefresh = function(){
		$scope.btnTwitterAuthenticate = false;
		$scope.showUserTimeline({screen_name: 'thev_official'});
		$scope.$broadcast('scroll.refreshComplete');
	};
	
	$scope.correctTimestring = function(string){
		return new Date(Date.parse(string));
	};
	//end of twitter-plugin
	
	
})
.controller('TicketCtrl', function($scope,$http) {
	
})
// splash-no controller
.controller('SplashVideoCtrl', function($scope,$ionicHistory) {
	$scope.myGoBack = function() {
	$("#myframe").attr("src","");
    $ionicHistory.goBack();
  };
})
// pop-up-logo panel controller
.controller('PopupCtrl', function($scope, $timeout, $q, $ionicPopup) {

  
          $scope.showA = function() {
            $ionicPopup.alert({
              title: 'Taking Flight',
              content: 'One of the main elements of this year’s V-Con logo is the pair of wings that is central to the over-all design. The wings signify the courage that will take our lives to new heights by embarking on an unbelievable journey that is V-UAE 2016.'
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
		  
		  $scope.showB = function() {
            $ionicPopup.alert({
              title: 'Burning Passion',
              content: 'Enveloped in the pair of wings is a fiery volcano that stands for our constant desire to succeed and reach our dreams. With a passion ablaze with commitment and determination, there shouldn’t be a dream a too big that cannot be achieved. Moreover, it also sheds a light upon a path that will lead to a great story awaiting to be told and shared to many more. With its brightness, its rays thus reach out to depths and corners around the world that deserve enlightenment.'
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
		  
		  $scope.showC = function() {
            $ionicPopup.alert({
              title: 'Energy in Harmony',
              content: 'As warriors from different parts of the world come together for the most unbelievable event in network marketing history, the V-Con logo serves as a unifying symbol. The green hue stands for harmony and growth that V-Con aims for, while fostering a happy energy that is represented by the golden yellow core. The scroll-like features of the words Evolve. Empower. Enrich., also present an image of something being unraveled—a beautiful story of becoming and coming together as one at V-UAE 2016.'
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
		  
		  $scope.showSourceEat = function() {
            $ionicPopup.alert({
              title: 'Sources:',
              content: 'http://www.dubai.ae/en/AboutDubai/Pages/default.aspx <br>http://www.huffingtonpost.com/2013/12/04/dubai-expo-2020_n_4379078.html'
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
		  
		  $scope.showSourceTalk = function() {
            $ionicPopup.alert({
              title: 'Sources:',
              content: 'www.penang-traveltips.com'
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
		  
		  $scope.showSourceCelebrate = function() {
            $ionicPopup.alert({
              title: 'Sources:',
              content: 'http://www.visitdubai.com/en/discover/world-famous-attractions '
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
		  
		  $scope.showSourceTalk = function() {
            $ionicPopup.alert({
              title: 'Sources:',
              content: 'http://www.dubai.ae/en/aboutdubai/Pages/DubaiAttractions.aspx <br>http://www.visitdubai.com/en/discover/world-famous-attractions '
            }).then(function(res) {
              console.log('Test Alert Box');
            });
          };
  
  
  
});
