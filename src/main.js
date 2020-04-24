// import $ from 'jquery';
// import './styles.css';


// $(document).ready(function () {
//   $('#dinoGif').click(function () {
//     event.preventDefault();

//     let request = new XMLHttpRequest();
//     const url = `https://api.giphy.com/v1/gifs/search?&api_key=nKNuvTTaOHJDm2sYMvdHU7BYr7173JiD&q=dinosaurs`;

//     request.onreadystatechange = function () {
//       if (this.status === 200) {
//         const gifResponse = JSON.parse(this.responseText);
//         getElements(gifResponse);
//         console.log(gifResponse);
//       }
//     };
//     request.open("GET", url, true);
//     request.send();

//     const getElements = function (gifResponse) {
//       $('.showgif').html(`<img src= "https://giphy.com/explore/dinosaurs.jpg">`);
//     };
    









//     request.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1');
//     request.onload = function() {
//       if (this.status === 200) {
//         document.querySelector('.container').innerHTML = this.response;
//       } else {
//         console.log('Where did all the dinosaurs go?');
//       }
//     };
//     request.send();
//   });
// });