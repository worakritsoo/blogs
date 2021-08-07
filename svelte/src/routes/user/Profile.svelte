<script>
  import { user } from "$lib/userStore";

  let displayName = $user?.["displayName"];
  let photoURL = $user?.["photoURL"];
  let uid = $user?.["uid"];
  export let logout;
</script>

{displayName}
<button on:click={logout}>Logout</button>
