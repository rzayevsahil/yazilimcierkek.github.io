const addBtn = document.getElementById('add');
addBtn.addEventListener('click',()=>addNewNote());
function addNewNote(text = ''){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
        <button class="delete"> <i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');

    deleteBtn.addEventListener('click',()=>{
        note.remove();
    });
    document.body.appendChild(note);
};


