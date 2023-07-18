/*задача 1*/
/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function evenOrOdd(number) {
	if (number % 2 === 0){
	  return "Even";
	} else { return "Odd"}
  }
  /*================================================= */
  
  /*задача 2 */
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){
	let q = name.split(' ', 2)
	let p = q.shift().split ('', 1)
	let m = q.shift().split ('', 1)
	let i = (p + "." + m).toUpperCase()
	return i
	}
	/*======================================= */
	// способ как еще можно решить
	function abbrevName(name){
		var nameArray = name.split(" ");
		return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
	  }
/*==============================================================================*/

	  /*задача 3 */
	  function updateLight(current) {
		return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
	  } // просто функция по смене цвета
	  /*================================================================================ */

	  /*задача 4*/
	  /*Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take. */

function enough(cap, on, wait) {
	return  ((cap - on) - wait) === 0 ? 0 :  (cap - on) - wait < 0 ? wait - (cap - on) : 0;
   }
   // другой вариант 
   function enough(cap, on, wait) {
	return (on+wait > cap) ? on+wait-cap : 0;
  }
   /*===================================================================================================== */
   