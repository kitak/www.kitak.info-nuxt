
<template>
  <article class="page" v-html="generatedHTML">
  </article>
</template>

<script>
import {markdown} from 'markdown'

export default {
  props: ['sourceMd'],
  computed: {
    generatedHTML () {
      return markdown.toHTML(this.sourceMd)
    }
  }
}
</script>