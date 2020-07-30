<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Error:404'
    }
  }
}
</script>
<style scoped>
div{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
