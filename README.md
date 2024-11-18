# download-link-catcher

Chrome 浏览器扩展，拦截浏览器的下载动作，获取真实的下载链接

## 起因

众嗦粥汁，有些东西的下载链接，是不能直接复制给 Aria2/IDM 等下载工具的，因为那不是真实的原生链接，寻遍网络也没找到满意的工具，要么功能太多，要么功能不符，明明我只是想要一个简简单单的拦截链接功能而已

于是就有了这个东西

## 使用说明

安装好扩展后，在下载时，会阻止浏览器的下载，并弹出一个新标签页，内容就是刚刚点击所获取的下载链接

不使用时，关闭该扩展即可

## 常见问题

__Q：出现链接获取不正确的情况？__

A：关闭扩展，直接调用浏览器下载

## 未来计划

- [x] Referer
- [x] User-Agent
- [ ] 解决 `Unchecked runtime.lastError: Download must be in progress`
- [ ] Cookie

## 许可证

MIT © ZShab Niba
