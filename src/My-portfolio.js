let isIframeVisible = false;
const imgContainer = document.querySelector('.js-project-image-container');
let jsImage = imgContainer.innerHTML;
const iframeProject = `<iframe src="https://moniruzzaman-s-todolist.vercel.app/" 
        loading="lazy" class="responsive-iframe"></iframe>`;
const projectImg = `<img class="todo-project-img" src="Untitled (5).png" alt="Project image">`;
let btnElement = document.querySelector('.project-link-btn');
function replaceImageWithProject() {
  if (!isIframeVisible) {
    imgContainer.innerHTML = iframeProject;
    imgContainer.classList.add('iframe-css');
    isIframeVisible = true;
    btnElement.innerHTML = 'Hide Live Project';
    btnElement.classList.add('active-btn');

  } else {
    imgContainer.innerHTML = projectImg;
    imgContainer.classList.remove('iframe-css');
    isIframeVisible = false;
    btnElement.innerHTML = 'View Live Project';
    btnElement.classList.remove('active-btn');
  }
}
