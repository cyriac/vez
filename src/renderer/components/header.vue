<template>
  <header class="main-header">
    <nav>
      <div>
        <n-link to="/">Home</n-link>
        <el-dropdown>
          <el-button type="primary">
            Select fleet <i class="el-icon-arrow-down el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
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
export default {

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
