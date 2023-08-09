const initializePage = async () => {
// func calej strony!
// create main container, position it & append to body
// invoke all helper funcs
// add local storage

const container = document.createElement("section");
container.setAttribute("class", "container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.marginTop = "20px";

document.body.appendChild(container)

mainContent();

}

const mainContent = () => {
// create h1
// new pic button
// img
// bring in container

const container = document.querySelector(".container")

  //h1
  const h1 = document.createElement('h1');
  h1.setAttribute('id','h1');
  h1.innerText = 'Catstagram';
  container.appendChild(h1)

  headerTitle.style.display = 'flex';
  headerTitle.style.justifyContent = 'center';

  //Img
  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('id','img--container');
  const catImg = document.createElement('img');
  catImg.setAttribute('id', 'cat--img');

  imgContainer.style.display = 'flex';
  imgContainer.style.justifyContent = 'center';

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
};
