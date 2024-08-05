Vue.component('hello-world',{
    template: `<div> <h1>{{message}}</h1> <p>{{title}}</p> </div>`,
    data: () => {
        return {
            message: 'Welcome to Vue.js!',
            title:'Diego Frank Lipa Choque'
        }
    }
});