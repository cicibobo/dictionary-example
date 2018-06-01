
export function searchWord(word) {
    return (dispatch) => {
        fetch('search/en?q=' + word, {
            headers: {
                "app_key": "adfa4b0de354bc6f940d9e7f4d3cbec1",
                "app_id": "dc69c368"
            }
        }).then((response) => {
            return response.json();
        }).then((response)=>{
            console.log(response);
            dispatch(wordsList(response.results));
        })
    }
}

export function wordsList(list) {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload: list
    }
}