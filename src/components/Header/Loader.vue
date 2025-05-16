<template>
  <div class="loader-overlay">
    <img src="/assets/image/Spinner-2.gif" alt="Loading..." class="spinner-gif" />
  </div>
</template>

<style scoped>
.loader-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: all; /* block interaction */
}

.spinner-gif {
  width: 64px;
  height: 64px;
}
</style>
