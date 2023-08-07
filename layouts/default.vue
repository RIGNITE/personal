<template>
  <!-- bg-slate-400 or bg-zinc-600 -->
      <Header />
      <div class="content-container">
        <slot />
      </div>
      <Footer />  
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  min-height: 100vh;
}

span, p, a, button {
  font-family: Raleway, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Inter var, sans-serif;
}

</style>