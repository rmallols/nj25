export function isSupportedOS(): boolean {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (v) {
            return parseInt(v[1], 10) >= 17;
        }
    }
    return true;
}