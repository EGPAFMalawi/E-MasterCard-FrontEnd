import { reject } from "q";
import Vue from 'vue'

export const  notificationSystem= {
    options: {
      show: {
        theme: "dark",
        icon: "icon-person",
        position: "topCenter",
        progressBarColor: "rgb(0, 255, 184)",
        buttons: [
          [
            "<button>Ok</button>",
            (instance, toast) => {
              alert("Hello world!");
            },
            true
          ],
          [
            "<button>Close</button>",
            (instance, toast) => {
              instance.hide(
                {
                  transitionOut: "fadeOutUp",
                  onClosing: function(instance, toast, closedBy) {
                    console.info("closedBy: " + closedBy);
                  }
                },
                toast,
                "buttonName"
              );
            }
          ]
        ],
        onOpening: function(instance, toast) {
          console.info("callback abriu!");
        },
        onClosing: function(instance, toast, closedBy) {
          console.info("closedBy: " + closedBy);
        }
      },
      ballon: {
        balloon: true,
        position: "bottomCenter"
      },
      info: {
        position: "bottomLeft"
      },
      success: {
        position: "bottomRight"
      },
      warning: {
        position: "topLeft"
      },
      error: {
        position: "topRight"
      },
      question: {
        timeout: 20000,
        close: false,
        overlay: true,
        toastOnce: true,
        id: "question",
        zindex: 999,
        position: "center",
        buttons: [
          [
            "<button><b>YES</b></button>",
            function(instance, toast) {
              instance.hide({ transitionOut: "fadeOut" }, toast, "yes");
            },
            true
          ],
          [
            "<button>NO</button>",
            function(instance, toast) {
              instance.hide({ transitionOut: "fadeOut" }, toast, "no");
            }
          ]
        ],
        onClosing: function(instance, toast, closedBy) {
          console.info("Closing | closedBy: " + closedBy)
          
        },
        onClosed: function(instance, toast, closedBy) {
          console.info("Closed | closedBy: " + closedBy)
          Object.defineProperties(Vue.prototype, {
            $toastResponse: {
                get () {
                  return closedBy
                }
              }
            }
          )
        }
      }
    }
  }