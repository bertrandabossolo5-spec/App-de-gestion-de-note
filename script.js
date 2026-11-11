document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('note-form');
    const notesList = document.getElementById('notes-list');

    // Tableau temporaire pour stocker les notes en local (en attendant la BDD du backend)
    let notes = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('student-name');
        const noteInput = document.getElementById('student-note');

        const newNote = {
            id: Date.now(),
            name: nameInput.value,
            note: noteInput.value
        };

        // Ajout dans le tableau
        notes.push(newNote);

        // Réinitialisation du formulaire
        nameInput.value = '';
        noteInput.value = '';

        // Actualisation de l'affichage
        renderNotes();
    });

    function renderNotes() {
        notesList.innerHTML = '';

        if (notes.length === 0) {
            notesList.innerHTML = '<li class="empty-state">Aucune note pour le moment...</li>';
            return;
        }

        notes.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${item.name}</strong></span>
                <span class="badge">${item.note} / 20</span>
            `;
            notesList.appendChild(li);
        });
    }
});