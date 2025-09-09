// My first JavaScript file!
// This is a comment - it explains what the code does

// Counter functionality
let clickCount = 0;

// Get the button and count display
const clickButton = document.getElementById('clickBtn');
const countDisplay = document.getElementById('count');
const resetButton = document.getElementById('resetBtn');

// Add event listener to the click button
clickButton.addEventListener('click', function() {
    clickCount = clickCount + 1;
    countDisplay.textContent = clickCount;
    
    // Change message based on clicks
    if (clickCount === 1) {
        clickButton.textContent = 'Click Me Again!';
    } else if (clickCount === 5) {
        clickButton.textContent = 'Wow, 5 clicks!';
    } else if (clickCount === 10) {
        clickButton.textContent = 'You\'re on fire! 🔥';
    }
});

// Reset button functionality
resetButton.addEventListener('click', function() {
    clickCount = 0;
    countDisplay.textContent = clickCount;
    clickButton.textContent = 'Click Me!';
});

// Color changer function
function changeColor() {
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightcoral', 'white'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorText').textContent = 'Current color: ' + randomColor;
}

// Show/Hide functionality
const toggleButton = document.getElementById('toggleBtn');
const secretMessage = document.getElementById('secretMsg');
let isHidden = true;

toggleButton.addEventListener('click', function() {
    if (isHidden) {
        secretMessage.style.display = 'block';
        toggleButton.textContent = 'Hide Secret Message';
        isHidden = false;
    } else {
        secretMessage.style.display = 'none';
        toggleButton.textContent = 'Show Secret Message';
        isHidden = true;
    }
});

// Form validation
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting normally
    
    // Get the input values
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;
    const email = document.getElementById('userEmail').value;
    
    // Hide all error messages first
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('ageError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    
    let hasError = false;
    
    // Check if name is empty
    if (name === '' || name.length < 2) {
        document.getElementById('nameError').style.display = 'inline';
        hasError = true;
    }
    
    // Check age
    if (age < 1 || age > 100) {
        document.getElementById('ageError').style.display = 'inline';
        hasError = true;
    }
    
    // Simple email check
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').style.display = 'inline';
        hasError = true;
    }
    
    // If no errors, show success message
    if (!hasError) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<h3 style="color: green;">Success! 🎉</h3><p>Hello ' + name + '! You are ' + age + ' years old and your email is ' + email + '</p>';
        resultDiv.style.display = 'block';
        
        // Clear the form
        form.reset();
    }
});
