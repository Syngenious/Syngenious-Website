<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
    
    let isLoginForm = true;


  // Handle form submission for login
  function handleLoginSubmit(event: Event) {
    event.preventDefault();
    // TODO: Handle login form submission
  }

  // Handle form submission for sign-up
  function handleSignupSubmit(event: Event) {
    event.preventDefault();
    // TODO: Handle sign-up form submission
  }

  function toggleLoginForm() {
    isLoginForm = !isLoginForm;
  }
</script>

<div class="grid h-[80vh] place-items-center">
    {#if isLoginForm}
    <!-- Login Form -->
    <form on:submit={handleLoginSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <h1 class="text-3xl font-bold mb-4">Sign in</h1>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="username">
                Username or Email
            </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username or Email" />
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
        </div>
        <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
        </button>
        <span class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" on:click={toggleLoginForm}>
            Create an account
        </span>
        </div>
        <div class="mt-4">
        <hr class="border-gray-400">
        <p class="text-center my-4 font-bold">OR</p>
        <a href="https://discord.com/api/oauth2/authorize?client_id=1015009145482649760&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=identify" class="bg-[#635def] px-5 py-3 rounded-md hover:bg-[#433fa2] transition block w-full">
            <span class="text-white font-semibold text-xl"><i class="fa-brands fa-discord mr-2"></i> Sign in with Discord</span>
        </a>
        </div>
    </form>
    {:else}
        <!-- Sign-up Form -->
        <form on:submit={handleSignupSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div class="mb-4">
        <h1 class="text-3xl font-bold mb-4">Create an account</h1>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
        <span class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer" on:click={toggleLoginForm}>
          Sign In
        </span>
      </div>
      <div class="mt-4">
        <hr class="border-gray-400">
        <p class="text-center my-4 font-bold">OR</p>
        <a href="https://discord.com/api/oauth2/authorize?client_id=1015009145482649760&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=identify" class="bg-[#635def] px-5 py-3 rounded-md hover:bg-[#433fa2] transition block w-full">
          <span class="text-white font-semibold text-xl"><i class="fa-brands fa-discord mr-2"></i> Sign up with Discord</span>
        </a>
      </div>
    </form>
  {/if}
</div>
