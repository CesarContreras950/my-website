// Runs once the page has loaded (the script tag is at the end of <body>).
const main = () => {
    console.log("App started!");

    const message = document.querySelector('#message');
    const charCount = document.querySelector('#char-count');
    const submitButton = document.querySelector('.submit-Button');

    if (!message || !charCount || !submitButton) {
        console.error("Message box, character counter, or Submit button not found!");
        return;
    }

    const maxLength = message.maxLength;

    // Keep the "0 / 200 characters" counter in sync with what the user types.
    const updateCount = () => {
        charCount.textContent = `${message.value.length} / ${maxLength} characters`;
    };
    message.addEventListener('input', updateCount);
    updateCount();

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Stops the page from reloading
        const text = message.value.trim();
        if (text === '') {
            charCount.textContent = "Please write a message first!";
            return;
        }
        console.log("Message submitted:", text);
        message.value = '';
        charCount.textContent = "Thanks for your message!";
    });
};

// Call the function so it actually runs
main();
