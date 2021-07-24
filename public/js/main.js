const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname"); 
const city_name = document.getElementById("city_name"); 
const temp_status = document.getElementById("temp_status"); 
const temp_val = document.getElementById("temp_val"); 
const datahide = document.querySelector('.middle_layer');


const getinfo=async(event)=>{
    event.preventDefault();

    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText = `Please enter the city name first..`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cfe6dae4398906d677524c113946ad75`;
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data]; 

        city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_val.innerText = arrdata[0].main.temp;
        let tempMood = arrdata[0].weather[0].main;

            if (tempMood === "Clear") {
            temp_status.innerHTML =
            "‹i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood === "Clouds") {
            temp_status.innerHTML =
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood === "Rain") {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4bObe;'><i>";
            } else {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'><i>";
            }
           
            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Unable to fetch content from the API..please make sure the city exists`;
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click',getinfo);

