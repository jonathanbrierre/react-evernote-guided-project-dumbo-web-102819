function allNotesFetch(){
    return fetch('http://localhost:3000/api/v1/notes').then(r => r.json())
}

function updateNoteFetch(id, title, body, user_id){
    const updateBody = {
        title,
        body,
        user_id
    }
    const configObj = {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(updateBody)
    }
    
    return fetch(`http://localhost:3000/api/v1/notes/${id}`, configObj).then(resp => resp.json())
}

//Am not pulling any particular user's ID  for the below function. may want to update in the future.
function createNewNoteFetch(){
    const updateBody = {
        title: 'default',
        body: 'placeholder',
        user_id: 1
    }
    const configObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(updateBody)
    }
    return fetch(`http://localhost:3000/api/v1/notes`, configObj).then(resp => resp.json())
}

export {
    allNotesFetch,
    updateNoteFetch,
    createNewNoteFetch
}