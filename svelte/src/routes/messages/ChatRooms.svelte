<script>
  import { db } from "$lib/database/firebase";
  import { user } from "$lib/userStore";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  let message = "";
  const query = db.collection("chats").orderBy("sentAt");
  const chats = collectionData(query, "id").pipe(startWith([]));

  function sendMessage() {
    db.collection("chats").add({
      uid: user?.["uid"],
      message: message,
      avatar: user?.["photoURL"],
      sentAt: +new Date(),
    });
    message = "";
  }

  function clear() {
    db.collection("chats");
  }
</script>

<div class="shadow-md grid gap-2">
  {#each $chats as chat, i}
    {#if chat.uid == user?.["uid"]}
      <div class="flex flex-row-reverse">
        <img src={chat.avatar} alt="avatar" class="w-12 rounded-full" />
        {chat.message}
      </div>
    {:else}
      <div class="flex ">
        <img src={chat.avatar} alt="avatar" class="w-12 rounded-full" />
        {chat.message}
      </div>
    {/if}
  {/each}
</div>

<button on:click={clear}>Clear</button>

<form on:submit|preventDefault={sendMessage}>
  <input type="text" bind:value={message} placeholder="Send message" />
</form>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
  .gap-2 {
    gap: 0.5rem /* 8px */;
  }
  .grid {
    display: grid;
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .flex {
    display: flex;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .w-12 {
    width: 3rem /* 48px */;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
</style>
