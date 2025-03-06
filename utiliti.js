// get id
const getId = (id) =>{
    return document.getElementById(id);
}

// get class
const getClass = (className) =>{
    return document.getElementsByClassName(className);
}

// input number value
const get_Id_Number = (id) =>{
    let value = parseInt(document.getElementById(id).value);
    return value;
}

// input text value
const get_Id_Text = (id) =>{
    let value = parseInt(document.getElementById(id).innerText);
    return value;
}

