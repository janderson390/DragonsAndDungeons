function main() {
    let usrInput = document.querySelector("#usrInput");
    let usrOutput = document.querySelector(".displayTxt p");
    let stats = document.querySelectorAll('.stats');
    let text = {
        text1:"You awaken in a dust-covered cell, surrounded by skeletons in shackles. ",
        text2: "You took something. ",
        text3: "You dropped something. ",
        text4: "You flee from battle. "
    }

    //Stats generator
    for(let i = 0; i < stats.length; i++) {
        let statsGen = Math.floor((Math.random() * 20) + 1);
        stats[i].innerHTML = statsGen;
    }


    //This is used to focus on the textbox whenever the website fully loads.
    usrInput.focus();

    usrOutput.append(text.text1);
    usrInput.addEventListener('keyup', function(e) {
        e.preventDefault();

        if(e.keyCode === 13) {
            commands = usrInput.value.toLowerCase();

            //Commands
            switch (commands) {
                case "take":
                    usrOutput.append(text.text2);
                    break;
                case "drop":
                    usrOutput.append(text.text3);
                    break;

                case "flee":
                    usrOutput.append(text.text4);
                    break;
                default:
                    usrOutput.append("Command Invalid. ")
            }
        }
    })
}


window.onload = main;