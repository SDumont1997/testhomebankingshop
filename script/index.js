const app = Vue.createApp({
    data(){
        return{
            cardNumber: "",
            cvv: "",
            amount: 1500.00,
            storeName: "Test Store",
            detail: "Purchase from test store"
        }
    },
    created(){

    },
    methods: {
        sendPurchase(){
            axios.post("http://localhost:8080/api/cards/purchase", {cardNumber: this.cardNumber, cvv: this.cvv, amount: this.amount, storeName: this.storeName, detail: this.detail})
            .then(response=> {
                console.log("success")
            })
            .catch(error => {
                console.log(error.response)
            })
        }
    }
    
})
app.mount("#app")