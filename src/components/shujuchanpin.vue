<template>
  <div class="main">
    <div class="left">
      <div class="title">0.1°空间分辨率</div>
      <div class="disc">时空连续的网格化日平均CO2</div>
      <div class="divider"></div>
      <div class="download">
        <el-button icon="el-icon-download" @click="download(1)"
          >数据下载</el-button
        >
        <el-button type="primary" icon="el-icon-download"  @click="download(2)">分布图下载</el-button>
      </div>
    </div>
    <div class="right">
      <div class="title">0.01°空间分辨率</div>
      <div class="disc">时空连续的网格化日平均CO2</div>
      <div class="divider"></div>
      <div class="download">
        <el-button type="primary" plain icon="el-icon-download"  @click="download(3)">数据下载</el-button>
        <el-button plain icon="el-icon-download"  @click="download(4)">分布图下载</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    download: function (num) {
      console.log('xiaza' + num)
    }
  }
}
</script>

<style scoped>
div {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.main {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 80px;
  width: 70%;
  height: 200px;
  border: solid #e9e9e9;
}

.left,
.right {
  margin: 20px;
  width: 50%;
}

.title {
  font-size: 22px;
  margin-bottom: 10px;
}

.disc {
  font-size: 16px;
}

.divider {
  width: 100%;
  height: 2px;
  background-color: #e9e9e9;
  margin: 20px 0;
}

.download {
  display: flex;
  justify-content: center;
}
</style>
