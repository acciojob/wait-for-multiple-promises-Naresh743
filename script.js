//your JS code here. If required.
function getRandomTime() {
            return Math.random() * (3 - 1) + 1; // Random time between 1 and 3 seconds
        }

        const promise1 = new Promise(resolve => setTimeout(() => resolve(getRandomTime()), getRandomTime() * 1000));
        const promise2 = new Promise(resolve => setTimeout(() => resolve(getRandomTime()), getRandomTime() * 1000));
        const promise3 = new Promise(resolve => setTimeout(() => resolve(getRandomTime()), getRandomTime() * 1000));

        const startTime = performance.now();

        Promise.all([promise1, promise2, promise3]).then(times => {
            const totalTime = (performance.now() - startTime) / 1000;
            const output = document.getElementById('output');
            output.innerHTML = '';

            times.forEach((time, index) => {
                const row = `<tr><td>Promise ${index + 1}</td><td>${time.toFixed(3)}</td></tr>`;
                output.innerHTML += row;
            });

            output.innerHTML += `<tr><td>Total</td><td>${totalTime.toFixed(3)}</td></tr>`;
        });