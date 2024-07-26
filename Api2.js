const form1 = document.querySelector("form");
const cardImageContainer = document.querySelector(".cardImageContainer");
const imageContainer = document.querySelector(".image-container");

let enterQuery = "";

const displayForm = form1.addEventListener("submit", (e) => {
  e.preventDefault();
  clearPrevious2();
  const EnterValue = form1.querySelector("input").value;
  console.log(EnterValue);

  getDataFromAPI2(EnterValue);
});



const getDataFromAPI2 = async (EnterValue) => {
  try {
    const req = await fetch(`https://restcountries.com/v3.1/name/${EnterValue}`);
    const res = await req.json();
    console.log(res);

    displayDetails2(res);

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

const clearPrevious2 = () =>{
    cardImageContainer.innerHTML="";
}

const displayDetails2 = (Details) => {
    for (let Countries of Details){
        const flagSrc =  Countries.flags.png;
        const offName = Countries.name.official;
        const maps = Countries.maps.googleMaps;
        divAndTagCreations2(flagSrc,offName,maps);
    }
}

const divAndTagCreations2 = (path,offName,maps) => {
    const imgCardMain= document.createElement('div');
    imgCardMain.classList.add('col-sm-3', 'mb-3', 'mb-sm-0');
    cardImageContainer.appendChild(imgCardMain);

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

    const map= document.createElement('a');
    map.classList.add('btn','btn-danger');
    map.href=maps;
    map.setAttribute('target','_blank');
    map.innerText="Maps";
    imgCardSub.append(map);
}