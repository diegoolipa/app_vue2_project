let DirectiveHtml = {
    template: `<div> 
                  <h1 v-text="title"></h1>
                  <p v-html="mensaje"></p>
                  
              </div>`,
    data: () => {
        return {
            title: "v-show",
            mensaje: "<b> hola desde directive v-show</b>",
        };
    },
};