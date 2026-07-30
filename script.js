document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('tmModal');
    const openBtn = document.getElementById('openTmModal');
    const closeBtn = document.getElementById('closeTmModal');

    // Tescil Detay Modalını Aç
    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
    });

    // Modal Kapatma
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);

    // Dışarı tıklanınca kapat
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC tuşuna basınca kapat
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});