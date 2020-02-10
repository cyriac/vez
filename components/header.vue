<template>
  <header class="main-header">
    <nav>
      <div v-if="$route.path == '/'">
        <el-dropdown
          v-if="formData.fleets && formData.fleets.length > 1"
          trigger="click"
          @command="setFleet"
        >
          <el-button type="primary">
            {{ selectText }} <i class="el-icon-arrow-down el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="f in fleetList"
              :key="f"
              :command="f"
            >
              {{ f }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-if="formData.fleets && formData.fleets.length > 1 && $route.path !== '/'">
        <n-link to="/">Home</n-link>
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

export default {
  mixins: [APIData],
  computed: {
    fleetList () {
      return this.formData.fleets
    },
    selectText () {
      let t = 'Select fleet'
      if (this.$store.state.activeFleet !== '' && this.$store.state.activeFleet !== null) {
        t = this.$store.state.activeFleet
      }
      return t
    }
  },
  methods: {
    setFleet (fleet) {
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
