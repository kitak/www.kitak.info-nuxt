<template>
  <div>
    <MyHeader></MyHeader>
    <main id="content">
      <MdArticle :source-md="resumeMd"></MdArticle>
    </main>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import MdArticle from '~/components/MdArticle.vue'
import resumeMd from '~/content/resume.md'

export default {
  data () {
    return {
      resumeMd
    }
  },
  components: {
    MyHeader,
    MdArticle,
    MyFooter
  }
}
</script>