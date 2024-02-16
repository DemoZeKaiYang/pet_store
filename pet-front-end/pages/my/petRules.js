export default {
  pet_name: {
    rules: [{
      required: true,
      errorMessage: '请输入宠物的昵称',
    }]
  },
  pet_kind_id: {
    rules: [{
      required: true,
      errorMessage: '请选择宠物品种',
    }]
  },
  pet_sterilize: {
    rules: [{
      required: true,
      errorMessage: '请选择绝育状态',
    }]
  },
  pet_sex: {
    rules: [{
      required: true,
      errorMessage: '请选择性别',
      validateFunction: function(rule, value, data, callback) {
        if (value.length === 0) {
          callback('请至少选择一个性别');
        } else {
          callback();
        }
      }
    }]
  },
  pet_birthday: {
    rules: [{
      required: true,
      errorMessage: '请选择出生日期',
      validateFunction: function(rule, value, data, callback) {
        if (!value) {
          callback('请选择出生日期');
        } else {
          callback();
        }
      }
    }]
  }
}