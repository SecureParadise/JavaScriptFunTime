const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')


buttons.forEach(function(button) {

    button.addEventListener('click',function(event_Object) {
        if(event_Object.target.id === 'grey')
            {
                body.style.backgroundColor = event_Object.target.id
            }


        if(event_Object.target.id === 'white')
            {
                body.style.backgroundColor = event_Object.target.id
            }


        if(event_Object.target.id === 'yellow')
            {
                body.style.backgroundColor = event_Object.target.id
            }
        if(event_Object.target.id === 'blue')
            {
                body.style.backgroundColor = event_Object.target.id
            }
        if(event_Object.target.id === 'purple')
            {
                body.style.backgroundColor = event_Object.target.id
            }
    })
})