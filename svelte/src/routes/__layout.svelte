<script>
  import "../app.postcss";
</script>

<header class="fixed bg-white w-full p-4 z-10 shadow-md">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</header>

<main>
  <div class="pt-16">
    <slot><!-- optional fallback --></slot>
  </div>
</main>
