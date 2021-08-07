<!-- src/routes/index.svelte -->
<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/posts");
    const data = await res.json();

    return { props: { posts: data } };
  };
</script>

<script lang="ts">
  import type { Post } from "$lib/types";
  import { goto } from "$app/navigation";
  export let posts: Post[];
  let q = "";
  import Fuse from "fuse.js";
  import { postStore } from "$lib/postStore";
  const fuse = new Fuse(posts, { keys: ["title", "content"] });
  $: $postStore = q ? fuse.search(q).map((x) => x.item) : posts;
  let style = true;
</script>

<div class="my-4">
  <h1 class="text-center text-3xl font-bold">
    PBOX

    <button on:click={() => (style = !style)}>{style ? "🟣" : "⚪"}</button>
  </h1>
</div>
<div class="grid place-items-center">
  <input
    type="text"
    placeholder="Search"
    bind:value={q}
    class="items-center text-3xl font-bold outline-none"
  />
</div>

<div class="container mx-auto mt-4">
  {#each $postStore as post}
    {#if style}
      <div class="shadow-md my-4 p-4 rounded-md hover:shadow-xl">
        <a sveltekit:prefetch href="/blog/{post.id}">
          <h4 class="font-bold hover:text-purple-400">{post.title}</h4>
          <p class="mt-2 text-gray-800">{post.url}</p>
          <p class="text-gray-500">By: {post.author?.username}</p>
        </a>
      </div>
    {:else}
      <a
        href={post.url}
        class="hover:bg-indigo-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 my-4"
      >
        <dl
          class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center"
        >
          <div>
            <dt class="sr-only">Title</dt>
            <dd class="group-hover:text-white leading-6 font-medium text-black">
              {post.title}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd
              class="group-hover:text-indigo-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"
            >
              {post.url}
            </dd>
          </div>
          <div class="col-start-2 row-start-1 row-end-3">
            <dt class="sr-only">Users</dt>
            By:{post.author?.username}
          </div>
        </dl>
      </a>
    {/if}
  {/each}
</div>
