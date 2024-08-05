Vue.component('vue-directives', {
    template: `<div> 
        <p v-text="message"></p>
        <a v-bind:href="link.href" v-text="link.text"></a>
        <a :href="link.href" :title="link.title" v-text="link.text"></a>
        <directive-html/>
        <directive-show/>
        <directive-if/>
        <directive-for/>
        <directive-on/>
        <directive-model/>
        <directive-slot/>
        <directive-once/>
    </div>`,
    data: () => {
        return {
            message: 'v-text and v-bind (v-bind o :)',
            link: {
                text: 'vueJS Home',
                href: 'https://vuejs.org/',
                title: 'Documentacion vueJS'
            }
        }
    },

    components: {
        DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn,
        DirectiveModel,
        DirectiveSlot,
        DirectiveOnce,
    }
});