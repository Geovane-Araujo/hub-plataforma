<template>
  <div class="home">
    Home
    <button @click="onClickRoute">Clique em min</button>
    <iframe id="ci"></iframe>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup () {
    const onClickRoute = () => {
      document.getElementById('ci').src = 'https://hub.adonaisoft.com.br/oficinaplus/'
    }
    return { onClickRoute }
  },
  components: {
  }
}
</script>
<style>
iframe{
  height: 500px;
  width: 500px;
  margin: 20px;
}
</style>
