let SignUp = () =>{
    var user_name=document.getElementById('user')
    var email =document.getElementById('email')
    var password =document.getElementById('pass')
    var country =document.getElementById('country')
    var city =document.getElementById('city')
    // let data={
    //     Restaurant: user_name.value,
    //     Email: email.value,
    //     Password : password.value,
    //     Country: country.value,
    //     City : city.value
    // }
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in 
    
        let data={
            UserName: user_name.value,
            Email: email.value,
            Password : password.value,
            Country: country.value,
            City : city.value
        }
        firebase.database().ref('Users').push(data , ()=>{
            alert("Send")
           console.log(data)
           window.location='dashbpard.html'
        
          })
    }
        
      )
    
    }