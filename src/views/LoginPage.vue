<template>
   <!-- <div style="min-height:100vh;background:linear-gradient(to left, #000046,#1CB5E0)">-->
    <div class="flex items-center bg-grey-lighter" style="min-height:100vh;">
        <div class="mx-auto w-1/4 bg-white border border-white shadow-md px-8 py-10 rounded align-middle" >
            <div class="border-bottom border-red mb-4">
                <p class="font-sans text-center text-xl text-teal-dark">HIV Mobile Supervision Tool</p>
                <p class="font-sans text-center text-lg font-light my-3">Login<br><font-awesome-icon icon="lock" size="2x" class="mt-5"/> </p>
            </div>
            <div>
                <LoginForm />
            </div>
            <div class="pt-5">
                <p class="text-center text-sm text-grey-dark">Copyright LIN, 2018</p>
            </div>
        </div>
    </div>
</template>

<script>

    import LoginForm from  '@/components/LoginForm'

    export default {
        name: 'LoginPage',

        components : {
            LoginForm
        }
    }
</script>
