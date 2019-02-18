# Blob

将文件使用utf-8编码（考虑兼容性），解决中文乱码的问题

```javascript
/**
 * 保存为CSV文件
 * @params csv csv文件内容
 * @params saveName 保存的文件名
 */
function saveCSV(csv, saveName){
    var blob = new Blob(['\ufeff' + csv], {type: 'text/csv,charset=UTF-8'});
    openDownloadDialog(blob, saveName);
}
```