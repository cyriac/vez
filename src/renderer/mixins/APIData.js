const storage = require('electron-json-storage')

export default {
  data() {
    return {
      form: {
        apikey: '',
        fleets: '',
        mounted: false
      }
    }
  },
  computed: {
    formData() {
      let form = {
        apikey: this.form.apikey,
        fleets: this.form.fleets.split('\n')
      }
      return form
    }
  },
  mounted() {
    let self = this
    storage.get('apikey', function(error, data) {
      if (error) throw error;
      self.form['apikey'] = data
    });
    storage.get('fleets', function(error, data) {
      if (error) throw error;
      self.form['fleets'] = data.join('\n')
      self.$store.commit('setFleets', data)
    });
    this.mounted = true
  }
}
