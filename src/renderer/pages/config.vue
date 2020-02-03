<template>
  <div>
    {{ formData }}
    <el-form ref="form" :model="form" label-width="120px" v-if="mounted">
      <el-form-item label="API Key">
        <el-input v-model="form.apikey"></el-input>
      </el-form-item>
      <el-form-item label="Fleets">
        <el-input type="textarea" v-model="form.fleets"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import APIData from '~/mixins/APIData.js'
const storage = require('electron-json-storage')

export default {
  mixins: [APIData],
  methods: {
    onSubmit() {
      storage.set('apikey', this.formData.apikey)
      storage.set('fleets', this.formData.fleets)
      alert('submit!');
    }
  }
}
</script>
