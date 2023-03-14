function makeFormatFunction(endDate, format) {
    const formatNumber = n => {
        n = n.toString();
        return n[1] ? n : `0${n}`;
    };

    let d = 0,
        h = 0,
        m = 0,
        s = 0;
    let otime = '';

    const now = Date.now();
    const end = endDate.getTime();
    const leftTime = end - now;

    if (leftTime >= 1000) {
        const totalSeconds = Math.floor(leftTime / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);

        if (format === 'DD HH:mm:ss') {
            d = Math.floor(totalHours / 24);
            h = totalHours % 24;
            m = totalMinutes % 60;
            s = totalSeconds % 60;
            otime = [d, h, m, s].map(formatNumber).join(':');
        } else if (format === 'HH:mm:ss') {
            h = totalHours % 24;
            m = totalMinutes % 60;
            s = totalSeconds % 60;
            otime = [h, m, s].map(formatNumber).join(':');
        } else if (format === 'mm:ss') {
            m = totalMinutes % 60;
            s = totalSeconds % 60;
            otime = [m, s].map(formatNumber).join(':');
        } else if (format === 'ss') {
            s = totalSeconds % 60;
            otime = [s].map(formatNumber).join(':');
        } else {
            return 'format格式错误'
        }

        return otime;
    } else {
        return false
    }
}

export default function countDown(endDate, format = 'HH:mm:ss') {
    if (!(endDate instanceof Date)) {
        endDate = new Date(endDate.replace(/\-/g, '/'))
    }

    return makeFormatFunction(endDate, format);
}