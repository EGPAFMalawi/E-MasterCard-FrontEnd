<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {notificationSystem} from './globals'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "App",
  data() {
    return {
      warningTimeout: 900000,
      timoutNow: 20000,
      warningTimerID: null,
      timeoutTimerID: null,
      notificationSystem
    };
  },
  methods: {
    ...mapActions([
      'setAgeAtARTInit',
      'setDateOfFirstStartingART',
      'clearPatients',
      'resetPatientCardData',
      'selectPatient',
      'setSearchParam',
      'setStartDate',
      'loadSettings' 
      ]),
    startTimer() {
        // window.setTimeout returns an Id that can be used to start and stop a timer
        
      this.warningTimerID = window.setTimeout(this.warningInactive, this.warningTimeout);
            
    },
    
    warningInactive() {
        window.clearTimeout(this.warningTimerID);
        
            this.timeoutTimerID = window.setTimeout(this.idleTimeout, this.timoutNow);

        //display warning here
        const happen = {
            onClosing: (instance, toast, closedBy) => {
                if (closedBy === 'in'){
                    this.resetTimer()
                }

                if (closedBy === 'out'){
                  window.clearTimeout(this.timeoutTimerID);
                  window.clearTimeout(this.warningTimerID);
                  this.idleTimeout()
                }
            },
          }
          
          const buttons = {
            buttons: [
              [
                "<button class='btn btn-warning'><b>LOG ME OUT</b></button>",
                function(instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "out");
                },
                true
              ],
              [
                "<button>DO NOT LOG ME OUT</button>",
                function(instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "in");
                }
              ]
            ]
        }

        Object.assign(notificationSystem.options.question, buttons, happen)
        this.$toast.question(`You are about to be logged out`, 'Warning', notificationSystem.options.question)
    },
    
    resetTimer(e) {
        window.clearTimeout(this.timeoutTimerID);
        window.clearTimeout(this.warningTimerID);
        this.startTimer();
    },
    
    // Logout the user.
    idleTimeout() {
        sessionStorage.removeItem('auth')
        localStorage.removeItem('vuex')
        this.$router.push('/login')
    },
    
    setupTimers () {
        this.startTimer();
    },

    removeListeners(){
        window.clearTimeout(this.timeoutTimerID);
        window.clearTimeout(this.warningTimerID);
        document.removeEventListener("mousemove", this.resetTimer, false);
        document.removeEventListener("mousedown", this.resetTimer, false);
        document.removeEventListener("keypress", this.resetTimer, false);
        document.removeEventListener("touchmove", this.resetTimer, false);
        document.removeEventListener("onscroll", this.resetTimer, false);
        return "removed"
    },

    clearMasterCardData(){
      this.setAgeAtARTInit(null)
      this.setDateOfFirstStartingART(null)
      this.clearPatients()
      this.resetPatientCardData()
      this.selectPatient({})
      this.setSearchParam('')
      this.setStartDate(null)
    }
  },
  created(){
    const settings = `${this.APIHosts.art}/settings`
    this.loadSettings(settings)
  },
  watch: {
    '$route' (to, from) {
      // react to route changes...
      if (to.name !== 'login'){
        if (this.removeListeners() === 'removed'){
          document.addEventListener("mousemove", this.resetTimer, false);
          document.addEventListener("mousedown", this.resetTimer, false);
          document.addEventListener("keypress", this.resetTimer, false);
          document.addEventListener("touchmove", this.resetTimer, false);
          document.addEventListener("onscroll", this.resetTimer, false);
        }
        this.setupTimers()
      }
      else if(to.name === 'login'){
        document.removeEventListener("mousemove", this.resetTimer, false);
        document.removeEventListener("mousedown", this.resetTimer, false);
        document.removeEventListener("keypress", this.resetTimer, false);
        document.removeEventListener("touchmove", this.resetTimer, false);
        document.removeEventListener("onscroll", this.resetTimer, false);
        window.clearTimeout(this.timeoutTimerID);
        window.clearTimeout(this.warningTimerID);
        this.clearMasterCardData()
      }
      
      if(to.name === 'home' || to.name === 'reports' || to.name === 'hts-records' || to.name === 'settings'){
        this.clearMasterCardData()
        
      }
    }
  },
  computed: {

  }
}
</script>


<style>
#app {
  font-family: 'Abel', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>