<template>
    <header class="shadow-sm">
        <nav class="nav justify-content-center bg-light">
            <a class="navbar-brand" style="color: #d6d61a">
                <h5>ART Mastercard Back-Data App</h5>
            </a>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse  justify-content-center navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/"><span class="nav-link">Home <span class="sr-only">(current)</span></span></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Reports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <LogoutButton></LogoutButton>
                    </a>
                </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import LogoutButton from  '@/components/LogoutButton'

    export default {
        
        name: 'NavBar',
        components : {
            LogoutButton
        }
    }
</script>
