$(document).ready(function() {
	//Code
  // Servendoci di Vue JS stampiamo tutto a schermo.
  let app = new Vue({
    el: '#app',
    data: {
      albumList:[],
      // searchGender: '',
    },
    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music') // Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
      .then(resp => {
        console.log(resp.data.response);
        this.albumList = resp.data.response;
      })
    },
    // // Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
    // computed: {
    //   filteredSearch(){
    //     return this.albumList.filter(album => {
    //       return album.genre.includes(this.searchGender)
    //     })
    //   }
    // }
  })
});
