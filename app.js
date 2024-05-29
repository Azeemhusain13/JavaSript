const vm = Vue.createApp({
    data()
        {
            return {
                firstName: 'John',
                lastName: 'Doe',
                url: 'https://google.com',
                age: 10
            }
        },
        methods: {
            fullName() {
                return `${this.firstName} ${this.lastName}`
            },
            increment(){
                this.age++
            },
            decrement(){
                this.age--
            }
        },
        computed: {
            fullNameComputed(){
                console.log('This is a computed property')
                return `${this.firstName} ${this.lastName}`
            }
        },
        watch: {
            age(newVal, oldVal) {
                if( newVal < 10) {
                    alert("age is less than 10")
                }

            }
        }
}).mount('#app')

// without a proxy
// setTimeout(() =>
// {
//     vm.firstName = "Raam"
// }, 4000)