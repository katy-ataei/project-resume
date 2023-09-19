let year = document.getElementById('year');

if(year){
    let list = [];
    for(let i = 1350; i < 1401; i++){
        list.push(i);
    }
    console.info("List: ", list);
    
    list.forEach((value, index, array) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerText = value;
        year.appendChild(option);
    });
}