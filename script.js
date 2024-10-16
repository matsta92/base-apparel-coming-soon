document
	.querySelector('.component__email')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const emailInput = document.querySelector('.component__input-email');
		const errorMessage = document.querySelector('.component__error-message');
		const errorIcon = document.querySelector('.component__error-icon');

		const emailValue = emailInput.value;

		if (!emailValue.includes('@') || emailValue.trim() === '') {
			errorMessage.style.display = 'block';
			errorIcon.style.display = 'inline';
			emailInput.style.borderColor = 'red';
		} else {
			errorMessage.style.display = 'none';
			errorIcon.style.display = 'none';
			emailInput.style.borderColor = '';
			console.log('Email is valid:', emailValue);
			// event.target.submit();
		}
	});
