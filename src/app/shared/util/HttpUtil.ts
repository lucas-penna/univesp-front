export default class HttpUtil {

    static getQueryParams(obj: any) {
        Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] == 'null') && delete obj[key]);
        return Object.keys(obj)
            .map(key => `${key}=${encodeURIComponent(obj[key])}`)
            .join('&');
    }

}