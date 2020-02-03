<template>
  <div>
    <iframe v-if="activeFleet !== null" width="100%" height="600px" frameborder="0" :src="frameSrc" :key="frameSrc" />
  </div>
</template>

<script>
import APIData from '~/mixins/APIData.js'
const storage = require('electron-json-storage')

export default {
  mixins: [APIData],
  computed: {
    activeFleet () {
      return this.$store.state.activeFleet
    },
    frameSrc () {
      let src = 'https://www.vesselfinder.com/aismap?zoom=undefined&lat=36.00&lon=-5.40&width=100%&height=600&names=true&track=false'
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
      handler: (af) => {
        console.log(JSON.stringify(af))
      },
      deep: true
    }
  }
}
</script>
