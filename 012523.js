//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops) {
    let total = 0;
	busStops.forEach((stop) => {
		total += stop[0];
		total -= stop[1];
	});
	return total;
}