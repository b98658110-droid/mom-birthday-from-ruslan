function startConfetti() {
            // Запускаем много конфетти
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#ff9a9e', '#fad0c4', '#a8edea', '#fed6e3', '#ffffff']
            });
            
            // И еще через полсекунды
            setTimeout(function() {
                confetti({
                    particleCount: 150,
                    spread: 120,
                    origin: { y: 0.5, x: 0.3 }
                });
            }, 250);
            
            setTimeout(function() {
                confetti({
                    particleCount: 150,
                    spread: 120,
                    origin: { y: 0.5, x: 0.7 }
                });
            }, 500);
        }
        
        // Автоматическое конфетти при загрузке (можно убрать если не надо)
        window.onload = function() {
            setTimeout(startConfetti, 1000);
        };