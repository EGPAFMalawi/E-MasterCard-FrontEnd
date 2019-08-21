<template>
    <header class="shadow-sm">
        <nav class="nav justify-content-center bg-light">
            <a class="navbar-brand" style="color: #d6d61a">
                <h5>E-MasterCard</h5>
            </a>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse  justify-content-between navbar-collapse" id="navbarSupportedContent">
                <div class="nav-start"></div>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/"><span class="nav-link">MasterCards<span class="sr-only">(current)</span></span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/reports"><span class="nav-link">Reports<span class="sr-only">(current)</span></span></router-link>
                    </li>
                    <!--<li class="nav-item">
                        <router-link to="/hts-records"><span class="nav-link">HTS<span class="sr-only">(current)</span></span></router-link>
                    </li>-->
                </ul>
                <div class="nav-end">
                    <span style="font-size:20px;cursor:pointer" @click="toggleSidebar()">
                        <font-awesome-icon icon="cog"/>
                        Settings
                    </span>
                </div>
            </div>
        </nav>

        <div id="mySidenav" class="sidenav" v-if="showSidebar" v-on-clickaway="clickeAway">
            <a href="javascript:void(0)" class="closebtn" @click="toggleSidebar()">&times;</a>
                <router-link to="/users">
                    <span>Manage Users<span class="sr-only">(current)</span></span>
                </router-link>
                <router-link to="/facilities">
                    <span>Facility Details</span>
                </router-link>
            <a href="#">
                <LogoutButton></LogoutButton>
            </a>
        </div>
    </header>
</template>

<script>
    import LogoutButton from  '@/components/LogoutButton'
    import { mixin as clickaway } from 'vue-clickaway';


    export default {
        mixins: [ clickaway ],
        name: 'NavBar',
        components : {
            LogoutButton
        },
        data: () => {
            return {
                showSidebar: false,
                open: false
            }
        },
        methods: {
            toggleSidebar(){
                this.open = !this.open
                this.showSidebar = !this.showSidebar
            },
            clickeAway(e){
                if (e.target.className !== 'sidenav')
                    this.toggleSidebar()
            }
        },
    }
</script>
