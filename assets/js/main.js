


function submitForm() {
  // Collecting user inputs and storing them in variables
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  const branch = document.getElementById("branch").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;

  const validEmailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Check if all fields are filled
  if (
    !username ||
    !email ||
    !role ||
    !branch ||
    !password ||
    !confirmpassword
  ) {
    alert("Please fill out all the required fields!");
    return;
  } else if (!email.match(validEmailFormat)) {
    // Check if email is valid
    alert("Please enter a valid email address!");
    return;
  } else if (password !== confirmpassword) {
    // Check if password matches confirm password
    alert("Passwords do not match, please try again!");
    return;
  } else {
    // If all checks pass, display success message
    alert("You have been successfully registered!");
    document.getElementById("form").reset(); // Reset form after successful submission
    return;
  }
}

// Get submit button and add event listener
const submitButton = document.getElementById("submit");

submitButton.addEventListener ("click", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  submitForm(); // Call function to validate and submit form
});


// slider
  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true, // Enable continuous loop mode
    autoplay: {
      delay: 250,
      disableOnInteraction: false,
    },
  });