Vue.component('counter-component', {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    computed: {
      countStyle() {
        return {
            color: this.count > 0 ? '#42a800' : this.count < 0 ? '#FF0000' : '#000000'
        };
      }
    },
    template: `
        <div>
            <p :style="countStyle">Current Count: {{ count }}</p>
            <button @click="increment">Increment</button>
            <button @click="decrement">Decrement</button>
        </div>
    `
});

new Vue({
    el: '#app'
});