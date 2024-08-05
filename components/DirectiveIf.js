let DirectiveIf = {
    template: `<div> 
                  <h1 v-text="title"></h1>
                  <p v-if=mostrar v-html="mensaje"></p>
                  <p v-else-if=user.vip v-html="mensajeVip"></p>
                  <p v-else=mostrar v-html="mensajedefauld"></p>
                  <button @click='toggleBoolean' >Click</button>
              </div>`,
    data: () => {
      return {
        title: "v-if v-else-if v-else",
        mensaje: "<b> hola desde directive v-if </b>",
        mensajeVip: "<b> hola desde directive v-if Vip</b>",
        mensajedefauld: "<b> defaud directive v-else</b>",
        mostrar: false,
        user:{
            permission:false,
            vip: true
        }
      };
    },
    methods: {
      toggleBoolean() {
        this.mostrar = !this.mostrar;
      },
    },
  };