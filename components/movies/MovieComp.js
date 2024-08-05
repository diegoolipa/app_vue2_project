let MovieComp = {
    template: `<div>
                    
                    <div class="card">
                      <img :src="cover" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h2 class="card-title">{{titulo | upper}}</h2>
                        <p class="card-text">{{synopsis | cortar}}</p>
                        <button class="btn" :class="btnStatus"  @click="toggleLike"  >
                            <span v-text="like?'Favorito ':'Agregar a favoritos '"></span>
                            <i class=" fa-heart" :class="{'fa-regular':!like, 'fa-solid':like}"></i>
                        </button>
                      </div>
                    </div>
              </div>`,
//    props: [
//        'id',
//        'titulo',
//        'synopsis',
//        'cover'
//    ]
    data() {
        return {
            className: {
                'btn-like': true,
                'btn-like2': false,
                miClase: true,
            },
            className2: 'btn-like2',
        }
    },
    watch: {
        like(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    computed: {
        btnStatus() {
            return this.like ? 'btn-like' : 'btn-light';
        }
    },

    props: {
        id: {
            type: Number,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            default: "No tiene synopsis"
        },
        cover: {
            type: String,
            required: true
        },
        msg: {
            type: String,
            required: true
        },
        like: {
            type: Boolean,
            required: true,
            default() {
                return false;
            }
        }

    },
    filters: {
        upper(value) {
            return value.toUpperCase();
        },
        cortar(value) {
            const cant = 40;
            if (value.length >= cant) {
                return value.substring(0, cant) + '...';
            }
            return value
        }
    },
    methods: {
        toggleLike() {
//            this.like = !this.like;
//            let data = {
//                id: this.id,
//                like: !this.like,
//                titulo: this.titulo,
//            }
            let pelicula = this.$parent.peliculas.find(m => m.id === this.id)
            if (!this.like) {
                alert("Se Agrego a favoritos la pelicula vv : " + this.titulo)
//                console.log(this.$parent)
//                console.log(this.$parent.mostrarLike)
                this.$parent.mostrarLike = !this.like
                setTimeout(() => {
                    this.$parent.mostrarLike = !this.like
                }, 2000)
            } else {
                alert("Se Quito de favoritos la pelicula vv : " + this.titulo)
            }
            pelicula.like = !this.like

            //accediendo a papa
            this.$parent.fnPapa();

//            this.$emit('toggleLikeVar', data)
        },


    }
};