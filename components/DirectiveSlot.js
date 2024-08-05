let DirectiveSlot = {
    template: `<div>
                    <hr>
                  <h1 v-text="title"></h1>
                  <p v-html ="mensaje"></p>
                    <button-comp>
                        <template v-slot:accion>
                            Dar click gg
                        </template>
                        <template v-slot:elemento>
                            Modal
                        </template>
                    </button-comp>
                  
              </div>`,
    data: () => {
        return {
            title: "Slot",
            mensaje: "<b> hola desde directive Slot</b>",
        };
    },
    components: {
        buttonComp
    }
};