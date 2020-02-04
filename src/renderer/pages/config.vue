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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
    <div class="ir">{{ formData }}</div>
  </div>
</template>

<script>
import APIData from '~/mixins/APIData.js'
const storage = require('electron-json-storage')

export default {
  mixins: [APIData],
  methods: {
    onSubmit () {
      storage.set('apikey', this.formData.apikey)
      storage.set('fleets', this.formData.fleets)
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
