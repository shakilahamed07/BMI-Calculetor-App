// project name
getId("name-project")
    .addEventListener('click', () =>{
        window.location.href="index.html"
})

// Menu btn event
getId('menu-on-btn')
    .addEventListener('click', () =>{
        getId("menu-pge").classList.remove('hidden');
})
getId('menu-of-btn')
    .addEventListener('click', () =>{
        getId("menu-pge").classList.add('hidden');
})

// calculate
getId("calculate")
    .addEventListener('click', () =>{
        //input value
        const hightFit = get_Id_Number("hight-fit");
        const hightInch = get_Id_Number("hight-inch" );
        const age = get_Id_Number("age");
        const weight = get_Id_Number("Weight");

        if(!hightFit || !hightInch){
            return alert('Enter hight...')
        }
        else if(!age){
            alert("Enter age...")
        }
        else if(!weight){
            alert("Enter weight...")
        }
        else{
            getId("header-img").classList.add('hidden');
        getId("display").classList.remove('hidden')
        getId("arrow").classList.add('rotate-45')

        const totalInch = (hightFit*12) + hightInch;
        const meter = totalInch * 0.0254;

        const BMI = (weight/(meter*meter)).toFixed(2);

        const resultD = getId('result-d').innerText = BMI;
        const weightD = getId('weight-d').innerText = weight + " KG";
        const hightD = getId('hight-d').innerText = hightFit +"Fit, " + hightInch + "Inch";


        if(BMI < 18.5){
            getId('health-condition').innerText = " Underweight";
        }
        else if(BMI < 25){
            getId('health-condition').innerText = " Healthy weight";
        }
        else if(BMI < 30){
            getId('health-condition').innerText = "Overweight";
        }
        else{
            getId('health-condition').innerText = "obesity";
        }
        }
})

// getId('')
//     .addEventListener('click', () =>{
        
// })