import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoIpsum } from './dino-ipsum.js';

$(document).ready(function () {
  $('#dinoGif').click(function () {   
    let dinosaurs = $('.gif').val();
    // $('#dinoGif').val("");
    // $("#dinoGif").show();
 
    (async () => {
      let dinoIpsum = new DinoIpsum();
      const response = await dinoIpsum.getGifDino();
      
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        // let dino = response.gif;
        $(".gif").html(`<img src = "${dinosaurs}"`);
        console.log(".dinosaurs");
      } else {
        $(".errors").text("Does not work")
      }
    }

  });
});


























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













     //   let request = new XMLHttpRequest();

    //   request.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=10&paragraphs=3');
    //   request.onload = function() {
    //     if (this.status === 200) {
    //       document.querySelector('.container').innerHTML = this.response;
    //     } else {
    //       console.log('Where did all the dinosaurs go?');
    //     }
    //     };
    // request.send();
    // });







  // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=dinosaurs&api_key=DOH2HGMQmyC6JLKIncaurmCzSJr2Mz49");
    // xhr.done(function(data) 
    // { console.log("success got data", data); });








 // let promise = new Promise(function(resolve, reject) {



 // let url = `http://dinoipsum.herokuapp.com/api?q=dinosaurs&appid=PMAK-5ea07404fdab6400299900a9-ed692087a779186afc7b70e2af775b4432`;