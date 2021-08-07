<script>
  import axios from "axios";
  let username, email, password;
  async function register() {
    // Request API.
    // Add your own code here to customize or restrict how the public can register new users.
    axios
      .post("http://localhost:1337/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }
</script>


<form on:submit|preventDefault={register}>

    <input type="text" bind:value={username} placeholder="username" />
    <input type="email" bind:value={email} placeholder="email" />
    <input type="password" bind:value={password} placeholder="password" />
    <button type="submit">Register  </button>
</form>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
