	<script type="text/javascript">
		var feedback = document.querySelector(".map-feedback");
		var popup = document.querySelector(".feedback");
		var close = document.querySelector(".close-button");
		var yourname = popup.querySelector(".feedback-header-name");
		var youremail = popup.querySelector(".feedback-header-email");
		var something = popup.querySelector(".feedback-header-something");
		var form = popup.querySelector("form");
		var storage = "";
		var isStorageSupport = true;
		try {
			storage = localStorage.getItem("youremail")
		} catch (err) {
			isStorageSupport = false;
		}
		close.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.remove("feedbackpopup");
		})
		form.addEventListener("submit", function(evt) {
			if (!yourname.value || !youremail.value || !something.value) {
				evt.preventDefault();
				console.log("нужно заполнить все поля");
			} else {
				if	(isStorageSupport) {
					localStorage.setItem("email", youremail.value);
				}
			}
		})
		feedback.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.add("feedbackpopup");

			if (storage) {
				youremail.value = storage;
				yourname.focus();
			} else {
				youremail.focus();
			}
		})
		window.addEventListener("keydown", function (evt) {
			if (evt.keycode === 27) {
				if (popup.classlist.contains("feedbackpopup")) {
					evt.preventDefault();
					popup.classList.remove("feedbackpopup");
				}
			}
		})
	</script>