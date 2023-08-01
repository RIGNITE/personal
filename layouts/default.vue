<template>
  <!-- bg-slate-400 or bg-zinc-600 -->
    <div>
      <p>Header</p>
        <slot />
        <p>Footer</p>  
    </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
span, p, a, h1, h2, h3, h4, h5, h6 {
  font-family: Raleway;
}

</style>