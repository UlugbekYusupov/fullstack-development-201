(function() {
	function getInput(message, argvIndex) {
		let raw;
		if (typeof prompt === 'function') {
			raw = prompt(message);
		} else if (typeof process !== 'undefined') {
			// Node fallback: read from process.argv (argvIndex expected to be 2..5)
			raw = process.argv[argvIndex] !== undefined ? process.argv[argvIndex] : '';
		} else {
			raw = '';
		}

		const num = Number(raw);
		return isNaN(num) ? 0 : num;
	}

	// Declare budget variable
	let totalBudget = getInput('Enter total budget:', 2);

	// Take three expenses
	let expense1 = getInput('Enter expense 1:', 3);
	let expense2 = getInput('Enter expense 2:', 4);
	let expense3 = getInput('Enter expense 3:', 5);

	const sumExpenses = expense1 + expense2 + expense3;
	const remaining = totalBudget - sumExpenses;

	// Format to two decimal places
	const formattedRemaining = remaining.toFixed(2);
	const formattedExpenses = sumExpenses.toFixed(2);
	const formattedBudget = totalBudget.toFixed(2);

	if (remaining < 0) {
		console.log(`Warning: You have overspent by ${Math.abs(remaining).toFixed(2)}.`);
		console.log(`Budget: ${formattedBudget}, Expenses: ${formattedExpenses}, Overspent: ${Math.abs(remaining).toFixed(2)}`);
	} else {
		console.log(`Remaining budget: ${formattedRemaining}`);
	}
})();

