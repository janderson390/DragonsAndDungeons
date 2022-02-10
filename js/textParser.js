// This is called from main.js
function parseStart() {
    // This is used to focus on the textbox whenever the website fully loads.
    usrInput.focus();

    // Description of the first room will go here
    usrOutput.append("You awaken in a dust-covered cell, surrounded by skeletons in shackles.");

    // Listen to the text input
    // This event listener is fired when the user presses enter
    usrInput.addEventListener("keyup", function(event) {
        event.preventDefault();

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
            request.trim();

            // Run the command
            runCommand(command, request);
        }
    });
}