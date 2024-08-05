Vue.component('props-comp', {
    template: `<div class="container">
                    <div class="alert alert-primary" role="alert">
                        {{message}} - {{title}}
                    </div>
                    <h5>Bienvenido : {{user}}</h5>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4" v-for="(peli, key) in peliculas">
                            <movie-comp :ref="'pelicula-'+peli.id"
                                :key="key"
                                :id="peli.id"
                                :titulo="peli.title"
                                :synopsis="peli.synopsis"
                                :cover="peli.cover"
                                msg="hola"
                                :like.sync="peli.like"
                                @toggleLikeVar="onToggleLike"
                            />
                        </div>
                    </div>
                    <input v-model="user">
                    <movie-fav ref="peliculaFav" v-show="mostrarLike"/>
                </div>`,
    data: () => {
        return {
            user: 'Diego',
            message: 'Peliculas Props .sync',
            title: 'Hola desde Componente Props .sync',
            peliculas: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false,
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false,
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false,
                }
            ],
            mostrarLike: false
        }
    },
    watch: {
        user(newVal, oldVal) {
            console.log('ff')
        },
        like(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    components: {
        MovieComp,
        MovieFav
    },
    methods: {
        onToggleLike(data) {
            let peliculasLike = this.peliculas.find(peli => peli.id === data.id)
            peliculasLike.like = data.like;
            if (data.like) {
                alert("Se Agrego a favoritos la pelicula : " + data.titulo)
//                this.mostrarLike = true;
                setTimeout(() => {
                    this.mostrarLike = false;
                }, 2000)
            } else {
                alert("Se Quito de favoritos la pelicula : " + data.titulo)
            }
        },
        fnPapa() {
            console.log('hola soy el papa');
            alert('hola soy el papa');
        },
    },

    mounted() {
        console.log('accediendo al hijo')
        console.log(this.$refs.peliculaFav.mensaje);
        //this.$refs.peliculaFav.mensaje = 'jajaja te modifique'
        this.$refs.peliculaFav.fnHijo();
    }
})
;