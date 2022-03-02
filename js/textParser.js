// This is called from main.js

function parserStart() {
    // This is used to focus on the textbox whenever the website fully loads.
    usrInput.focus();

    // Listen to the text input
    usrInput.addEventListener("keyup", function(event) {
        event.preventDefault();

        // Actually does stuff when user presses enter key
        if (event.keyCode === 13) {
            // Read user input
            var input = usrInput.value.toLowerCase();
            var words = input.split(" ");

            // Grab our command word and the request
            var command = words[0];
            var request = "";

            // Put our request back into a proper string
            for (let i = 1; i < words.length; i++) {
                request += words[i] + " ";
            }
            request = request.trim();

            // Run the command
            runCommand(command, request);

            usrInput.value = "";
        }
    });
}