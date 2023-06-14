// NOT AVAILABLE IN YOUR COUNTRY SCRIPT
const notAvailable = document.querySelectorAll(".notAvailable");
notAvailable.addEventListener('click', (e) => {
  e.preventDefault();
  alert("NYM.JS is not Available in Your Country")
})

const emails = ['yakubuanas04@gmail.com', 'yakubuabbas04@gmail.com', 'unaeesunaees@gmail.com'];
const send = document.querySelector('.send');

send.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Working');
  //alert(emails);

  emails.forEach(emails => {
    Email.send({
      SecureToken: "864e6dbb-9d31-47ca-8af1-4371d598e59f",
      To: emails,
      From: 'yakubuanas04@gmail.com',
      Subject: "Bulk Email",
      Body: "<h3>This is a Bulk Email</h3>" +
        "<h6>Thank You..</h6>",
    }).then(
      message => alert(message),
      alert("Sent")
    );
  })

});

// Define an empty array
var myArray = [];

function addToArray() {
  // Get the value from the input field
  var inputValue = document.getElementById("inputField").value;

  // Check if the array has reached the limit
  if (myArray.length >= 10) {
    console.log("Array limit reached");
    return; // Exit the function if the limit is reached
  }

  // Add the value to the array
  myArray.push(inputValue);

  // Optional: Display the array
  const result = document.querySelector('.result');
  result.innerHTML = myArray;
  console.log(myArray);
}