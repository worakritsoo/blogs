<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const res = await fetch('/posts');
    const data = await res.json();

    return { props: { posts: data } };
  };
</script>

<script>
  import '../app.postcss';
  import { onMount } from 'svelte';
  import { jwt, user } from '$lib/user';
  import { API } from '$lib/Env';
  import { token } from '$lib/postStore';
  import Login from '$lib/components/Login.svelte';
  import Searchbox from '$lib/components/Searchbox.svelte';
  export let posts = [];
  let loading = true;

  onMount(async () => {
    // Check if 'token' exists in localStorage
    if (!localStorage.getItem('token')) {
      loading = false;
      return { props: { user: null } };
    }

    // Fetch the user from strapi
    const res = await fetch(API + '/auth/me', {
      headers: { Authorization: 'Bearer ' + $jwt },
    });
    loading = false;
    if (res.ok) {
      $user = await res.json();
    }
  });

  async function logout() {
    $user = null;
  }
</script>

<nav class="bg-white border-b border-gray-500 py-6 px-4 w-full">
  <div class="flex items-center justify-between container mx-auto">
    <a href="/" class="font-bold no-underline">P B O X</a>
    <Searchbox {posts} />

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
{#if $user}
  {#if !loading}
    <slot />
  {/if}
{:else}
  <Login />
{/if}
