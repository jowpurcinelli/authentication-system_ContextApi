
/*This is a simulation of a API call.
Every API call return a Promise, that normally we would use: .then, .await, or something else to communicate with,
In this case I will pass a fake Promise*/ 

export  function  signIn() {
    return  new  Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: 'asa7sas6tasasna8sna8s6asau9ksdknue',
                user: {
                    name: 'Pedro',
                    email: 'jppurcinelli@gmail.com',
                },
            })
        }, 2000);
    })
};

