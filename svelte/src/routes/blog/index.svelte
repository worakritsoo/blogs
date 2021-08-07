<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/articles");
    return { props: { data: await res.json() } };
  }
</script>

<script>
  export let data = [];
  import Fuse from "fuse.js";
  import { goto } from "$app/navigation";
  const fuse = new Fuse(data, { keys: ["title", "content"] });
  let q = "";
  $: filterSearch = q ? fuse.search(q).map((x) => x.item) : data;
</script>

<section
  class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4"
>
  <header class="flex items-center justify-between">
    <h2 class="text-lg leading-6 font-medium text-black">Blog</h2>
    <button
      on:click={() => goto("/blog/new")}
      class="hover:bg-indigo-200 hover:text-indigo-800 group flex items-center rounded-md bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2"
    >
      <svg
        class="group-hover:text-indigo-600 text-indigo-500 mr-2"
        width="12"
        height="20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
        />
      </svg>
      New
    </button>
  </header>
  <form class="relative">
    <svg
      width="20"
      height="20"
      fill="currentColor"
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
    <input
      class="focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
      type="search"
      aria-label="ค้นหา"
      placeholder="ค้นหา"
      bind:value={q}
    />
  </form>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
  >
    {#each filterSearch as item}
      <!-- content here -->
      <li>
        <a
          href={item?.url}
          target="_blank"
          class="hover:bg-indigo-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
        >
          <dl
            class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center"
          >
            <div>
              <dt class="sr-only">Title</dt>
              <dd
                class="group-hover:text-white leading-10 text-lg font-medium text-black"
              >
                {item.title}
              </dd>
            </div>
            <div>
              <dt class="sr-only">Category</dt>
              <dd
                class="group-hover:text-indigo-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4"
              >
                {item.category}
              </dd>
            </div>
            <div class="col-start-2 row-start-1 row-end-3">
              <dt class="sr-only">Users</dt>
              <dd
                class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2"
              />
            </div>
          </dl>
        </a>
      </li>
    {/each}
    <li class="hover:shadow-lg flex rounded-lg">
      <a
        href="/blog/new"
        class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4"
      >
        New Project
      </a>
    </li>
  </ul>
</section>
