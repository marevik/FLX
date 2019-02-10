if (confirm ("Do you want to play a game?")){

    let rangeMultiplier = 2;
	let maxAttempts = 3;
	let prizeMultiplier = 3;
    let userNumber, prizeStroke, anyNumber, attempts;
    
	do {
		let maxPrize = 10;
		let totalPrize = 0;
        let Range = 5;
        
		do {
			anyNumber = Math.round(Math.random() * Range);
            attempts = maxAttempts;
            
			for (attempts; attempts > 0; attempts--) {
				prizeStroke = Math.floor(maxPrize / Math.pow(2, maxAttempts - attempts));
				userNumber = parseInt(prompt(
                    `Enter a number from 0 to ${Range}\n` +
					`Attempts left: ${attempts}\n` +
					`Total prize: ${totalPrize}$\n` +
					`Possible prize on current attempt: ${prizeStroke}$`
                ));
                
				if (userNumber === anyNumber) {
					totalPrize += prizeStroke;
					maxPrize *= prizeMultiplier;
					Range *= rangeMultiplier;
					break;
				}
            }
            
			if (attempts == 0) {
				break;
			}
		} while (confirm(`"Congratulation! Your prize is: "${totalPrize}$ "Do you want to continue?"`));
        alert(`"Thank you for a game. Your prize is: "${totalPrize}$`);
        
	} while (confirm("Do you want to play a game again?"));

} else {
    alert("You did not become a millionaire, but can.")
}