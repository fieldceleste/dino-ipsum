
  export class DinoIpsum {
    async getQuote() {
      try {
        let response = await fetch ("https://alexnormand-dino-ipsum.p.rapidapi.com/?format=html&words=3&paragraphs=3");
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else { 
          jsonifiedResponse = false; 
        } 
        return jsonifiedResponse;
      } catch (error) {
        console.log(error);
        return false; 
      }
    }

    async getGif() {
        try {
          let gifResponse = await fetch (`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dinosaurs&limit=25&offset=0&rating=G&lang=en`);
          let jsonifiedResponse;
          if ( gifResponse.ok && gifResponse.status == 200) {
            jsonifiedResponse = await  gifResponse.json();
            let { data } = jsonifiedResponse;
            let randGif = data[Math.floor(Math.random()*29)];
            console.log(jsonifiedResponse)
            let { images:{ original: { url }} } = randGif;
            jsonifiedResponse = url;
          } else { 
            jsonifiedResponse = false; 
          } 
          return jsonifiedResponse;
        } catch (error) {
          console.log(error);
          return false; 
        }
      }
    }
     






   






























// export class DinoIpsum {
//     async getGifDino() {
//       try {
//         let gifResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_KEY}&q=dinosaurs`)
//         console.log("I got past gifResponse fetch");
//         let jsonifiedResponse;
//       if (gifResponse.ok && gifResponse.status == 200){
//           jsonifiedResponse = await gifResponse.json();   
//           let { data } = jsonifiedResponse;
//           let randomGif = data[Math.floor(Math.random()*99)];
//           let { images:{ original: { url }} } = randomGif;
//           console.log(jsonifiedGifResponse);
//         jsonifiedGifResponse = url;    
//       } else {
//         jsonifiedResponse = false;
//       }
//       return jsonifiedResponse;
//     } catch(error) {
//       console.log("in gif error");
//     return false;
//     }
//   } 
// }


  






//   async getIpsumbyDino() {
  //     try {
    //       let response = await fetch(`http://dinoipsum.herokuapp.com/api?q=dinosaurs&appid=${process.env.IPSUM_KEY}`);
    //       let jsonifiedResponse;
    //       if (response.ok && response.status == 200) {
      //         jsonifiedResponse = await response.json();
      //       } else {
        //         jsonifiedResponse = false;
        //       }
        //       return jsonifiedResponse;
        //      } catch (error) {
          //       return false;
          //     }
          //   }
          


          
          
          
          // async getGifDino(dinosaurs) {
          //   try {
          //     let response = await fetch(`https://giphy.com/explore/dinosaurs?q=${dinosaurs}&appid=${GIF_KEY}`);
           
          //     let jsonifiedResponse;
          //     if (response.ok && response.status == 200) {
          //       jsonifiedResponse = await response.json();
          
          //     } else {
          //       jsonifiedResponse = false;
          //     }
          //     return jsonifiedResponse;
          //   } catch (error) {
          //     return false;
          //   }
          // }
          
          ////////////////// Dino Gif ////////////////////////////


  // https://giphy.com/explore/dinosaurs?q=dinosaurs&appid=${process.env.API_KEY}



// https://dinoipsum.herokuapp.com/api?q=dinosaurs&appid=${process.env.IPSUM_KEY}
