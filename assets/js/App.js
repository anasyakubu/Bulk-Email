// NOT AVAILABLE IN YOUR COUNTRY SCRIPT
function notAvailable() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  const message = "NYM.JS is not Available in Your Country 😥"
  snackbar.innerHTML = message;
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

// SEND SINGLE EMAIL FUNCTIONS
function single() {
  // alert("HELLO");

  const singleTo = document.querySelector(".singleTo").value;
  const singleBody = document.querySelector(".singleBody").value;
  const singleForm = document.querySelector(".singleForm");

  if (singleTo == "" || singleBody == "") {
    alert("Input Field Required");
  } else {
    Email.send({
      SecureToken: "864e6dbb-9d31-47ca-8af1-4371d598e59f",
      To: singleTo,
      From: 'yakubuanas04@gmail.com',
      Subject: "NYM Emailing System (Single)",
      Body: "<h3>" + singleBody + "</h3>" +
        "<h6>Thank You..</h6>",
    }).then(
      message => alert(message + " " + "Check your Email"),
      singleForm.reset(),
      // alert("Sent")
    );
  }
}

// SEND MULTIPLE EMAIL

// Define an empty array
var myArray = [];
function addToArray() {
  // Get the value from the input field
  var multipleTo = document.querySelector(".multipleTo").value;

  // Check if the array has reached the limit
  if (myArray.length >= 3) {
    // console.log("Array limit reached");
    const message = "Maximum limit reached";
    var x = document.getElementById("snackbar");
    snackbar.innerHTML = message;

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    return false;
  }

  // Add the value to the array
  myArray.push(multipleTo);

  // Optional: Display the array
  const result = document.querySelector('small');
  result.innerHTML = myArray;

  // console.log(myArray);
}

function multiple() {
  // alert("Working");

  // const multipleTo = document.querySelector(".multipleTo").value;
  const multipleBody = document.querySelector(".multipleBody").value;
  const multipleForm = document.querySelector(".multipleForm");
  // myArray.forEach(element => { alert(element); });

  myArray.forEach(emails => {
    Email.send({
      SecureToken: "864e6dbb-9d31-47ca-8af1-4371d598e59f",
      To: emails,
      From: 'yakubuanas04@gmail.com',
      Subject: "NYM Emailing System (Multiple)",
      Body: "<h3>" + multipleBody + "</h3>" +
        "<h6>Thank You..</h6>",
    }).then(
      message => alert(message + " " + "Check your Email"),
      multipleForm.reset(),
      // alert("Sent")
    );
  });

}





// myArray.forEach(emails => {
//   Email.send({
//     SecureToken: "864e6dbb-9d31-47ca-8af1-4371d598e59f",
//     To: emails,
//     From: 'yakubuanas04@gmail.com',
//     Subject: "NYM Emailing System (Multiple)",
//     Body: "<h3>" + multipleBody + "</h3>" +
//       "<h6>Thank You..</h6>",
//   }).then(
//     message => alert(message + "Check your Email"),
//     multipleForm.reset(),
//     // alert("Sent")
//   );
// });


// const emails = ['yakubuanas04@gmail.com', 'yakubuabbas04@gmail.com', 'unaeesunaees@gmail.com'];
// const send = document.querySelector('.send');

