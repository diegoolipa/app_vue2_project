Vue.component('computed-properties', {
    template: `<div>
                    <h1>{{message}}</h1>
                    <p>{{title}}</p>
                    <p>{{user.nombre}} {{user.apellido}}</p>
                    <p>{{nombreCompleto}} y mi edad es: {{edad}}</p>
                    
                </div>`,
    data: () => {
        return {
            message: 'Computed',
            title: 'Hola desde Computed',
            user: {
                nombre: 'Diego',
                apellido: "Lipa",
                anio: '1996'
            }
        }
    },
    computed: {
        nombreCompleto() {
            return `${this.user.nombre} ${this.user.apellido} desde Computed`;
        },

        edad() {
            let fecha = new Date();
            return fecha.getFullYear() - this.user.anio;
        }
    }
});