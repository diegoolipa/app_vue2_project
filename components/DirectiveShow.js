
  
  let DirectiveShow = {
    template: `<div> 
                  <h1 v-text="title"></h1>
                  <p v-show=mostrar v-html="mensaje"></p>
                  <button @click='toggleBoolean' >Click</button>
              </div>`,
    data: () => {
      return {
        title: "v-show",
        mensaje: "<b> hola desde directive v-show</b>",
        mostrar: false,
      };
    },
    methods: {
      toggleBoolean() {
        this.mostrar = !this.mostrar;
      },
    },
  };
  