<template>
  <header class="main-header">
    <nav>
      <div>
        {{  }}
        <n-link to="/">Home</n-link>
        <el-dropdown v-if="formData.fleets && formData.fleets.length > 1" trigger="click">
          <el-button type="primary">
            Select fleet <i class="el-icon-arrow-down el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown" @command="setFleet">
            <el-dropdown-item
              v-for="f in formData.fleets"
              :key="f"
              command="f"
            >
              {{ f }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <nuxt-link
          to="/config/"
          exact
        >
          Settings
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
import APIData from '~/mixins/APIData.js'
const storage = require('electron-json-storage')

export default {
  mixins: [APIData],
  methods: {
    setFleet(fleet) {
      this.$store.commit('setFleet', fleet)
    }
  }
}
</script>

<style scoped>
    .main-header {
        height: 50px;
        display: flex;
        background-color: #364758;
    }

    nav{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    nav div{
        height: 100%;
        margin: 0 20px;
        display: flex;
        align-items: center;
    }

    a {
        font-family: Helvetica, sans-serif;
        color: white;
        font-size: 1rem;
        font-weight: 100;
        text-decoration: underline;
        text-transform: uppercase;
    }

    a:hover{
        opacity: 0.9;
    }
</style>
