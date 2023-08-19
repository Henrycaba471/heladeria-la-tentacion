const showModalBtn = document.getElementById('showModalBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

showModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


/*
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch('/login', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    console.log(result); // Manejar la respuesta del servidor
});
 */