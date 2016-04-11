var controller = angular.module('controller', ['ngSanitize']);

function AppCtrl1($scope, $sce){

	var cocktails = [
	    
	    {
	        'letter':'g',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'drink':'drinks/gibson',
	        'letter':'images/letter_g.png',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn<h1>t want</h1> their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)',
	        'receipe':'gibson.html',
	        'howto':'Prepare the brine by first blanching and pealing the onions. Combine all ingredients except onions and vermouth in a saucepan and simmer for 15 minutes. Pour mixture over onions and add the vermouth. Seal and let sit for 20 days. <br/>Ok, you waited 20 days and resisted the urge to eat your jar of salty spicy onions! Congratulations. To make the perfect gibson combine all ingredients in a mixing glass. Stir well and strain using a julep strainer. Pour into a chilled glass and garnish with one onion and a small cut of rosemary from your brine. Enjoy the brine of your labor!!'
	    }/*,
	    {
	        'letter':'b',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	    	'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },

	    {
	        'letter':'c',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'d',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'e',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'f',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'g',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'.g_block_img',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'h',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'i',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'j',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'k',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'l',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'m',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'n',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn&#96;t want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'o',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	      {
	        'letter':'p',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'q',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'r',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'s',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'t',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'u',
	        'thumbnail_class':'yellow_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	       {
	        'letter':'v',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'w',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    },
	    {
	        'letter':'x',
	        'thumbnail_class':'pink_bg',
	        'thumbnail_odd':'false',
	        'internal_link':'incomplete',
	        'description':'In the heart of Bushwick the Tradesman offers a savory take on the classic gibson. Proprietor Larissa Varges explains that the secret to her perfect gibson is in the onion. She brines white pearl cocktail onions in her unique blend of spices for the perfect bite. Speaking of the presentation Larissa jokes "Who doesn't want their own little onion?" Adding a splash of the brine to the cocktail gives it the soft pink hue and a delightfully salty quality to the palate. She kindly shared her brine recipe with Cocktailphabet over a delicious Sunday brunch by chef Julia Greene(yes, our food stylist)'
	    }*/
	];

	$scope.cocktails = cocktails;

}
