function clickButton() {
  // Set the key for storing clicks in local storage
  const storageKey = 'clicks';

  // Get the current date
  const today = new Date();

  // Get the clicks object from local storage
  let clicks = localStorage.getItem(storageKey);

  // If the clicks object is not stored as an object, convert it from a string
  if (clicks && typeof clicks === 'string') {
    clicks = JSON.parse(clicks);
  }

  // Check if the user has already clicked the button today
  if (clicks && clicks[today.toDateString()]) {
    // If the user has already clicked the button today, show an error message
    alert('You can only click the button once per day!');
  } else {
    // If the user has not clicked the button today, store the click in local storage

    // Check if the clicks object exists
    if (clicks) {
      // If the clicks object exists, add the current date to the object
      clicks[today.toDateString()] = true;
    } else {
      // If the clicks object does not exist, create a new object with the current date
      clicks = {
        [today.toDateString()]: true
      };
    }

    // Store the updated clicks object in local storage
    localStorage.setItem(storageKey, JSON.stringify(clicks));

    // Check if the user has clicked the button consecutively
    const consecutiveClicks = Object.keys(clicks).length;

    // Get the counter element from the HTML
    const counterElement = document.querySelector('#counter');

    // Set the text content of the counter element to the value of the counter
    counterElement.innerHTML = consecutiveClicks;

    alert(`Button clicked successfully! You have clicked the button consecutively ${consecutiveClicks} times`);
  }
}