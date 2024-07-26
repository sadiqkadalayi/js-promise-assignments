// 1. Create a function fetchData that returns a Promise. The Promise should resolve with the string 
//      "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. 
//      Test your function by calling it and using .then() to log the resolved value to the console. 

// 2. Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message 
// "Failed to fetch data". Modify your test to handle this rejection using .catch().



let database = 1;

const fetchData = (Data,time,) => {
    return new Promise((res,rej)=>{
        if(database===1){
            setTimeout(()=>{
                res(Data());
            },time);
        }else{
            rej(console.log("Failed to fetch data"))
        }
    })
}

fetchData(()=>{
    console.log("1st server is running");
},2000).then(()=>{
    return fetchData(()=>{
        console.log("fetching data has been started");
    },3000);
}).then(()=>{
    return fetchData(()=>{
        console.log("Data fetched successfully form 1st server");
    },3000)
}).then(()=>{
    return fetchData(()=>{
        console.log("2nd server is running");
    },3000)
}).then(()=>{
    return fetchData(()=>{
        database = 0;
        console.log("Fetching data from 2nd server is Loading...");
    },3000)
}).then(()=>{
    return fetchData(()=>{
        console.log("3nd satge completed");
    },3000)
})
.catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Overall Operations has been completed succeffully.");
})



// 3. Convert the fetchData function from Question  1 to use async and await instead of .then(). 
// Ensure to handle errors using try and catch <br></br>

let database3 = 1;

const fetchData3 = (Data,time,) => {
    return new Promise((res,rej)=>{
        if(database3===1){
            setTimeout(()=>{
                res(Data());
            },time);
        }else{
            rej(console.log("Failed to fetch data"))
        }
    })
}

const fetching = async ()=>{
    try{
    await fetchData3(()=>{
        console.log("2nd Server is running");
    },5000);
    await fetchData3(()=>{
        console.log("2ns server fetchind data loading has been completed");
    },3000);
    }catch(err){
        console.log(err);
    }finally{
        console.log("Overall Operations has been completed succeffully.");
    }
}

fetching();


// 4. Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". 
// Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. 
// Make sure to handle any errors that might occur during the 
// fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)