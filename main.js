var upload = require('./uploader.js');

module.exports = {
    uploadModelOnForge : function(fileName, filePath){

        upload.distUpload(fileName, filePath);
}
}

// module.exports.uploadModelOnForge("160765-000-MASTER_STRUCT_detached.rvt",
// "./models/160765-000-MASTER_STRUCT_detached.rvt"
//  )