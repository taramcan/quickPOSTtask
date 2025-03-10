const newSubmission = {
    name:  'Tara Can',
    email: 'taracan@protonmail.com',
    linkedinUrl: 'linkedin.com/in/taracan/'
}

fetch('https://api.clay.com/v3/sources/webhook/pull-in-data-from-a-webhook-d2ca968f-5408-44f6-b763-7fe23204cd93',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newSubmission)
}).then(res => {
    const contentType = res.headers.get('Content-Type');

    if(contentType && contentType.includes('applicadtion.json')){
        return res.json();
    } else{
        return res.text();
    }
})
.then(data => {
    console.log('Response: ', data);
})
.catch(error=>{
    console.log(error);
});