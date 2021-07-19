document.addEventListener('DOMContentLoaded', function () {
  var imagesArray = [
    { name: 'boy', img: 'images/img1.jpg' },
    { name: 'boy', img: 'images/img1.jpg' },
    { name: 'girl', img: 'images/img2.jpg' },
    { name: 'girl', img: 'images/img2.jpg' },
    { name: 'minion', img: 'images/img3.jpg' },
    { name: 'minion', img: 'images/img3.jpg' },
  ];

  var section = document.querySelector('.section-center');
  var container;
  // create image container

  function imageContainer() {
    container = document.createElement('div');
    container.style.width = '150px';
    container.style.height = '150px';
    container.style.position = 'relative';
    container.style.border = '2px solid red';
    container.style.background = '#334455';
    container.addEventListener('click', flipCard);
  }

  // Create flipCard

  function flipCard() {
    console.log('clicked');
    var cardId = this.getAttribute('data-id');
    console.log(cardId);
    document.getElementById(cardId).style.display = 'none';
  }

  // creating random image

  var randomArr = [];
  function randomImage(i) {
    while (randomArr.length < i) {
      var random = Math.trunc(Math.random() * 6);
      if (randomArr.indexOf(random) == -1) {
        randomArr.push(random);
        // adding data attribute
        // if (random == 0 || random == 1) {
        img.setAttribute('data-id', random);
        return imagesArray[random].img;
      }
    }
  }

  // section.appendChild(container);
  // console.log(container);

  for (var i = 0; i < imagesArray.length; i++) {
    // create image and append to container
    imageContainer();

    // create random image and append to container
    var img = document.createElement('img');
    var pic = randomImage(i + 1);
    img.src = pic;

    img.style.width = '100%';
    img.style.height = '100%';

    container.appendChild(img);
    section.appendChild(container);
  }
});
