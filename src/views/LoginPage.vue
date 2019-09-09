<template>
   <!-- <div style="min-height:100vh;background:linear-gradient(to left, #000046,#1CB5E0)">-->
    <div >
         <div class="container my-5 ">
             <div class="row d-flex justify-content-center">
                 <div>
                    <h3>E-Mastercard V3</h3>
                    <img class="logo-mca" src="../assets/699px-Coat_of_arms_of_Malawi.svg.png" alt="">
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
