(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var batteryBtn = document.getElementById('battery-btn');
        var developerBtn = document.getElementById('developer-btn');
        var mainScreen = document.getElementById('main-screen');
        var batteryScreen = document.getElementById('battery-screen');
        var developerScreen = document.getElementById('developer-screen');

        if (batteryBtn && mainScreen && batteryScreen) {
            batteryBtn.addEventListener('click', function() {
                mainScreen.classList.add('hidden');
                batteryScreen.classList.remove('hidden');
                window.scrollTo(0, 0);
            });
        }

        if (developerBtn && mainScreen && developerScreen) {
            developerBtn.addEventListener('click', function() {
                mainScreen.classList.add('hidden');
                developerScreen.classList.remove('hidden');
                window.scrollTo(0, 0);
            });
        }

        var backButtons = document.querySelectorAll('.back-to-main-btn');
        backButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                if (batteryScreen) batteryScreen.classList.add('hidden');
                if (developerScreen) developerScreen.classList.add('hidden');
                if (mainScreen) mainScreen.classList.remove('hidden');
                window.scrollTo(0, 0);
            });
        });

        var updateBtn = document.getElementById('update-charge-btn');
        if (updateBtn) {
            updateBtn.addEventListener('click', function() {
                var currentCharge = document.getElementById('input-current-charge').value;
                var percentValue = document.getElementById('input-charge-percent').value;
                var timeValue = document.getElementById('input-charge-time').value;
                var digitsElement = document.getElementById('main-battery-digits');
                var sliderElement = document.getElementById('main-battery-slider');
                var targetTextElement = document.getElementById('dynamic-charge-text');

                if (currentCharge && digitsElement && sliderElement) {
                    digitsElement.textContent = currentCharge;
                    sliderElement.style.width = currentCharge + '%';
                }

                if (percentValue && timeValue && targetTextElement) {
                    targetTextElement.textContent = 'Последняя зарядка до ' + percentValue + '%: ' + timeValue;
                }
                
                setTimeout(function() {
                    if (developerScreen) developerScreen.classList.add('hidden');
                    if (mainScreen) mainScreen.classList.remove('hidden');
                    window.scrollTo(0, 0);
                }, 200);
            });
        }
    });
})();