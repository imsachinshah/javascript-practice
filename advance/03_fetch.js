// Fetch API 

// used to request to API and return Response() object as a promise 

async function getUserDetails(){
    const url = 'https://api.github.com/users/imsachinshah'

    const response = await fetch(url, {method: 'GET'});
    // console.log(response.headers);
    // console.log(response.ok);
    // console.log(await response.text());
    // console.log(await response.formData())
    console.log(await response.blob())
    const data = await response.json();
    // console.log(data);
}

getUserDetails();