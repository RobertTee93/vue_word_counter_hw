import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {

  new Vue({
    el: "#app",
    data: {
      heading: "Word Counter",
      words: "",
      numberOfWords: 0
    },
    methods: {
      countWords: function(){
        const wordArray = this.words.split(" ");
        console.log(wordArray)
        this.numberOfWords += wordArray.length;
        this.words = "";
      }
    }
  })

})
