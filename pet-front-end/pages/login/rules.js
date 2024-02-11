export default {
  phone: {
    rules: [{
        required: true,
        errorMessage: '请填写电话',
      },
      {
        validateFunction: function(rule, value, data, callback) {
          return new Promise((resolve, reject) => {
            if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(value)) {
              reject(new Error('请输入正确的手机号'))
            } else {
              resolve()
            }
          })
        }
      }
    ]
  },
  // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
  password: {
    rules: [{
        required: true,
        errorMessage: '请填写密码',
      },
      {
        validateFunction: function(rule, value, data, callback) {
          return new Promise((resolve, reject) => {
            if (!/^[a-zA-Z]\w{5,17}$/.test(value)) {
              reject(new Error('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线'))
            } else {
              resolve()
            }
          })
        }
      }
    ]
  }
}