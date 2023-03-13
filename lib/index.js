function makeFormatFunction(endDate, format) {
    const formatNumber = n => {
        n = n.toString();
        return n[1] ? n : '0' + n;
    };


    let d, h, m, s;
    let otime = '';

    let nowtime = new Date(),
        now = nowtime.getTime(),
        end = endDate.getTime();
    let leftTime = end - now;

    if (leftTime >= 1000) {
        if (format === 'DD HH:mm:ss') {
            d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
            otime = [d, h, m, s].map(formatNumber).join(':');
        } else if (format === 'HH:mm:ss') {
            h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
            otime = [h, m, s].map(formatNumber).join(':');
        } else if (format === 'mm:ss') {
            m = Math.floor(leftTime / 1000 / 60 % 60);
            s = Math.floor(leftTime / 1000 % 60);
            otime = [m, s].map(formatNumber).join(':');
        } else if (format === 'ss') {
            s = Math.floor(leftTime / 1000 % 60);
            otime = [s].map(formatNumber).join(':');
        } else {
            return 'format格式错误'
        }
        return otime;
    } else {
        return false
    }
}


export default function countDown(endDate, format) {
    if (!(endDate instanceof Date)) {
        endDate = new Date(endDate.replace(/\-/g, '/'))
    }
    format = format ? format : 'HH:mm:ss'
    return makeFormatFunction(endDate, format)
}