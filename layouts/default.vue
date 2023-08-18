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
  background-color: #fff;
}


.content-container {
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6, span, p, a, button {
}

span, p, a, button {
  font-family: Raleway, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Inter var, sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

</style>