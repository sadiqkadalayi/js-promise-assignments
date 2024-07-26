
const cardImageContainerTwo = document.querySelector(".cardImageContainer-2");


const getDataFromAPI = async () => {
  try {
    clearPrevious();
    const req = await fetch(`https://restcountries.com/v3.1/all`);
    const res = await req.json();
    console.log(res);

    displayDetails(res);

  } catch (err) {
    console.log(err);
    const msg = `oohh sorry there is some error: ${err.message} <br> Try again`;
    console.log(msg);
    const tag = document.createElement("div");
    tag.classList.add(
      "Error-msg",
      "p-3",
      "text-primary-emphasis",
      "bg-primary-subtle",
      "border",
      "border-primary-subtle",
      "rounded-3"
    );
    tag.innerHTML = msg;
    imageContainer.appendChild(tag);
  }
};


setTimeout(()=>{
  clearPrevious();
},10000);

const clearPrevious = () =>{
  cardImageContainerTwo.innerHTML="";
}

const displayDetails = (Details) => {
    for (let Countries of Details){
        const flagSrc =  Countries.flags.png;
        const offName = Countries.name.official;
        divAndTagCreations(flagSrc,offName);
    }
}

const divAndTagCreations = (path,offName) => {
    const imgCardMain= document.createElement('div');
    imgCardMain.classList.add('col-sm-3', 'mb-3', 'mb-sm-0');
    cardImageContainerTwo.appendChild(imgCardMain);

    const imgCard = document.createElement('div');
    imgCard.classList.add('card');
    imgCardMain.appendChild(imgCard);

    const imgCardSub = document.createElement('div')
    imgCardSub.classList.add('card-body');
    imgCard.appendChild(imgCardSub);

    const img = document.createElement("img");
    img.classList.add('card-image-top','size-img')
    img.src = path;
    imgCardSub.appendChild(img);

    const tName = document.createElement('h6');
    tName.classList.add('card-title','mt-3' , 'mb-2')
    imgCardSub.append(tName);
    tName.innerHTML=offName;

}