<template>
  <div class="main-box">
    <div class="head">
      <div class="logo">登录</div>
      <div class="right">
        不是会员？<router-link to="/register">注册</router-link>
      </div>
    </div>
    <div class="form">
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-position="left"
        label-width="auto"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="buttonItem">
            <el-button type="primary" @click="submitForm('form')">登录</el-button>
            <el-button plain type="warning" @click="resetForm('form')">重置</el-button>
            <router-link class="forgetPassword" to="/passwordRefind">忘记密码</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
@import url("./../style/form.css");
</style>
