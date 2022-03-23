window.addEventListener('DOMContentLoaded', () =>{
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const year = document.querySelector('#year');
    const btn = document.querySelector('.btn');
    const list = document.querySelector('#book-list');

    btn.addEventListener('click', function(event){
        event.preventDefault()

        if(title.value == '' && author.value == '' && year.value == ''){
            alert('Input your information');
        }else{
            const newRow = document.createElement('tr');

            const newTitle = document.createElement('th');
            newTitle.innerHTML =  title.value ;
            newRow.appendChild(newTitle)

            const newAuthor = document.createElement('th');
            newAuthor.innerHTML =  author.value ;
            newRow.appendChild(newAuthor)

            const dataYear = document.createElement('th');
            dataYear.innerHTML =  year.value ;
            newRow.appendChild(dataYear);

            list.appendChild(newRow)

            title.value = '' 
            author.value = '' 
            year.value = '' 
        }
    })

})