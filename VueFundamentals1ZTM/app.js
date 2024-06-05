Vue.createApp({
    data: () => ({
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        url: 'https://www.google.com',
        raw_url: '<a href="https://www.google.com">Google</a>',
        age:20
    }),

    methods: {
        increment(){
            this.age++
        },
        updateLastName(msg, event){
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event){
            console.log(event.target.value);
            this.middleName = event.target.value;
            console.log(this.middleName);
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed invoked')
            return `${this.firstName} ${this.middleName} ${this.lastName}`;
        }
    },
    watch:{
        age(newVal, oldVal){
            setTimeout(() => {
                this.age = 20;
            }, 3000);
        }
    }
}).mount('#app');
