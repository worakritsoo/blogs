<script>
  // your script goes here
  let blog = {
    title: "",
    url: "",
    content: "",
    description: "",
    category: [""],
    author: "",
  };
</script>

<!-- markup (zero or more items) goes here -->

<div class="grid max-w-md shadow-md gap-4 drop-shadow-md p-2 m-auto">
  <input type="text" maxlength="40" placeholder="title" />
  <input type="url" placeholder="url" />
  <input type="text" maxlength="40" placeholder="description" />
  <textarea class="w-full outline-none" maxlength="200" />
</div>

<style lang="postcss">
  /* your styles go here */
  input {
    @apply outline-none;
  }
</style>
