const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
            const percentage = parseFloat(card.querySelector('.percentage').textContent);
            const progress = card.querySelector('.progresso');
    
            card.querySelector('.percentage').textContent = percentage + '%';
            progress.style.width = percentage + '%';
            progress.style.backgroundColor = '#CAE636';
});