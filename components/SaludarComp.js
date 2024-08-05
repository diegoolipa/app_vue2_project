Vue.component('saludar-comp',{
    template: `<div @click='upps'> 
        <h1>{{ titulo }}</h1>
        <button @click.stop='saludar' >saludar</button>
    </div>`,
    data: () => {
        return {
            titulo: 'Saludio para ti',
            nombre: 'Diego Lipa',
            pais: 'Peru',
            clickAfuera:'No hagas click en el boton',
        }
    },
    methods: {
        upps() {
          alert(this.clickAfuera);
        },

        saludar(){
            alert(`Hola mi nonbre es ${this.nombre}, bienvenido al mundo de ${this.pais}`);
        }
      },
});