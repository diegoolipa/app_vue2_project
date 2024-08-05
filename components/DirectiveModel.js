let DirectiveModel = {
    template: `<div> 
                  <h1 v-text="title"></h1>
                  <p v-html="mensaje"></p>
                  <input
                      tupe="text"
                      v-model="textImput"/>
                  <p>Texto ingresado: {{textImput}}</p>
                  <h4>tipo Checkbok</h4></br>
                  <label for="">
                      <input
                      type="checkbox"
                      v-model="check"/>
                      activado
                  </label>
                  <p>checkbox: {{check}}</p>
                    <label v-for="(pelicula, key) in peliculas" :key="key">
                      <input
                      type="checkbox"
                      :value="pelicula"
                      v-model="favoritos"/>
                      {{pelicula}}
                    </label>
                  <p v-if="favoritos.length > 0"> Lista de Pelicupas Favoritas</p>
                  <ul>
                    <li  v-for="(item, index) in favoritos" :key="index">
                      Pelicula: {{item}}
                    </li>
                  </ul>
              </div>`,
    data: () => {
        return {
            title: "v-model",
            mensaje: "<b> hola desde directive v-model</b>",
            textImput: "Valor inicial",
            check: false,
            favoritos: [],
            peliculas: ['buscando a nemo', 'Titanic', 'Baron rojo']
        };
    },
};