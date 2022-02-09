const textElement = document.getElementById('location')
const optionButtonsElement = document.getElementById('option-buttons')



function main() {
    // Variables
    let state = {}

    let usrInput = document.querySelector("#usrInput");
    let usrOutput = document.querySelector(".display p");
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

    // location using button grid
    function location() {
        state = {}
        showTextNode(1)

    }

    
    function showTextNode(textNodeIndex) {
        const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
        textElement.innerText = textNode.text
        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                optionButtonsElement.appendChild(button)
            }
        })
    }

    function showOption(option) {
        return true
    }

    function selectOption(option) {
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
            return location()
          }
          
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId) 
    }

    const textNodes = [
        {
            id: 1,
            text: 'Located in Cell',
            options: [
                {
                    text: 'Galley',
                    nextText: 2
                },
                {
                    text: 'Chapel',
                    nextText: 3
                },
                {
                    text: 'Armory',
                    nextText: 4
                },
                {
                    text: 'Great Hall',
                    nextText: 5
                }
            ]
        },
        {
            id: 2,
            text: 'The Galley is classically scary, mold on the ceiling and bugs in the sink',
            options: [
                {
                    text: 'Cell',
                    nextText: 1
                },
                {
                    text: 'Chapel',
                    nextText: 3
                },
                {
                    text: 'Armory',
                    nextText: 4
                },
                {
                    text: 'Great Hall',
                    nextText: 5
                }
            ]
        },
        {
            id: 3,
            text: 'A quaint Chapel, pray to your god(s) ',
            options: [
                {
                    text: 'Cell',
                    nextText: 1
                },
                {
                    text: 'Galley',
                    nextText: 2
                },
                {
                    text: 'Armory',
                    nextText: 4
                },
                {
                    text: 'Great Hall',
                    nextText: 5
                }
            ]
        },
        {
            id: 4,
            text: 'The Armory houses weapons and supplies',
            options: [
                {
                    text: 'Cell',
                    nextText: 1
                },
                {
                    text: 'Galley',
                    nextText: 2
                },
                {
                    text: 'Chapel',
                    nextText: 3
                },
                {
                    text: 'Great Hall',
                    nextText: 5
                }
            ]
        },
        {
            id: 5,
            text: 'There is so much room for activities in the Great Hall',
            options: [
                {
                    text: 'Cell',
                    nextText: 1
                },
                {
                    text: 'Galley',
                    nextText: 2
                },
                {
                    text: 'Chapel',
                    nextText: 3
                },
                {
                    text: 'Armory',
                    nextText: 4
                }
            ]
        },




    ] // end textNode

    location()


}


window.onload = main;