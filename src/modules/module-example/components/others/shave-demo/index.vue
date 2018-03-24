<template>
  <div class="module-shave-demo">
    <p ref="selector">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin consequat eros, non posuere justo hendrerit quis. Integer eget risus dapibus, rutrum nisl sit amet, posuere dui. Cras vitae urna ac urna placerat vulputate. Morbi et tortor vel nisi rutrum consequat. Pellentesque non sem cursus, rhoncus nisi sed, semper quam. Phasellus efficitur iaculis auctor. Pellentesque at aliquam leo. Proin diam nulla, mollis vitae nibh sit amet, interdum suscipit risus. Sed fermentum leo enim, a pretium ipsum sollicitudin non. Nunc tempus nunc sed laoreet porttitor. Duis varius purus pellentesque luctus vestibulum. In ex dui, maximus vitae nisl a, molestie malesuada purus. Duis semper est in varius mattis. Pellentesque mollis convallis ex eu pretium.

Vivamus eleifend nunc a sem euismod, non consequat purus varius. Donec hendrerit eleifend ex ac cursus. Ut ac nibh quis massa rhoncus accumsan. Praesent ultricies arcu quis magna tempus, vitae tristique diam euismod. Proin accumsan quam magna, quis condimentum diam lacinia et. Quisque tempor tellus neque, vitae facilisis dui mollis sit amet. Sed sit amet augue ac mi cursus egestas nec gravida velit. Suspendisse eu nunc tristique lorem eleifend vulputate. Aliquam viverra ex sed augue mollis, eu feugiat purus volutpat. Donec consectetur a lectus ac accumsan. Aenean massa libero, pellentesque a ultrices nec, commodo eget neque. Duis blandit augue et tempus egestas. Aenean facilisis lectus eget venenatis blandit. Nam porta sollicitudin erat, at fermentum eros iaculis ut.
    </p>
  </div>
</template>

<script>
import shave from 'shave'
export default {
  data() {
    return {}
  },
  mounted() {
    shave(this.$refs['selector'], 60)
  }
}
</script>

<style scoped>
.module-shave-demo{
  height: 800px;
  width: 100%;
}
</style>
