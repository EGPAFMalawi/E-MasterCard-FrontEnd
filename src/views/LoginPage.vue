<template>
   <!-- <div style="min-height:100vh;background:linear-gradient(to left, #000046,#1CB5E0)">-->
    <div>
         <div class="container my-3">
             <div class="row d-flex justify-content-center">
                 <div>
                    <p class="font-sans text-center text-xl text-teal-dark">ART Mastercard App</p>
                    <p class="font-sans text-center text-lg font-light my-3">Login<br><font-awesome-icon icon="lock" size="2x" class="mt-5"/> </p>
        
                 </div>
                  
             </div>
           </div>
        <div class="container my-5">
            <div class="row d-flex justify-content-center align-items-center">
                <LoginForm />
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
