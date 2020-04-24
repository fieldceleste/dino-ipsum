
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { DinoIpsum } from './dino-ipsum.js';

$(document).ready(function(){
  

   $("#button").click(function(){
    (async() => {
      let dinoGif = new DinoIpsum();
      const response = await dinoGif.getQuote();
      const gifResponse = await dinoGif.getGif();
      console.log(gifResponse)
      $('#showGif').html(`<img src="${gifResponse}" alt="a random dino gif">"${response[0]}"`);
    })();
   });
   
  //  let request = new XMLHttpRequest();
   
  //  request.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3');
  //  request.onload = function() {
  //    if (this.status === 200) {
  //      document.querySelector('.container').innerHTML = this.response;
  //     } else {
  //       console.log('Where did all the dinosaurs go?');
  //     }
  //   };
  //   request.send();
    
  });











































// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
// import { DinoIpsum } from './dino-ipsum.js';


// $(document).ready(function () {
//   $('#dinoGif').click(function () {   
//     // let gif = $('.gif').val();
//     // $('#dinoGif').val("");
//     // $("#dinoGif").show();
 
//     (async () => {
//       let dinoGif = new DinoIpsum();
//       const gifResponse = await dinoGif.getGifDino();
//       console.log(gifResponse);
//       getElements(gifResponse);

//     })();

//     function getElements(gifResponse) {
//       if (gifResponse) {
    
//         // $('.gif').html(`${response.images.md}`);
//         // let dino = response.gif;
//        $(".gif").html(`<img src="${gifResponse.data.url}" alt="">`);
//       } else {
//         $(".errors").html("Does not work")
//       }
//     }

//   });
// });


























    // const getElements = function(response) {
//       if (response) {
        // $('.result').text(`This dionsaur is named ${dino}.  `);
//       } else {
//       $('.showHumidity').text(`There was an error handling your request.`);
//       $('.showTemp').text(`Please check your inputs and try again!`);
//       }
//     }
//     getElements(jsonifiedResponse);
//   } catch {
//     getElements(false);
//   }
// })();


    // promise.then(function(response) {
    //   let body = JSON.parse(response);
    //   $('.dinoLocation').text(`${dino}`);
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);


















    // export class GetSwanson {
    //     async getGif() {
    //         try {
    //           let gifResponse = await fetch (`https://api.giphy.com/v1/stickers/search?api_key=gx6y7oa8h4zLmpMCh7e3oNNNZEF9K8dR&q=dinosaurs&limit=25&offset=0&rating=G&lang=en`);
    //           let jsonifiedResponse;
    //           if ( gifResponse .ok &&  gifResponse .status == 200) {
    //             jsonifiedResponse = await  gifResponse .json();
    //             let { data } = jsonifiedResponse;
    //             let randGif = data[Math.floor(Math.random()*29)];
    //           console.log(jsonifiedResponse)
    //             let { images:{ original: { url }} } = randGif;
    //             jsonifiedResponse = url;
    //           } else { 
    //             jsonifiedResponse = false; 
    //           } 
    //           return jsonifiedResponse;
    //         } catch (error) {
    //           console.log("error", error);
    //           return false; 
    //         }
    //       }
    //     }