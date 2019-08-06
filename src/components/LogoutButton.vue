<template>
    <button v-on:click="logout" class="btn btn-danger">
        Logout
    </button>
</template>

<script>
    export default {
        name: 'LogoutButton',
        methods: {
            logout (){   
                sessionStorage.removeItem('auth')
                localStorage.removeItem('vuex')
                this.$router.push('/login')
            }
        }
    }
</script>
