const slides = document.querySelectorAll('.slide');

for(const slide of slides){
	slide.addEventListener('click' , () => {
		clearActiveClasses();
   slide.classList.add('active')
	})
}

function clearActiveClasses(){
	slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

for (let index = 0; index < array.length; index++) {
	const element = array[index];
	
}