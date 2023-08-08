const initializePage = async () => {
    //title
    const headerTitle = document.createElement('h2');
    headerTitle.setAttribute('id','cat--tittle');
    headerTitle.innerText = 'Kitten Pic';
    document.body.appendChild(headerTitle)

    headerTitle.style.display = 'flex';
    headerTitle.style.justifyContent = 'center';

    //Img
    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('id','img--container');
    const catImg = document.createElement('img');
    catImg.setAttribute('id', 'cat--img');

    imgContainer.style.display = 'flex';
    imgContainer.style.justifyContent = 'center';
    // imgContainer.style.height = '400px'
    // imgContainer.style.width = '550px'

    catImg.style.display = 'flex';
    catImg.style.justifyContent = 'center';
    catImg.style.height = '50%';
    catImg.style.width = '70%';
   
    

    imgContainer.appendChild(catImg)
    document.body.appendChild(imgContainer)

    const imgURl = await fetchCatImg()
    catImg.src = imgURl;
}

const fetchCatImg = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    // console.log(data)
    const imgURL = data[0].url
    return imgURL
}

window.onload = async () => {
    initializePage(),
    fetchCatImg()
}