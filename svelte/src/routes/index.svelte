<script>
  import Profile from "./user/Profile.svelte";

  import { auth, googleProvider } from "$lib/database/firebase";
  import { authState } from "rxfire/auth";
  import ChatRooms from "./messages/ChatRooms.svelte";
  import { user } from "$lib/userStore";

  const unsubscribe = authState(auth).subscribe((usr) => ($user = usr));

  async function login() {
    auth.signInWithPopup(googleProvider);
  }

  function logout() {
    auth.signOut();
  }
</script>

<!-- markup (zero or more items) goes here -->

{#if $user}
  <Profile {logout} />

  <ChatRooms />
{:else}
  <ion-button on:click={login}>
    <ion-icon slot="start" name="log-in" />
    Sign In with Google
  </ion-button>
{/if}
