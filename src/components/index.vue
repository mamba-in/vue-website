<template>
    <div>
      <banner></banner>
      <middlebar></middlebar>
      <mainpart></mainpart>
      <partner></partner>
    </div>
</template>

<script>
  import banner from './banner';
  import middlebar from './middlebar';
  import mainpart from './mainpart';
  import partner from './partner';
    export default {
        name: "index",
        components:{
          banner,
          middlebar,
          mainpart,
          partner
        }
    }
</script>

<style scoped>

</style>
