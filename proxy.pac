function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "tplogin.cn"))
        return "PROXY localhost:8080";
    if (dnsDomainIs(host, "10.10.10.10"))
        return "PROXY localhost:8080";

    return "DIRECT";
}
