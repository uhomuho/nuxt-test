export const state = () => ({
  slides: []
})

export const mutations = {
  addSlides: (state, items) => state.slides = state.slides.concat(items)
}

export const actions = {
  getImages({ commit }) {
    return this.$axios.$get('https://picsum.photos/v2/list?limit=3')
      .then(res => {
        commit('addSlides', res.map(item => ({
          title: 'Lorem ipsum dolor',
          description: 'Suspendisse rhoncus at lacus volutpat',
          author: item.author,
          url: item.download_url
        })))
      })
  }
}