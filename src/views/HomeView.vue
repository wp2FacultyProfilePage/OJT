<script setup>
</script>

<template>
  <main>
    <h1>This is Login</h1>
    <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="auth-form">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
      
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
      <RouterLink to="/about"> <button type="submit">Login</button> </RouterLink>
      
    </form>
  </div>
  </main>
</template>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.auth-form label {
  font-weight: bold;
}

.auth-form input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.auth-form button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth-form button:hover {
  background-color: #45a049;
}
</style>
