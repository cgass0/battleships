// Used for start of new game, will popup on load

// Declare name variable for player as global 
let playerName;


export default function enterPlayer() {

    // Create the popup container element
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popupContainer';
    popupContainer.classList.add('popup-container');
    document.body.appendChild(popupContainer);

    // Create the popup content element
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContainer.appendChild(popupContent);

    // Create the heading element
    const heading = document.createElement('h2');
    heading.textContent = 'Enter Your Name';
    popupContent.appendChild(heading);

    // Create the input element
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'nameInput';
    nameInput.placeholder = 'Your Name';
    popupContent.appendChild(nameInput);

    // Create the next button element
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.id = 'nextBtn';
    popupContent.appendChild(nextBtn);

    // Add event listener to the next button
    nextBtn.addEventListener('click', () => {
        playerName = nameInput.value; // Assign the input value to the playerName variable
        popupContainer.style.display = 'none';
    });

    // Add the CSS styles
    const styles = `
        .popup-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        }

        .popup-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        }

        .popup-content h2 {
        margin-top: 0;
        }

        .popup-content input,
        .popup-content button {
        margin-top: 10px;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}

// Export playerName variable
export {playerName};