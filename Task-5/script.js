document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function fetchApi(){
    try{
         const response = await fetch("https://api.github.com/users/abhishek20202020");
         console.log("Before Convert JSON Format");
         console.log(response);

         const data = await response.json();  // JSON format convert 
         console.log("After Convert JSON Format");
         console.log(data);  // original API

         const container = document.querySelector('.container');
        
         let para1 = document.createElement('p');
         para1.innerHTML = `Before change Login id is : ${data.login}`;
         container.appendChild(para1);
         data.login = "Ankit Gupta";
        
         let para2 = document.createElement('p');
         para2.innerHTML = `After change Login id is : ${data.login}`;
         container.appendChild(para2);
        
         console.log(data); // After change some data in API
    }
    catch(error){
         console.log(error);
    }
}
fetchApi();
  