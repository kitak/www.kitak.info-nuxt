<template>
  <main id="content">
    <MdArticle :source-md="aboutMd"></MdArticle>
  </main>
</template>

<script>
import MdArticle from '~/components/MdArticle.vue'
import aboutMd from '~/content/about.md'

export default {
  data () {
    return {
      aboutMd
    }
  },
  components: {
    MdArticle
  }
}
</script>