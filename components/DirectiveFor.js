
  
  let DirectiveFor = {
    template: `<div> 
                  <h1 v-text="title"></h1>
                  <p v-html="mensaje"></p>

                  <p > Lista de un array</p>
                  <ul>
                    <li v-for="(color, index) in lista" :key="index">{{ color }}</li>
                  </ul>

                  <p > Lista de un objeto</p>
                  <ul>
                    <li v-for="(item, key, index) in objetoLista" :key="index">{{ key }}: {{item}}</li>
                  </ul>

                  <p > Lista de un Array de objetos</p>
                  <ul>
                    <li v-for="(item, index) in otraLista" :key="index">
                    Nombre: {{item.name}}
                    Apellido: {{item.apellido}}
                    Edad: {{item.edad}}
                    </li>
                  </ul>

              </div>
`,
    data: () => {
      return {
        title: "v-for",
        mensaje: "<b> hola desde directive v-for</b>",
        lista:[
            'Red',
            'Yellow',
            'Green',
            'Blue',
            'Purple',
            'Orange',
            'Black',
        ],
        objetoLista:{
            name: ' Diego',
            apellidos: 'Lipa',
            edad: 25
        },
        otraLista:[
            {
                name:'Die',
                apellido: 'Lipa',
                edad: 25
            },
            {
                name:'Juan',
                apellido: 'Perez',
                edad: 30
            },
            {
                name:'Maria',
                apellido: 'Gomez',
                edad: 28
            }
        ]
      };
    },
    methods: {
      toggleBoolean() {
        this.mostrar = !this.mostrar;
      },
      
      
    },
  };
  