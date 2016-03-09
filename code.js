(function($) {

	var array = [];
	for(var i = 0; i < 100; i++) {
		array[array.length] = Math.floor((Math.random() * 100) + 1);

	
	}

console.log(array);

})(jQuery);

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

