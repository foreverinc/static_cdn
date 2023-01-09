const thumbnail = document.getElementById("thumbnail");
const overlay = document.getElementById("overlay");

function toggleFullSizeImage() {
	if (thumbnail.classList.contains("thumbnail")) {
		overlay.style.display = "none";
		thumbnail.classList.remove("thumbnail");
	} else {
		thumbnail.classList.add("thumbnail");
		overlay.style.display = "flex";
	}
}

thumbnail.addEventListener("click", toggleFullSizeImage);
overlay.addEventListener("click", toggleFullSizeImage);

function show(parent_id) {
	const box = document.getElementById(parent_id);
	if (box.classList.contains('d-none')) {
		box.classList.remove('d-none');
	} else {
		box.classList.add('d-none')
	}

}


  function updateDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth(); // January is 0
    var day = now.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Get the name of the day and month
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayName = dayNames[now.getDay()];
    var monthName = monthNames[month];

    // Add leading zeros if needed
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Update the date and time displays
    document.getElementById('date').innerHTML = dayName + ' ' + monthName + ' ' + day + ', ' + year;
    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
  }

  // Update the date and time every second
  setInterval(updateDateTime, 1000);

