// (function($) {

// 	var array = [];
// 	for(var i = 0; i < 100; i++) {
// 		array[array.length] = Math.floor((Math.random() * 100) + 1);

	
// 	}

// console.log(array);

// })(jQuery);



// $( document ).ready(function() {
// 	$( "#target" ).click(function(e) {
// 		e.preventDefault();
// 		validation($( "input[name='name']" ).val(), $( "input[name='surname']" ).val());
// 	});
// });

(function($) {
	$("#target").on("click", function(e) {
		e.preventDefault();
		validation($( "input[name='name']" ).val(), $( "input[name='surname']" ).val());
  });
})(jQuery);	

	function validation(value, value2) {
		var array = [];
		for(var i = 0; i < value; i++){
			array[array.length] = Math.floor((Math.random() * 100) + 1);
		}
		if (!value || !value2) {
			alert("Tabulā ir 0 elementu!");
		}
		else {
			array[0] = value2;
		}
	 	console.log(array);
	};


		
	

// var skolens = {
//   tel: "+37122334455",
//   grades: [7,6,3,4],
//   average: function() {
//   	var sum = 0;
    
//     for(var i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
    
//     return sum / this.grades.length;
//   }
// }

