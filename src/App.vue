<template>
  <div id="app">
    <div class="nav-bar">
      <div class="logo-img">
        <img src="./../static/pic/TCO2logo1.jpg" alt="" />
      </div>
      <div class="menu">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#303133"
          router
          @select="handleSelect"
        >
          <el-menu-item index="home">主页</el-menu-item>
          <el-menu-item index="/about">模型介绍</el-menu-item>
          <el-submenu index="3">
            <template slot="title">数据产品</template>
            <el-menu-item index="/shujuchanpin">0.1°空间分辨率</el-menu-item>
            <el-menu-item index="/shujuchanpin">0.01°空间分辨率</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">用户服务</template>
            <el-menu-item index="/zhucexuzhi">注册须知</el-menu-item>
            <el-menu-item index="/changjianwenti">常见问题</el-menu-item>
            <el-menu-item index="/dingzhikaifa">定制开发</el-menu-item>
          </el-submenu>
          <el-menu-item index="login">登录/注册</el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- 路由占位符 -->
    <div class="routerOuter">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
@import url("./style/base.css");

.nav-bar {
  display: flex;
  justify-content: space-between;
  background: -webkit-linear-gradient(
    top,
    white,
    rgb(204, 255, 255),
    rgb(153, 255, 255),
    rgb(102, 255, 255),
    rgb(51, 255, 255)
  );
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.logo-img {
  margin-left: 5%;
  width: 200px;
  height: 100%;
}

.logo-img img {
  width: 100%;
  height: 100%;
}

.menu {
  margin-right: 5%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  /* background-color: red; */
}

.el-menu-demo {
  background: -webkit-linear-gradient(
    top,
    white,
    rgb(204, 255, 255),
    rgb(153, 255, 255),
    rgb(102, 255, 255),
    rgb(51, 255, 255)
  );
}

/* .routerOuter {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    height: 700px;
} */
</style>
