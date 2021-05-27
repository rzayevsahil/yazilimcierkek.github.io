


function changeColor(event){
    document.querySelectorAll('span.active').forEach(function(item){
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}