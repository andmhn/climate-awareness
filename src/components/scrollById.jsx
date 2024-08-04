const scrollById = (id, isSmooth=false) => {
  const element = document.getElementById(id);
  if(isSmooth){
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  } else {
    element.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
  }
}

export default scrollById
