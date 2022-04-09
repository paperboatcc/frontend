/*
	-> Name: debugger.js
	-> Description: Scripts and functions to help in debugging
	-> Resource: /src/js/debugger.js
	-> Licensing: GPLv3 | © 2022, Fasm.ga
*/


function debug(
	expr,
	then =(response, error)=> {}
) {
	let result, error;
	try {
		// 1— Evaluate the expression. Assigns the value to the result variable. If
		//                             the operation completes successfully with no
		//                             errors, jump to the finally block.
		result = eval(expr);
	} catch (e) {
		//                             If an error is thrown, catch it and store it
		//                             in the error variable.
		error = e;
	} finally {
		// 2— Call the handler function, with the proper arguments.
		then(result, error);
	}
}