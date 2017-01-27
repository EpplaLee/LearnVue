var vm = new Vue({
    el: "#app",
    data: {
        newArtist: {
            name: "",
            bestSong: "",
            style: ""
        },
        artists: [
            {
                name: "Radiohead",
                favoriteSong: "Creep",
                style: "Rock"
            },
            {
                name: "Linkin Park",
                favoriteSong: "In The End",
                style: "Hrad Core"
            },
            {
                name: "Taylor Swift",
                favoriteSong: "Blank Space",
                style: "Country,Pop"
            }
        ]
    },
    methods: {
        addArtist: function(){
            this.artists.push(this.newArtist);
            this.newArtist = {
                name: "",
                favoriteSong: "",
                style: ""
            };
        },
        delArtist: function(index){
            this.artists.splice(index,1);
        }
        }
    
})