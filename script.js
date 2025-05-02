const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const backBtn = document.querySelector('.back')
let index = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateGallery();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (index < images.length - 1) {
    index++;
    updateGallery();
  }
});

function updateGallery() {
  gallery.style.transform = `translateX(-${index * 100}%)`;
}


document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });
  
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  backBtn.addEventListener('click' , ()=>{
    window.location.href = 'Home.html';
  })
