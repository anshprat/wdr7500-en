function FindProxyForURL(url, host) {
  local_proxy = "PROXY localhost:8080"
  socks_proxy = "SOCKS localhost:1080"
  ssh_proxy = "SOCKS localhost:3128"
    if (dnsDomainIs(host, "tplogin.cn"))
        return local_proxy;
    if (dnsDomainIs(host, "10.10.10.10"))
        return local_proxy;
    if (dnsDomainIs(host, ".grablink.co"))
        return socks_proxy;
    if (dnsDomainIs(host, ".grabpay.com"))
        return ssh_proxy;
      if (dnsDomainIs(host, ".myteksi.net"))
          return ssh_proxy;
          if (dnsDomainIs(host, ".grablink.co"))
              return ssh_proxy;
              if (dnsDomainIs(host, ".ovo.id"))
                  return ssh_proxy;
                  if (dnsDomainIs(host, ".moca.vn"))
                      return ssh_proxy;
                  if (dnsDomainIs(host, ".grab.com"))
                      return ssh_proxy;
                  if (dnsDomainIs(host, ".stg-grabpay.com"))
                      return ssh_proxy;
                      if (dnsDomainIs(host, ".grabsecurity.com"))
                          return ssh_proxy;
    return "DIRECT";
}
