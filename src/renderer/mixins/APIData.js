const storage = require('electron-json-storage')

export default {
  data () {
    return {
      form: {
        apikey: '',
        fleets: '',
        fleet_timespan: "1440",
        show_names: true,
        mounted: true
      }
    }
  },
  computed: {
    formData () {
      let fleets = this.form.fleets.split('\n')
      fleets = fleets.filter(f => f.length > 1)
      const fleet_timespan = this.form.fleet_timespan
      const show_names = this.form.show_names
      const form = {
        apikey: this.form.apikey,
        fleets,
        fleet_timespan,
        show_names
      }
      return form
    }
  },
  methods: {
    pullAPIdata () {
      const self = this
      storage.get('apikey', function (error, data) {
        if (error) throw error
        if (data.length > 0) {
          self.form.apikey = data
        } else {
          self.form.apikey = ''
        }
      })
      storage.get('fleets', function (error, data) {
        if (error) throw error
        try {
          self.form.fleets = data.join('\n')
          self.$store.commit('setFleets', data)
        } catch(err) {
          self.form.fleets = ''
          self.$store.commit('setFleets', [])
        }
      })
      storage.get('show_names', function(error, data) {
        if (error) throw error
        if (data === true || data === false) {
          self.form.show_names = data
        } else {
          self.form.show_names = true
        }
      })
      storage.get('fleet_timespan', function (error, data) {
        if (error) throw error
        if (data.length > 0) {
            self.form.fleet_timespan = data
        } else {
          self.form.fleet_timespan = "1440"
        }
      })
    }
  },
  mounted () {
    this.pullAPIdata()
    this.mounted = true
  }
}
