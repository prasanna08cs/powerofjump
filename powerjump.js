
// Function to calculate the maximum power of the jump 
 function powerOfJump( s) 
{ 
	// Initialize the count with 1 
	let count = 1; 
	let max_so_far = 1; 
	
	// Find the character at last index 
	let ch = s[s.length - 1]; 
	
	// Start traversing the string 
	for (let i = 0; i < s.length; i++) 
	{ 
		// Check if the current char is equal 
		// to the last character 
		if (s[i] == ch) 
		{ 
			// max_so_far stores maximum value of 
			// the power of the jump from starting 
			// to ith position 
			if (count > max_so_far) { 
				max_so_far = count; 
				
			} 
			// Reset the count to 1 
			count = 1; 
			
		} 
		// Else, increment the number of jumps/count 
		else
		count++; 
		
	} 
	// Return the maximum number of jumps 
	return max_so_far; 
	
} 

// Driver code 

	let st = "101111"; 
	console.log(powerOfJump(st)); 
	

// This code is contributed by ash264 
