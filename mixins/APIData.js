const storage = require('local-storage-json')

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
      self.form.apikey = storage.get('apikey')
      self.form.fleets = storage.get('fleets')
      self.form.fleets = storage.get('fleets').join("\n")
      self.form.show_names = storage.get('show_names')
      self.form.fleet_timespan = storage.get('fleet_timespan')
    }
  },
  mounted () {
    this.pullAPIdata()
    this.mounted = true
  }
}
