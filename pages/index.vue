<template>
  <div>
    <!-- <div v-text="scribeText" /> -->
    <div id="scribe" />
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-alert
          v-if="activeFleet.length == 0"
          title="Select a fleet"
          type="warning"
          effect="dark"
          show-icon
          center
          :closable="false">
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import postscribe from 'postscribe'
import APIData from '~/mixins/APIData.js'

export default {
  mixins: [APIData],
  computed: {
    activeFleet () {
      return this.$store.state.activeFleet
    },
    scribeText () {
      /*eslint-disable */
      const text = `
      <h1>${this.activeFleet}</h1>
      <script type="text/javascript">
          // Map appearance
          var width="100%";         // width in pixels or percentage
          var height="600";         // height in pixels
          var zoom="3";
          var latitude="20.6";     // center latitude (decimal degrees)
          var longitude="56.40";    // center longitude (decimal degrees)
          var names=${this.form.show_names};           // always show ship names (defaults to false)

          // Fleet tracking
          var fleet="${this.form.apikey}"; // your personal Fleet key (displayed in your User Profile)
          var fleet_name="${this.activeFleet}"; // display particular fleet from your fleet list
          var fleet_timespan="${this.form.fleet_timespan}"; // maximum age in minutes of the displayed ship positions
      <\/script>
      <script type="text/javascript" src="https://www.vesselfinder.com/aismap.js"><\/script>
      `
      return text
      /* eslint-enable */
    }
  },
  watch: {
    '$store.state.activeFleet': {
      handler (newVal, oldVal) {
        if (this.formData.apikey.length > 1 && this.formData.fleets.length > 1) {
          this.scribeEmbed()
        }
      }
    },
    formData: {
      handler (newVal, oldVal) {
        const af = newVal
        if (af.apikey.length > 1 && af.fleets.length > 1) {
          this.scribeEmbed()
        }
      },
      deep: true
    }
  },
  asyncData ({ req }) {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  methods: {
    scribeEmbed () {
      const div = document.querySelector('#scribe');
      [].slice.call(div.children).forEach(function (child) { div.removeChild(child) })
      if (this.activeFleet.length > 0) {
        postscribe('#scribe', this.scribeText)
      }
    }
  }
}
</script>
