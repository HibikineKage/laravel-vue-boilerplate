<template>
  <div>
    <main>
      <div class="container">
        <RouterView/>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    console.log('Component mounted.');
  },
};
</script>
