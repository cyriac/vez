const storage = require('electron-json-storage')

export default {
  data () {
    return {
      form: {
        apikey: '',
        fleets: '',
        mounted: true
      }
    }
  },
  computed: {
    formData () {
      let fleets = this.form.fleets.split('\n')
      fleets = fleets.filter(f => f.length > 1)
      const form = {
        apikey: this.form.apikey,
        fleets
      }
      return form
    }
  },
  methods: {
    pullAPIdata () {
      const self = this
      storage.get('apikey', function (error, data) {
        if (error) throw error
        if (data.length > 1) {
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
    }
  },
  mounted () {
    this.pullAPIdata()
    this.mounted = true
  }
}
