console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://gitee.com/sec-an/js-cdn/raw/main/UI',
    'https://sp.sec-an.cn/storage01/xxqg/UI.js',
    'https://github.secan.workers.dev/https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI',
    'https://cdn.jsdelivr.net/gh/sec-an/Better-Auto-XXQG@main/UI',
    'https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI',
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('UI脚本:地址' + i + '下载失败');
        }
    } catch (error) {}
}

engines.execScript("UI", UI);
