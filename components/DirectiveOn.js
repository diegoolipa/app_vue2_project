let DirectiveOn = {
  template: `<div > 
                  <h1 v-text="title"></h1>
                  <p v-html="mensaje"></p>
                  <p>{{pelicula}}</p>
                  <input tupe="text" @keydown="alert"/>
                  Disponibles: <p>{{entradas}}</p>
                  <button v-on:click.stop='comprarEntrada' >Comprar</button>
                    <div>
                    <input tupe="text" :value="textImput"/>
                    </div>
              </div>`,
  data: () => {
    return {
      title: "v-on - @",
      mensaje: "<b> hola desde directive v-on</b>",
      pelicula: "dora la exploradora",
      entradas: 5,
      textImput: "valor inicial",
    };
  },
  methods: {
    alert() {
      //debugger
      alert(this.title, this.mensaje);
    },
    comprarEntrada() {
      if (this.entradas > 0) {
        this.entradas--;
        alert("Compra exitosa!");
      } else {
        alert("No hay entradas");
      }
    },
  },
};
