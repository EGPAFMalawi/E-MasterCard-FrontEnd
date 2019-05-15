<template>
    <button v-on:click="logout" class="btn btn-danger">
        Logout
    </button>
</template>

<script>
    export default {
        name: 'LogoutButton',
        methods: {
            logout : function ()
            {   
                sessionStorage.removeItem('patient')
                sessionStorage.removeItem('auth')
                this.$router.push('/login')
            }
        }
    }
</script>
