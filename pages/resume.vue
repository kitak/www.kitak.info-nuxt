<template>
  <main id="content">
    <MdArticle :source-md="resumeMd"></MdArticle>
  </main>
</template>

<script>
import MdArticle from '~/components/MdArticle.vue'
import resumeMd from '~/content/resume.md'

export default {
  data () {
    return {
      resumeMd
    }
  },
  components: {
    MdArticle
  }
}
</script>