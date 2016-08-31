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
			soldOut: true
		},
		{
			name: 'Bloodstone',
			price: '5.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true
		},
		{
			name: 'Zircon',
			price: '3.95',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsum, iusto voluptates laudantium quam et repellendus facilis tenetur quasi ea, doloremque veritatis velit in, laboriosam quibusdam vero incidunt ipsam voluptatum.',
			canPurchase: false,
			soldOut: true
		}	
	];

	var app = angular.module('gemStore', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
})();
