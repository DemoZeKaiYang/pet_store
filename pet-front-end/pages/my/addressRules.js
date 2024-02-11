export default {
  address_name: {
    rules: [{
      required: true,
      errorMessage: '请输入收货人姓名',

    }]
  },
  address_phone: {
    rules: [{
        required: true,
        errorMessage: '请输入电话号码',

      },
      {
        pattern: /^1[3-9]\d{9}$/,
        errorMessage: '请输入11位数字的电话号码',

      }
    ]
  },
  address_area: {
    rules: [{
      required: true,
      errorMessage: '请选择所在地区',
    },
    {
      pattern: /^[\u4e00-\u9fa5]+-[\u4e00-\u9fa5]+-[\u4e00-\u9fa5]+$/,
      errorMessage: '请输入正确的省市区',
    }
    ]
  },
  address_details: {
    rules: [{
        required: true,
        errorMessage: '请输入详细地址',
      },

    ]
  }
}