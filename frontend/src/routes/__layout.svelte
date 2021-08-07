<!-- src/routes/__layout.svelte -->
<script lang="ts">
  import "../app.postcss";
  import userStore from "$lib/user";
  import type { User } from "$lib/types";
  import { onMount } from "svelte";
  import user from "$lib/user";
  import { API } from "$lib/Env";
  import { token } from "$lib/postStore";

  let loading = true;

  onMount(async () => {
    // Check if 'token' exists in localStorage
    if (!localStorage.getItem("token")) {
      loading = false;
      return { props: { user: null } };
    }

    // Fetch the user from strapi
    const res = await fetch(`${API}/auth/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const user: User = await res.json();
    loading = false;
    if (res.ok) {
      $userStore = user;
    }
  });

  async function logout() {
    $user = "";
    $token = "";
  }
</script>

<nav class="bg-white border-b border-gray-500 py-6 px-4 w-full">
  <div class="flex items-center justify-between container mx-auto">
    <a href="/" class="font-bold no-underline">P B O X</a>
    <section>
      {#if !$user}
        <a href="/login" class="font-mono no-underline">Login</a>
        <a href="/register" class="font-mono no-underline">Register</a>
      {:else}
        <a href="/blog/new" class="font-mono no-underline mr-3">New</a>
        <span class="font-mono text-gray-500">{$user.username}</span>
        <button on:click={logout}>Logout</button>
      {/if}
    </section>
  </div>
</nav>
{#if !loading}
  <slot />
{/if}
