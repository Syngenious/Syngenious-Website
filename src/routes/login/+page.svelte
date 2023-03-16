<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<script lang="ts">
    import type {PageData} from './$types';

    export let data: PageData;
    
    console.log(data);
</script>

<div class="grid h-[80vh] place-items-center">
   <a href="https://discord.com/api/oauth2/authorize?client_id=1015009145482649760&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=identify" class="bg-[#635def] px-5 py-3 rounded-md hover:bg-[#433fa2] transition">
        <span class="text-white font-semibold text-xl"><i class="fa-brands fa-discord mr-2"></i> Login with Discord</span>
    </a> 
</div>