	const img = document.querySelector('#qrCode');
	const ssid = document.querySelector('.ssid');
	const password = document.querySelector('.password');
	const button = document.querySelector('#generateButton');

	function update() {
		const wifi = `WIFI:T:WPA;S:${ssid.value};P:${password.value};;`;
		// Assuming you have a QR code generation API or library
		img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(wifi)}`;
	}

	ssid.addEventListener('keyup', update);
	password.addEventListener('keyup', update);
	button.addEventListener('click', () => {
		window.print();
	});