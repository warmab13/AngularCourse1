(function(){

	var gem = {
		name: 'Azurite',
		price: '2.95',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
		canPurchase: false,
		soldOut: true
	};

	var gems = [
		{
			name: 'Azurite',
			price: '2.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true,
			images: [
				{id:0, url:'img/gem-01.gif'},
				{id:1, url:'img/gem-02.gif'},
				{id:2, url:'img/gem-03.gif'}
			],
			reviews: [
				{stars: 5, body: 'I love this product', author:'alonso@gmail.com'},
				{stars: 5, body: 'I love this product', author:'alonso@gmail.com'}
			]
		},
		{
			name: 'Bloodstone',
			price: '5.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true,
			images: [
				{id:0, url:'img/gem-04.gif'},
				{id:1, url:'img/gem-05.gif'},
				{id:2, url:'img/gem-06.gif'}
			],
			reviews: [
				{stars: 5, body: 'I love this product', author:'alonso@gmail.com'},
				{stars: 5, body: 'I love this product', author:'alonso@gmail.com'}
			]
		},
		{
			name: 'Zircon',
			price: '3.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true,
			images: [
				{id:0, url:'img/gem-07.gif'},
				{id:1, url:'img/gem-08.gif'},
				{id:2, url:'img/gem-09.gif'}
			],
			reviews: [
				{stars: 5, body: 'I love this product', author:'alonso@gmail.com'},
				{stars: 5, body: 'I love this product', author:'alonso@gmail.com'}
			]
		}	
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewsController',function(){
      this.review = {};
      this.addReview = function(product){
      	product.reviews.push(this.review);
      	this.review = {};
      }

	});

	/*app.directive('productTitle', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
*/
	app.directive('productTitle', function(){
		return{
			restrict: 'A',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function(){
				this.tab = 1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		}
	});

	app.directive('reviewsDirective', function(){
		return{
			restrict: 'E',
			templateUrl: 'reviews.html',
			controller: function(){
				this.review = {};
			    this.addReview = function(product){
			      	product.reviews.push(this.review);
			      	this.review = {};
			    }
			},
			controllerAs: 'reviewCtrl'
		}
	})



})();
