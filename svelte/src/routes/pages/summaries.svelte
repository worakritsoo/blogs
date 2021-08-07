<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("/articles");
    return { props: { items: await res.json() } };
  }
</script>

<script>
  let name;
  let q = "",
    max,
    group;
  export let items = [];
  import * as _ from "lodash";
  import { entries } from "lodash";
  let color = [
    "primary",
    "secondary",
    "light",
    "success",
    "danger",
    "tertiarry",
  ];
  // your script goes here

  let categories = _.countBy(items, "category");
</script>

{#each Object.entries(categories) as [cate, count]}
  <!-- content here -->
  <ion-item>
    <ion-badge slot="start">{count}</ion-badge>
    <ion-label>{cate}</ion-label>
  </ion-item>
{/each}
{#each items as item, i}
  <ion-card class="group">
    <ion-card-header>
      <ion-card-subtitle>
        <a href={item.url}>{item.url}</a>
      </ion-card-subtitle>
      <ion-card-title>{item.title}</ion-card-title>
    </ion-card-header>
    <ion-card-content class="truncate group-hover:whitespace-pre-line">
      {item.content}
    </ion-card-content>
  </ion-card>
{:else}
  <!-- empty list -->
  No list
{/each}

<style>
  /* your styles go here */
</style>

