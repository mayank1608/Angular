// Source Code available here:	http://courseware.codeschool.com/shaping-up-with-angularjs/Slides/level01-05.pdf

/*(function(){
	var app = angular.module('name',[ ])
	app.controller('NameController',function(){
		this.myname = fullname;
	});
	var fullname = {
		fname: 'Mayank',
		lname: 'Sharma',
	}
})();*/

(function(){
	'use strict';
	var app = angular.module('store',['store-products'])
	app.controller('StoreController',['$http', function($http){
		var store = this;
		store.products = [];
	    //JavaScript Object Notation file calling
		$http.get('/js/product.json').success(function (data) {
			store.products = data;
        });
    }]);

	//app.controller('StoreController',function() {
	//    this.products = gems;
	//});

	//var gems = [
	//	{
	//		name: 'Book 1',
	//		price: 200.45,
	//		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	//		canPurchase: true, // if false Add to buy button will hide.
	//		soldOut: false, // if true book will not appear in the list.
	//		longdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	//		images:[
	//			{
	//				full:'images/book-1.png',
	//				thumb: 'images/book-05.jpg'
	//			},
    //     		{
	//				full: "images/book.png"
	//			},
	//		],
	//		reviews:[
	//			{ 
	//				stars:5,
	//				body:"I love this product!",
	//				author:"abc@abc.com"
	//			},
	//			{ 
	//				stars:1,
	//				body:"This product sucks",
	//				author:"xyz@xyz.com"
	//			}
	//		]		
	//	},
	//	{
	//		name: 'Book 2',
	//		price: 150.75,
	//		description:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	//		canPurchase: false, // if false Add to buy button will hide.
	//		soldOut: false, // if true book will not appear in the list.
	//		longdesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
	//		images:[
	//			{
	//				full:'images/book.png',
	//				thumb: 'images/book-05.jpg'
	//			},
    //     		{
	//				full: "images/book.png"
	//			},
	//		],
	//		reviews:[
	//			{ 
	//				stars:5,
	//				body:"I love this product!",
	//				author:"aaa@aaa.com"
	//			},
	//			{ 
	//				stars:4,
	//				body:"All over nice",
	//				author:"bbb@bbb.com"
	//			}
	//		]
	//	},
	//	{
	//		name: 'Book 3',
	//		price: 175.25,
	//		description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
	//		canPurchase: true, // if false Add to buy button will hide.
	//		soldOut: false, // if true book will not appear in the list.
	//		longdesc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',	
	//		reviews:[
	//			{ 
	//				stars:3,
	//				body:"I love this product!",
	//				author:"qwe@qwe.com"
	//			},
	//			{ 
	//				stars:1,
	//				body:"Packaging not good",
	//				author:"asd@asd.com"
	//			}
	//		],		
	//	},
	//];
	
})();