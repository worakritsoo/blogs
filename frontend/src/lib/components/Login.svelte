<script>
  import { API } from '$lib/Env';
  import { jwt, user } from '$lib/user';

  import axios from 'axios';
  let username, password, email;

  async function login() {
    const res = await fetch(
      `https://dmsxupload.pea.co.th/tests3/api/password/get?username=${username}&password=${password}`
    );
    const data = await res.json();
    console.log(data);
    const [L, fname, lastname, dep, role, ...bio] = data.split(',');

    if (fname && lastname) {
      axios
        .post(API + '/auth/local', {
          identifier: username,
          password: password,
          displayName: `${fname} ${lastname}`,
          profile: `${dep},${role},${bio},${L}`,
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', ($user = response.data.user));
          console.log('User token', ($jwt = response.data.jwt));
        })
        .catch((error) => {
          // Handle error.
          register();
          console.log('An error occurred:', error.response);
        });
    }
  }

  async function register() {
    const res = await fetch(
      `https://dmsxupload.pea.co.th/tests3/api/password/get?username=${username}&password=${password}`
    );
    const data = await res.json();
    console.log(data);
    const [L, fname, lastname, dep, role, ...bio] = data.split(',');
    if (fname && lastname) {
      email = email ? email : username + '@pea.co.th';
      axios
        .post(API + '/auth/local/register', {
          username: username,
          email: email,
          password: password,
          displayName: `${fname} ${lastname}`,
          profile: `${dep},${role},${bio},${L}`,
        })
        .then((response) => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', ($user = response.data.user));
          console.log('User token', ($user = response.data.jwt));
        })
        .catch((error) => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
    }
  }
</script>

<!-- Button to open the modal login form -->
<form on:submit|preventDefault={login}>
  <div
    class="animate container px-5 py-24 mx-auto flex flex-wrap items-center transition-all">
    <div
      class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
        ลงชื่อเข้าใช้
      </h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600"
          >รหัสผู้ใช้</label>
        <input
          type="text"
          bind:value={username}
          id="username"
          name="username"
          class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600"
          >รหัสผ่าน</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          name="password"
          class="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button
        type="submit"
        class="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
        >เข้าสู่ระบบ</button>
    </div>
  </div>
</form>

<style>
  /* Add Zoom Animation */
  .animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s;
  }

  @-webkit-keyframes animatezoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes animatezoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
</style>
