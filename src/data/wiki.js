// VulnStack Wiki 资源列表数据
// 从原站 wiki 页面提取的文章数据（第1-2页，共10页）

export const wikiTotalPages = 10
export const wikiPageSize = 13

export const wikiArticles = [
  // 第1页 (index.html)
  { id: 130, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （七）Vulnstack三层网络域渗透靶场', author: 'WHOAMI', views: 12983, tags: ['内网渗透', '域渗透'] },
  { id: 129, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （六）Vulnstack靶场内网域渗透', author: '11ccaab', views: 4434, tags: ['内网渗透', '域渗透'] },
  { id: 128, page: 1, date: '2022-11-02', title: '实战记录 ｜ 自主搭建的三层网络域渗透靶场', author: 'WHOAMI', views: 3568, tags: ['内网渗透', '域渗透'] },
  { id: 127, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （五）Vulnstack三层网络域渗透靶场', author: 'WHOAMI', views: 3245, tags: ['内网渗透', '域渗透'] },
  { id: 126, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （四）Vulnstack三层网络域渗透靶场', author: 'WHOAMI', views: 3740, tags: ['内网渗透', '域渗透'] },
  { id: 125, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （三）Vulnstack三层网络域渗透靶场', author: 'WHOAMI', views: 4371, tags: ['内网渗透', '域渗透'] },
  { id: 124, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （二）Vulnstack靶场内网域渗透', author: 'WHOAMI', views: 6757, tags: ['内网渗透', '域渗透', '安全靶场'] },
  { id: 123, page: 1, date: '2022-11-02', title: 'ATT&CK实战系列-红队评估 （一）Vulnstack三层网络域渗透靶场', author: 'WHOAMI@DL&S', views: 12434, tags: ['内网渗透', '域渗透'] },
  { id: 122, page: 1, date: '2022-11-02', title: '提权扫描工具一览（附下载地址）', author: '菜鸟学安全', views: 3425, tags: ['工具使用', '内网渗透'] },
  { id: 121, page: 1, date: '2020-06-05', title: '关于站库分离渗透思路总结', author: 'HACK学习呀', views: 9036, tags: ['渗透测试', 'Web安全'] },
  { id: 120, page: 1, date: '2020-06-05', title: '【CVE-2020-0796】漏洞POC复现', author: 'T00ls', views: 4375, tags: ['应急响应'] },
  { id: 119, page: 1, date: '2020-06-05', title: 'ATT-CK-framework', author: 'NomadCN112', views: 2485, tags: ['威胁情报', 'APT攻击'] },
  { id: 118, page: 1, date: '2020-06-05', title: 'CobaltStrike」应用攻击手段实例分析', author: '猎影', views: 4287, tags: ['工具使用', '渗透测试'] },
  // 第2页 (index-2.html)
  { id: 117, page: 2, date: '2020-03-31', title: 'web目录爆破工具', author: 'OJ', views: 4698, tags: ['Web安全', '工具使用', '渗透测试'] },
  { id: 116, page: 2, date: '2020-03-31', title: '高效的子域名爆破工具', author: 'chuhades', views: 1857, tags: ['工具使用', '渗透测试'] },
  { id: 115, page: 2, date: '2020-03-31', title: '子域名爆破工具', author: 'evilsocket', views: 1149, tags: ['渗透测试', '工具使用'] },
  { id: 114, page: 2, date: '2020-03-26', title: 'POC检测框架', author: 'opensec-cn', views: 1693, tags: ['渗透测试', '工具使用'] },
  { id: 113, page: 2, date: '2020-03-26', title: '北极熊扫描器', author: 'euphrat1ca', views: 1786, tags: ['工具使用', 'Web安全'] },
  { id: 112, page: 2, date: '2020-03-26', title: '椰树1.9扫描器', author: 'euphrat1ca', views: 1140, tags: ['工具使用', '渗透测试'] },
  { id: 111, page: 2, date: '2020-03-26', title: 'web安全实验靶场', author: 'ethicalhack3r', views: 5105, tags: ['Web安全', '渗透测试'] },
  { id: 108, page: 2, date: '2020-03-17', title: '命令注入漏洞扫描', author: 'commix', views: 1788, tags: ['渗透测试', 'Web安全'] },
  { id: 107, page: 2, date: '2020-03-17', title: 'CSRF验证工具', author: 'owasp', views: 2045, tags: ['工具使用', 'Web安全'] },
  { id: 106, page: 2, date: '2020-03-17', title: '安全工具集', author: 'Ridter', views: 1903, tags: ['工具使用'] },
  { id: 105, page: 2, date: '2020-03-13', title: '隐写工具包', author: 'DominicBreuker', views: 692, tags: ['CTF', '工具使用'] },
  { id: 104, page: 2, date: '2020-03-13', title: 'CTF工具集成包', author: '0Chencc', views: 1522, tags: ['CTF', '工具使用'] },
  { id: 103, page: 2, date: '2020-03-13', title: 'CTF比赛框架', author: 'facebookarchive', views: 1141, tags: ['CTF'] }
]

export function getWikiByPage(page) {
  return wikiArticles.filter(a => a.page === Number(page))
}
