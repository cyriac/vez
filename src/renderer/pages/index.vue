<template>
  <div>
    {{ frameSrc }}
    <div id="scribe">
    </div>
  </div>
</template>

<script>
import postscribe from 'postscribe'
import APIData from '~/mixins/APIData.js'
const storage = require('electron-json-storage')

export default {
  mixins: [APIData],
  computed: {
    activeFleet () {
      return this.$store.state.activeFleet
    },
    scribeText() {
      let text = `
      <script type="text/javascript">
          // Map appearance
          var width="100%";         // width in pixels or percentage
          var height="600";         // height in pixels
          var latitude="0.00";     // center latitude (decimal degrees)
          var longitude="0.00";    // center longitude (decimal degrees)
          var names=true;           // always show ship names (defaults to false)

          // Fleet tracking
          var fleet="${this.form.apikey}"; // your personal Fleet key (displayed in your User Profile)
          var fleet_name="${this.activeFleet}"; // display particular fleet from your fleet list
          var fleet_timespan="1440"; // maximum age in minutes of the displayed ship positions
      <\/script>
      <script type="text/javascript" src="https://www.vesselfinder.com/aismap.js"><\/script>
      `
      return text
    },
    frameSrc () {
      let src = 'https://www.vesselfinder.com/aismap?zoom=undefined&lat=0.0&lon=0.0&width=100%&height=600&names=true&track=false'
      src = src + '&fleet=' + this.form.apikey + '&fleet_name=' + this.activeFleet
      src = src + '&fleet_timespan=1440&fleet_hide_old_positions=false&clicktoact=false&store_pos=true&ra=testingonly'
      return src
    }
  },
  asyncData ({ req }) {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  watch: {
    formData: {
      handler: function(newVal, oldVal) {
        const af = newVal
        if (af.apikey.length > 1 && af.fleets.length > 1) {
          alert(JSON.stringify(af))
          postscribe('#scribe', this.scribeText);
        }
      },
      deep: true
    }
  },
}
</script>
