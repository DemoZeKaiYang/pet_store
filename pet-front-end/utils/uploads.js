// utils/upload.js  
/**
 * @param option:{
   * name:'文件名'
   * url:'地址'
 }
*/
export default function uploadFile(options) {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function(res) {
        // tempFilePath可以作为img标签的src属性显示图片  
        const tempFilePaths = res.tempFilePaths;

        const token = uni.getStorageSync('token')
        uni.uploadFile({
          url: options.url, // 上传地址  
          filePath: tempFilePaths[0], // 文件路径  
          name: options.name, // 后端通过这个字段接收文件 
          fileType: 'image',
          header: {
            Authorization: token,
          },
          formData: {
            // 其他表单信息，比如用户id等  
            ...options.formData,

          },
          success: (uploadFileRes) => {
            // 上传成功后的回调  
            resolve(JSON.parse(uploadFileRes.data));
          },
          fail: (uploadFileError) => {
            // 上传失败后的回调  
            reject(uploadFileError);
          }
        });
      }
    });
  });
}