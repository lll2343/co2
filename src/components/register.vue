<template>
  <div class="main-box">
    <div class="head">
      <div class="logo">注册</div>
      <div class="right">
        已是会员？<router-link to="/login">登录</router-link>
      </div>
    </div>
    <div class="form">
      <el-form
        :model="form"
        :rules="rules"
        ref="form"
        label-position="right"
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
        <el-form-item label="重复密码" prop="password2">
          <el-input
            v-model="form.password2"
            placeholder="请重复密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input
            v-model="form.phoneNumber"
            placeholder="请输入电话号码"
            prefix-icon="el-icon-phone"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="emailAddress">
          <el-input
            v-model="form.emailAddress"
            placeholder="请输入电子邮箱"
            prefix-icon="el-icon-message"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="buttonItem">
            <el-button type="primary" @click="submitForm('form')">注册</el-button>
            <el-button plain type="warning" @click="resetForm('form')">重置</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    let validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    let validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    let validatePassword2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else if (value !== this.form.password) {
        callback(new Error('两次密码必须一致'))
      } else {
        callback()
      }
    }
    let validatePhoneNumber = (rule, value, callback) => {
      if (!value) {
        callback(new Error('电话号码不能为空'))
      } else if (isNaN(value) || value.length !== 11) {
        callback(new Error('电话号码格式错误'))
      } else {
        callback()
      }
    }
    let validateEmailAddress = (rule, value, callback) => {
      let atIndex = value.indexOf('@')
      let dotIndex = value.indexOf('.')
      if (!value) {
        callback(new Error('电子邮箱不能为空'))
      } else if (!(atIndex >= 1 && atIndex + 2 <= dotIndex && dotIndex + 1 < value.length)) {
        // a@b.c
        callback(new Error('电子邮箱格式错误'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        password2: '',
        phoneNumber: '',
        emailAddress: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePassword2, trigger: 'blur' }
        ],
        phoneNumber: [
          { validator: validatePhoneNumber, trigger: 'blur' }
        ],
        emailAddress: [
          { validator: validateEmailAddress, trigger: 'blur' }
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
