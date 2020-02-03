<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" v-if="mounted">
      <el-form-item label="API Key">
        <el-input v-model="form.apikey"></el-input>
      </el-form-item>
      <el-form-item label="Fleets">
        <el-input
          type="textarea"
          v-model="form.fleets"
          :autosize="{ minRows: 10, maxRows: 100}"
        >
        </el-input>
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
    onSubmit() {
      storage.set('apikey', this.formData.apikey)
      storage.set('fleets', this.formData.fleets)
      alert('Save!');
    }
  }
}
</script>

<style>
.ir {
  visibility: hidden;
}
</style>
