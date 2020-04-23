
export class DinoIpsum {
  async getGifDino() {
    try {
      let response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${dinosaurs}&api_key=${process.env.GIF_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();

      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    }
  }




}
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




  ////////////////// Dino Gif ////////////////////////////


  // https://giphy.com/explore/dinosaurs?q=dinosaurs&appid=${process.env.API_KEY}
  'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true


// https://dinoipsum.herokuapp.com/api?q=dinosaurs&appid=${process.env.IPSUM_KEY}

