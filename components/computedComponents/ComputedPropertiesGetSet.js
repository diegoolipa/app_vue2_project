Vue.component('computed-properties-get-set', {
    template: `<div>
                    <h1>{{message}}</h1>
                    <p>{{title}}</p>
                    <p>{{user.nombre}} {{user.apellido}}</p>
                    <p>{{nombreCompleto}} y mi edad es: {{edad}}</p>

                </div>`,
    data: () => {
        return {
            message: 'Computed Propierties Get Set',
            title: 'Hola desde Computed Propierties Get Set',
            user: {
                nombre: 'Diego',
                apellido: "Lipa",
                anio: '1996'
            }
        }
    },
    computed: {
        nombreCompleto: {
            get() {
                return `${this.user.nombre} ${this.user.apellido} desde Computed`;
            },
            set(e) {
                let name = e.split(' ');
                this.user.nombre = name[0];
                this.user.apellido = name[1];
                console.log(e);
            }
        },

        edad() {
            let fecha = new Date();
            return fecha.getFullYear() - this.user.anio;
        }
    }
});