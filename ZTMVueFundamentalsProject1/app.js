let vm = Vue.createApp({
    data() {
        return {
            perspective:'0',
            rotatex: '0',
            rotatey: '0',
            rotatez: '0',
        }
    },

    methods: {
        reset() {
            this.perspective = '100';
            this.rotatex = '0';
            this.rotatey = '0';
            this.rotatez = '0';
        },
        copy(){
            let text = `transform: ${this.boxStyle.transform};`;
            navigator.clipboard.writeText(text);
            alert('Copied to clipboard');
        }
    },
        computed: {
            boxStyle() {
                return{
                    transform: `perspective(${this.perspective}px) rotateX(${this.rotatex}deg) rotateY(${this.rotatey}deg) rotateZ(${this.rotatez}deg)`
                }
            
            }
        }
    }).mount('#app');
