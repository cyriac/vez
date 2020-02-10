<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="API Key">
        <el-input v-model="form.apikey" />
      </el-form-item>
      <el-form-item label="Fleets">
        <el-input
          v-model="form.fleets"
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 100}"
        />
      </el-form-item>
      <el-form-item label="Show names">
        <el-checkbox v-model="form.show_names" />
      </el-form-item>
      <el-form-item label="">
        <span slot="label">
          <span>Last ping</span>
          <el-tooltip class="item" effect="dark" content="Maximum age in minutes of the displayed ship positions" placement="top-start">
            <span>
              <i class="fa fa-info-circle"/>
            </span>
          </el-tooltip>
        </span>
        <el-input v-model="form.fleet_timespan" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
    <div class="ir">{{ formData }}</div>
  </div>
</template>

<script>
import APIData from '~/mixins/APIData.js'
const storage = require('local-storage-json')

export default {
  mixins: [APIData],
  methods: {
    onSubmit () {
      storage.set('apikey', this.formData.apikey)
      storage.set('fleets', this.formData.fleets)
      storage.set('fleet_timespan', this.formData.fleet_timespan)
      storage.set('show_names', this.formData.show_names)
      alert('Saved! Reloading app...')
      window.location.reload(true)
    }
  }
}
</script>

<style>
.ir {
  visibility: hidden;
}
</style>
