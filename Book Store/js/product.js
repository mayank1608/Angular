(function(){

	/*app.controller("PanelController", function(){
		this.tab = 1;
		
		this.selectTab=function(setTab){
			this.tab = setTab;
		};
		this.isSelected=function(checkTab){
			return this.tab === checkTab;
		};
	});*/
	
	var app = angular.module('store-products',[])

	app.controller("ReviewController", function(){
		this.review ={};
		
		this.addReview =function(product){
			product.reviews.push(this.review);
			this.review ={};
		};
	});
	
	app.directive('productDescription', function(){
		return{ 
			restrict: 'EA',
			templateUrl:'product-description.html',
		};
	});
	
	app.directive('productTabs', function(){
		return{ 
			restrict: 'EA',
			templateUrl:'product-tabs.html',
			controller:function(){
					this.tab = 1;
		
					this.selectTab=function(setTab){
						this.tab = setTab;
					};
					
					this.isSelected=function(checkTab){
						return this.tab === checkTab;
					};
			},
			controllerAs:('panel'),
		};
	});
	
})();