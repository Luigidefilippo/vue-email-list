const {createApp} = Vue;

createApp ({
    data(){
        return{
            randomicEmail: null
        }
    },
    methods: {
        generateEmail() {
           const ourEmail  = []

           for (let i = 0; i < 10 ; i++) {
            axios
                .get ("https://flynn.boolean.careers/exercises/api/random/mail")
                .then ((resp) => {
                    ourEmail.push(resp.data.response);
                    if (ourEmail.length === 10) {
                        this.randomicEmail = ourEmail;
                    }
                })
           }
        }
    }
}).mount ("#app")