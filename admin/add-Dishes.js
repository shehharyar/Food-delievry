
let add= document.getElementById('add')
add.addEventListener('click',()=>{

    var item=document.getElementById('item')
    var price =document.getElementById('price')
    var category =document.getElementById('category')
    var file =document.getElementById('image').files[0];
    var type =document.getElementById('type')
    
    let dishes={
        item_name: item.value,
        Price: price.value,
        Category: category.value,
        Food_image: file,
        Type : type.value
    }
    var key = firebase.database().ref('Dishes').push().key;
    firebase.storage().ref('images').child(file.name).put(file);

    firebase.database().ref('Dishes').child(key).push(dishes, ()=>{
        alert("Send")
       console.log(dishes)
    })
})
