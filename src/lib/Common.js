import moment from 'moment';

const THOUSAND_COMMA_REGEX = /(\d)(?=(\d{3})+\b)/g;

export const range = (a, b) => {
    let result = [];
    for (let i = a; i < b; i++) {
        result.push(i);
    }
    return result;
}

export const findKeys = (m, ...keys) => {
    let result = {};
    m.forEach((v, k) => keys.includes(k) && (result[k] = v));
    return result;
}

export const omit = (obj, ...keys) => {
    let result = Object.assign({}, obj);
    keys.forEach(key => delete result[key]);
    return result;
}

export const urlHostname = (data) => {
    let a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

export const yearRange = (from, to) => {
    let diff = to - from;
    let diffs = range(0, diff + 1);
    return diffs.map(d => moment(from, 'YYYY').add(d, 'year').format('YYYY'))
}

export const daysAgo = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

export const thousandNumberFormat = (n) => {
    if (typeof n === 'number')
        return n.toString().replace(THOUSAND_COMMA_REGEX, '$1,');

    if (typeof n === 'string' || n instanceof String)
        return n.replace(THOUSAND_COMMA_REGEX, '$1,');
}

export const setViewCount = (count) => {
    if (count / 10000 >= 1) {
        return thousandNumberFormat(Math.floor(count / 10000) + '.' + Math.floor(count / 1000).toString().charAt(1) + '만');
    } else if (count / 1000 >= 1) {
        return thousandNumberFormat(Math.floor(count / 1000) + Math.floor(count / 100).toString().charAt(-1) + '천');
    }
    else {
        return thousandNumberFormat(count)
    }
}

export const invertObject = (obj) => {
    let result = {};
    Object.entries(obj).forEach(([k, v]) => {
        result[v] = k;
    });

    return result;
}

export const chunk = (arr, chunkSize, cache = []) => {
    const tmp = [...arr];
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
}

export const timerFormat = (timer) => {
    let sec = timer % 60;
    let min = Math.floor(timer / 60);
    return `${min}:${sec}`;
}

export const tenThousandFormat = (n) => {
    return Math.floor(n / 10000)
}

export const scrollToContent = (el) => {
    const oft = el.offsetTop - 200;
    window.scrollTo(0, oft);
};

export const createObserver = (sentinelCurrent, callMoreItems = () => {}) => {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                callMoreItems && callMoreItems()
            }
        });
    });

    return observer.observe(sentinelCurrent);
}