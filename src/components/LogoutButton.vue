<template>
    <button v-on:click="logout" class="btn bg-teal-darkest py-2 px-4 mx-auto rounded hover:shadow-md text-white">
        Logout
    </button>
</template>

<script>
    export default {
        name: 'LogoutButton',
        methods: {
            logout : function ()
            {
                sessionStorage.removeItem('auth')
                this.$router.push('/login')
            }
        }
    }
</script>
