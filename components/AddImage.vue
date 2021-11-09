<template lang="pug">
  b-modal( :active='active' @close='$emit("close")' )
    .card
      .card-content
        form.form( @submit.prevent='addSlide' )
          b-field( 
            v-for='({ label, prop }, i) in fields'
            :key='i'
            label-position="on-border"
            :label='label' )
            b-input( v-model='slide[prop]' )
          b-field
            b-upload.file-label( v-model='image' @input='createImage' )
              span.file-cta
                b-icon.file-icon( pack="fas" icon="upload" )
                span.file-label Загрузить изображение
              span.file-name( v-if='image' ) {{ image.name }}
          b-field
            button.button.is-success.is-fullwidth Добавить
</template>

<script>
export default {
  name: 'AddSlide',
  data() {
    return {
      fields: [
        { label: 'Заголовок', prop: 'title' },
        { label: 'Подзаголовок', prop: 'description' },
        { label: 'Автор', prop: 'author' }
      ],
      slide: {
        title: null,
        description: null,
        author: null,
        url: null
      },
      image: null
    }
  },
  computed: {
    hasEmpty() {
      let check = Object.keys(this.slide).map(item => item && item !== null && item.length > 0 ? true : false)
      return check.filter(item => item == false).length > 0
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addSlide() {
      if (this.hasEmpty) return this.$buefy.snackbar.open({ message: "Заполни все поля!" })

      this.$store.commit('addSlides', [ this.slide ])

      this.slide = {
        title: null,
        description: null,
        author: null,
        url: null
      }
      this.image = null
      this.$emit("close")
      this.$emit("added")
    },
    createImage(file) {
			if (file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'image/jpeg') {
				this.slide.url = null
				return this.$buefy.snackbar.open({ message: "Допускаются только изображения .png, .jpg и .jpeg формата" })
			}
      var reader = new FileReader()

      reader.onload = (e) => {
        this.slide.url = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>