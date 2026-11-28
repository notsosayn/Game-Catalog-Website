// pg 4
const checkBtn = document.getElementById('check-btn');
if (checkBtn) {
    const reqs = {
        1: [2, 2], // The Last of Us: 16GB RAM, Mid-Range GPU
        2: [3, 3], // GTA 6: 32GB+ RAM, High-End GPU
        3: [2, 2], // Detroit Become Human: 16GB RAM, Mid-Range GPU
        4: [1, 1], // Little Nightmares 2: 8GB RAM, Basic GPU
        5: [2, 2], // God of War: 16GB RAM, Mid-Range GPU
        6: [1, 1]  // Big City: 8GB RAM, Basic GPU
    };

    checkBtn.addEventListener('click', () => {
        const gameEl = document.getElementById('game');
        const game = Number(gameEl.value);
        const ram = Number(document.getElementById('ram').value);
        const gpu = Number(document.getElementById('gpu').value);
        const result = document.getElementById('result');

        if (!game || !ram || !gpu) {
            result.textContent = 'Please select a game, RAM, and GPU first.';
            result.style.color = '#ffd166';
            return;
        }

        const [minRam, minGpu] = reqs[game];
        const gameName = gameEl.options[gameEl.selectedIndex].text;

        if (ram >= minRam && gpu >= minGpu) {
            result.textContent = `Yes! Your PC can run ${gameName} smoothly.`;
            result.style.color = '#7ae582';
        } else if (ram >= minRam || gpu >= minGpu) {
            result.textContent = `Borderline: ${gameName} may run on low settings.`;
            result.style.color = '#ffd166';
        } else {
            result.textContent = `No: Your PC is below the minimum specs for ${gameName}.`;
            result.style.color = '#ff758f';
        }
    });
}

// Pg 6
const checklistItems = document.querySelectorAll('.checklist-box li');
checklistItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const done = item.style.textDecoration === 'line-through';
        item.style.textDecoration = done ? 'none' : 'line-through';
        item.style.opacity = done ? '1' : '0.6';
    });
});

const searchInput = document.querySelector('.search-bar input');
if (searchInput && document.querySelector('.guide-grid')) {
    searchInput.addEventListener('input', () => {
        const q = searchInput.value.toLowerCase();
        document.querySelectorAll('.content-area li').forEach(li => {
            li.style.display = li.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
    });
}
