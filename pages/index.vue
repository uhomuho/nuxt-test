<template lang="pug">
#homepage
  b-carousel-list(
    v-model='index'
    :data='slides'
    :items-to-show='3')
    template( #item='list' )
      .card
        .card-image
          figure.image.is-4by3
            img( :src='list.url' :alt='list.title' )
        .card-content.is-flex.is-flex-direction-column.is-align-items-flex-start.is-justify-content-space-between
          .content
            p.title.is-4 {{ list.title }}
            p.subtitle.is-6 {{ list.description }}
          .content
            p.is-7.has-text-bold {{ list.author }}
  .mt-4
    .button.is-primary.is-fullwidth( @click='modal = true' ) Добавить картинку
  AddImage( :active='modal' @close='modal = false' @added='index = slides.length' )
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  data() {
    return {
      index: 1,
      modal: false
    }
  },
  computed: {
    ...mapState(['slides'])
  },
  async fetch() {
    const { store } = this.$nuxt.context
    await store.dispatch('getImages')
  }
}
</script>
