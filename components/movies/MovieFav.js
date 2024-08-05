let MovieFav = {
    template: `<div class="movieFav-wrapper">
                    <div class="movieFav">
                    </div>
              </div>`,
    data() {
        return {
            mensaje: 'Hola vengo desde el hijo movie fav mensaje'
        }
    },

    methods: {
        fnHijo() {
            console.log(this.mensaje);
        }
    },
    beforeCreate() {
        console.log('Eato es antes de que se cree')
    },
    created() {
        console.log('Ya creado')
    },
    beforeMount() {
        console.log('Antes de monmtarse')
    },
    mounted() {
        console.log('ya montado')
        this.$emit("apagador", false)
    },
    beforeUpdate() {
        console.log('Antes de actulizarce')
    },
    updated() {
        console.log('ya actualiozado')
    },
    beforeDestroy() {
        console.log('antes de destruirse')
    },
    destroyed() {
        console.log('Destruido')
    }

};