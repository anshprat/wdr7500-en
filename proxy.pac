function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "tplogin.cn"))
        return "PROXY localhost:8080";
    return "DIRECT";
}
