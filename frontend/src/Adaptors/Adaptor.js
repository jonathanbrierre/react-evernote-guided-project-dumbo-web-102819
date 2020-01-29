

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
    
    return fetch(`http://localhost:3000/api/v1/notes/${id}`, configObj)
        .then(resp => resp.json())
}

export {
    updateNoteFetch
}