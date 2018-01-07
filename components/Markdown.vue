
<template>
  <div v-html="dist">
  </div>
</template>

<script>
import {markdown} from 'markdown'
import source from './foo.md'

export default {
  computed: {
    dist () {
      return markdown.toHTML(source)
    }
  }
}
</script>