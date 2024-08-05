let DirectiveOnce = {
    template: `<div>
                    <hr>
                    <h1 v-text="title" v-once></h1>
                    <p v-html="mensaje" v-once></p>
                  
              </div>`,
    data: () => {
        return {
            title: "v-once",
            mensaje: "<b> hola desde directive v-once</b>",
        };
    },
};