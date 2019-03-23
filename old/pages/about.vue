<template>
  <div>
    <MyHeader></MyHeader>
    <main id="content">
      <MdArticle :source-md="aboutMd"></MdArticle>
    </main>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MdArticle from '~/components/MdArticle.vue'
import MyHeader from '~/components/MyHeader.vue'
import MyFooter from '~/components/MyFooter.vue'
import aboutMd from '~/content/about.md'

export default {
  data () {
    return {
      aboutMd
    }
  },
  components: {
    MyHeader,
    MdArticle,
    MyFooter
  }
}
</script>