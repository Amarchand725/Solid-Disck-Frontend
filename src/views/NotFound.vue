<template>
  <div class="not-found-container">
    <div class="not-found-card">
      <h1 class="not-found-title">404 - Page Not Found</h1>
      <p class="not-found-message">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <router-link to="/" class="home-button">Go to Homepage</router-link>
    </div>
  </div>
</template>

<script setup>
// No logic needed for static 404 page
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9fafb;
}

.not-found-card {
  text-align: center;
  background: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.not-found-title {
  font-size: 2rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.125rem;
  color: #34495e;
  margin-bottom: 1.5rem;
}

.home-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #2980b9;
}
</style>
