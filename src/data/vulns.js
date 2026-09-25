// VulnStack 漏洞数据 - 包含列表卡片数据和详情数据
// 图片引用线上原始站点 URL，无需复制文件

const SITE = ''
const VULN_IMG = `media/vuln/vuln`
const SCR_IMG = `media/vuln/screenshot`

// 通用文件哈希（蓝队防御系列共用）
const COMMON_MD5 = 'e16fd0f6a5104aef0dfa73460afff0e8'
const COMMON_SHA1 = '078ce02d01298fe40a1feb8260fde79d5fb06bc6'

export const vulns = [
  {
    id: 21,
    page: 1,
    title: 'ATT&CK实战系列——蓝队防御（七）',
    date: '2025-11-30',
    viewCount: 7502,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_093443_033.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-挖矿事件 前景需要：机房运维小陈，下班后发现还有工作没完成，然后上机器越用越卡，请你帮他看看原因。 …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:36',
      tags: ['应急响应', '安全靶场'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-挖矿事件</h2><p>前景需要：机房运维小陈，下班后发现还有工作没完成，然后上机器越用越卡，请你帮他看看原因。</p><p>1.攻击者的IP地址（两个）？</p><p>2.攻击者的挖矿程序名？</p><p>3.攻击者的矿池地址？</p><p>4.攻击者的钱包地址？</p><p>5.攻击者的挖矿程序路径？</p><h2>关于靶机启动</h2><p>使用Vmware启动即可，如启动错误，请升级至Vmware17.5以上</p><h2>相关账户密码</h2><p>用户:Administrator</p><p>密码:zgsf@123</p><p>&nbsp;</p><p>附：靶场为知防善攻实验室搭建如想查看更多靶场可移步至知防善攻实验室公众号！</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（七）', size: '18 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_093443_033.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_093457_893.png`]
    }
  },
  {
    id: 20,
    page: 1,
    title: 'ATT&CK实战系列——蓝队防御（六）',
    date: '2025-11-30',
    viewCount: 4422,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_093130_888.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-近源OS 前景需要：小王从某安全大厂被优化掉后，来到了某私立小学当起了计算机老师。某一天上课的时候，发现鼠标在自己动弹，又发现除了某台电脑，其他电脑连不上网络。感觉肯定有学生捣乱，于是开启了应急。 1.攻击者的外网IP地址 2.攻击者的内网跳板IP地址 …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:32',
      tags: ['安全靶场', '应急响应'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-近源OS</h2><p>前景需要：小王从某安全大厂被优化掉后，来到了某私立小学当起了计算机老师。某一天上课的时候，发现鼠标在自己动弹，又发现除了某台电脑，其他电脑连不上网络。感觉肯定有学生捣乱，于是开启了应急。</p><p>1.攻击者的外网IP地址</p><p>2.攻击者的内网跳板IP地址</p><p>3.攻击者使用的限速软件的md5大写</p><p>4.攻击者的后门md5大写</p><p>5.攻击者留下的flag</p><p>解题：</p><p>运行桌面上"解题工具.exe"即可</p><h2>相关账户密码</h2><p>Administrator</p><p>zgsf@2024</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（六）', size: '3 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_093048_015.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_093130_888.png`]
    }
  },
  {
    id: 19,
    page: 1,
    title: 'ATT&CK实战系列——蓝队防御（五）',
    date: '2025-11-30',
    viewCount: 3785,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_092552_300.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-Linux2 前景需要：看监控的时候发现webshell告警，领导让你上机检查你可以救救安服仔吗！！ 1,提交攻击者IP 2,提交攻击者修改的管理员密码(明文) …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:27',
      tags: ['安全靶场', '应急响应'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-Linux2</h2><p>前景需要：看监控的时候发现webshell告警，领导让你上机检查你可以救救安服仔吗！！</p><p>1,提交攻击者IP</p><p>2,提交攻击者修改的管理员密码(明文)</p><p>3,提交第一次Webshell的连接URL(http://xxx.xxx.xxx.xx/abcdefg?abcdefg只需要提交abcdefg?abcdefg)</p><p>3,提交Webshell连接密码</p><p>4,提交数据包的flag1</p><p>5,提交攻击者使用的后续上传的木马文件名称</p><p>6,提交攻击者隐藏的flag2</p><p>7,提交攻击者隐藏的flag3</p><h2>关于靶机启动</h2><p>关于靶机启动解压后双击ovf导入虚拟机打开即可。</p><h2>相关账户密码</h2><p>root/Inch@957821.</p><p>关于解题</p><p>root下,运行"./wp"即可</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（五）', size: '1 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_092454_077.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_092506_027.png`]
    }
  },
  {
    id: 18,
    page: 1,
    title: 'ATT&CK实战系列——蓝队防御（四）',
    date: '2025-11-30',
    viewCount: 4299,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_091938_208.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-Linux1 前景需要：小王急匆匆地找到小张，小王说"李哥，我dev服务器被黑了",快救救我！！ 挑战内容： 黑客的IP地址 …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:21',
      tags: ['安全靶场', '应急响应'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-Linux1</h2><p>前景需要：小王急匆匆地找到小张，小王说"李哥，我dev服务器被黑了",快救救我！！</p><p>挑战内容：</p><p>黑客的IP地址</p><p>遗留下的三个flag</p><h2>注意</h2><p>该靶机有很多非预期解，做靶机是给自己做，请大家合理按照预期解进行探索。</p><h2>关于靶机启动</h2><p>关于靶机启动解压后直接用Vmware打开即可。</p><h2>相关账户密码</h2><p>defend/defend</p><p>root/defend</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（四）', size: '3 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_091909_472.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_091853_619.png`]
    }
  },
  {
    id: 17,
    page: 1,
    title: 'ATT&CK实战系列——蓝队防御（三）',
    date: '2025-11-30',
    viewCount: 3760,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_091241_872.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-Web3 前景需要：小苕在省护值守中，在灵机一动情况下把设备停掉了，甲方问：为什么要停设备？小苕说：我第六感告诉我，这机器可能被黑了。 这是他的服务器，请你找出以下内容作为通关条件： …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:14',
      tags: ['应急响应'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-Web3</h2><p>前景需要：小苕在省护值守中，在灵机一动情况下把设备停掉了，甲方问：为什么要停设备？小苕说：我第六感告诉我，这机器可能被黑了。</p><p>这是他的服务器，请你找出以下内容作为通关条件：</p><ol><li><p>攻击者的两个IP地址</p></li><li><p>隐藏用户名称</p></li><li><p>黑客遗留下的flag【3个】</p></li></ol><p>本虚拟机的考点不在隐藏用户以及ip地址，仔细找找把。</p><h2>关于靶机启动</h2><p>解压后双击.ovf文件，使用Vmware打开，直接导入即可。</p><h2>相关账户密码</h2><p>Windows:administrator/xj@123456</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（三）', size: '10 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_091224_246.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_091241_872.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_091252_058.png`]
    }
  },
  {
    id: 16,
    page: 1,
    title: 'ATT&CK实战系列——蓝队防御（二）',
    date: '2025-11-30',
    viewCount: 3594,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_090701_642.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-Web2 前景需要：小李在某单位驻场值守，深夜12点，甲方已经回家了，小李刚偷偷摸鱼后，发现安全设备有告警，于是立刻停掉了机器开始排查。 这是他的服务器系统，请你找出以下内容，并作为通关条件： 1.攻击者的IP地址（两个）？ …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:09',
      tags: [],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-Web2</h2><p>前景需要：小李在某单位驻场值守，深夜12点，甲方已经回家了，小李刚偷偷摸鱼后，发现安全设备有告警，于是立刻停掉了机器开始排查。</p><p>这是他的服务器系统，请你找出以下内容，并作为通关条件：</p><p>1.攻击者的IP地址（两个）？</p><p>2.攻击者的webshell文件名？</p><p>3.攻击者的webshell密码？</p><p>4.攻击者的伪QQ号？</p><p>5.攻击者的伪服务器IP地址？</p><p>6.攻击者的服务器端口？</p><p>7.攻击者是如何入侵的（选择题）？</p><p>8.攻击者的隐藏用户名？</p><h2>关于靶机启动</h2><p>使用Vmware启动即可，如启动错误，请升级至Vmware17.5以上</p><h2>相关账户密码</h2><p>用户:administrator</p><p>密码:Zgsf@qq.com</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（二）', size: '5 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_090644_727.png`, `${SCR_IMG}/2025/11/30/ScreenShot_2025-11-30_090701_642.png`]
    }
  },
  {
    id: 15,
    page: 2,
    title: 'ATT&CK实战系列——蓝队防御（一）',
    date: '2025-11-30',
    viewCount: 2935,
    author: '',
    image: `${VULN_IMG}/2025/11/30/ScreenShot_2025-11-30_090102_291.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 挑战内容-Web1 前景需要：小李是某新上市公司的驻场值守人员，由于安全设备老旧， …',
    updateTime: '2025-11-30',
    detail: {
      author: '',
      createTime: '2025年11月30日 01:01',
      tags: ['应急响应'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-Web1</h2><p>前景需要：小李是某新上市公司的驻场值守人员，由于安全设备老旧，设备告警后发现webshell告警。</p><p>1.攻击者的IP地址</p><p>2.攻击者修改了什么关键文件</p><p>3.攻击者的webshell密码</p><p>4.攻击者的隐藏用户名</p><h2>关于靶机启动</h2><p>使用Vmware启动即可</p><h2>相关账户密码</h2><p>用户:administrator</p><p>密码:Zgsf@admin.com</p>`,
      file: { name: 'ATT&CK实战系列——蓝队防御（一）', size: '4 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/30/微信图片_2025-11-30_085745_503.png`]
    }
  },
  {
    id: 14,
    page: 2,
    title: 'ATT&CK实战系列——红队实战（十二）',
    date: '2025-11-23',
    viewCount: 3466,
    author: '',
    image: `${VULN_IMG}/2025/11/23/ScreenShot_2025-11-23_085637_997_BODyhh1.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 …',
    updateTime: '2025-11-23',
    detail: {
      author: '',
      createTime: '2025年11月23日 01:24',
      tags: ['内网渗透', '工具使用', '域渗透'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-红队实战十二</h2><p>本次红队靶场为互联网收集靶场，免费推广。主要涉及内网渗透、域渗透、工具使用等相关内容。</p>`,
      file: { name: 'ATT&CK实战系列——红队实战（十二）', size: '60 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2025/11/23/ScreenShot_2025-11-23_085637_997_BODyhh1.png`, `${SCR_IMG}/2025/11/23/ScreenShot_2025-11-23_085701_642.png`, `${SCR_IMG}/2025/11/23/ScreenShot_2025-11-23_091429_313.png`, `${SCR_IMG}/2025/11/23/ScreenShot_2025-11-23_091500_123.png`]
    }
  },
  {
    id: 13,
    page: 2,
    title: 'ATT&CK实战系列——红队实战（十一）',
    date: '2025-11-23',
    viewCount: 2751,
    author: '',
    image: `${VULN_IMG}/2025/11/23/ScreenShot_2025-11-23_091429_313.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 …',
    updateTime: '2025-11-23',
    detail: {
      author: '',
      createTime: '2025年11月23日 01:14',
      tags: ['内网渗透', '域渗透', '渗透测试'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-红队实战十一</h2><p>本次红队靶场主要涉及内网渗透、域渗透、渗透测试等相关内容学习。</p>`,
      file: { name: 'ATT&CK实战系列——红队实战（十一）', size: '39 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: []
    }
  },
  {
    id: 12,
    page: 2,
    title: 'ATT&CK实战系列-红队评估（十）',
    date: '2025-11-23',
    viewCount: 2849,
    author: '',
    image: `${VULN_IMG}/2025/11/23/ScreenShot_2025-11-23_085637_997_BODyhh1.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 …',
    updateTime: '2025-11-23',
    detail: {
      author: '',
      createTime: '2025年11月23日 00:56',
      tags: ['内网渗透', '域渗透', '恶意代码'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-红队评估十</h2><p>本次红队靶场主要涉及内网渗透、域渗透、恶意代码分析等相关内容学习。</p>`,
      file: { name: 'ATT&CK实战系列-红队评估（十）', size: '15 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: []
    }
  },
  {
    id: 11,
    page: 2,
    title: 'ATTCK实战系列-红队评估（九）',
    date: '2025-11-23',
    viewCount: 2916,
    author: '',
    image: `${VULN_IMG}/2025/11/23/ScreenShot_2025-11-23_085041_821.png`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 专用内网域渗透靶场 …',
    updateTime: '2025-11-23',
    detail: {
      author: '',
      createTime: '2025年11月23日 00:51',
      tags: ['内网渗透', 'Kill Chain', '域渗透'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>专用内网域渗透靶场</h2><p>本次靶场为专用内网域渗透靶场，主要涉及内网渗透、Kill Chain、域渗透等相关内容学习。</p><h2>相关账户密码</h2><p>saulGoodman.cn@redteam.red</p>`,
      file: { name: 'ATTCK实战系列-红队评估（九）', size: '38 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: []
    }
  },
  {
    id: 10,
    page: 2,
    title: 'ATT&CK实战系列-红队评估（八）',
    date: '2022-10-28',
    viewCount: 47912,
    author: 'hongri',
    image: `${VULN_IMG}/2022/10/28/1d9ee27cbf164852a2440daa58916f9f.jpg`,
    summary: '该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。 MetaSploit3 …',
    updateTime: '2022-10-28',
    detail: {
      author: 'hongri',
      createTime: '2022年10月28日 08:13',
      tags: ['威胁情报', '内网渗透', '域渗透', 'Web安全', 'ATT&CK', '红蓝对抗'],
      description: `<h5>该靶场来源于互联网，免费收集，免费推广，平台上任何靶场都为免费下载。如需下架请联系VulnStack团队。</h5><h2>挑战内容-MetaSploit3</h2><p>本次红队靶场主要涉及MetaSploit3相关内容，主要涉及内网渗透、域渗透、Web安全、ATT&CK、红蓝对抗等。</p><h2>相关账户密码</h2><p>vagrant/vagrant</p><p>administrator/admin!@#45</p>`,
      file: { name: 'ATT&CK-红队攻防（八）靶场下载', size: '60 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2022/10/28/1d9ee27cbf164852a2440daa58916f9f.jpg`, `${SCR_IMG}/2022/10/28/2d9ee27cbf164852a2440daa58916f9f0.jpg`, `${SCR_IMG}/2022/10/28/3d9ee27cbf164852a2440daa58916f9f1.jpg`]
    }
  },
  {
    id: 9,
    page: 3,
    title: 'ATT&CK实战系列-红队评估（七）',
    date: '2021-03-07',
    viewCount: 114287,
    author: 'hongri',
    image: `${VULN_IMG}/2021/03/07/WX20210307-2141272x.png`,
    summary: '大家好，第七个ATT&CK综合性靶场和大家见面了，第七个靶场为投稿靶场，也希望大家踊跃投稿。主要包括常规信息收集、Web攻防、代码审计、漏洞利用、内网渗透以及域渗透等相关内容学习 …',
    updateTime: '2021-03-07',
    detail: {
      author: 'hongri',
      createTime: '2021年3月7日 13:45',
      tags: ['威胁情报', '内网渗透', '密码获取', 'APT攻击', 'Kill Chain', '域渗透'],
      description: `<p>大家好，第七个ATT&CK综合性靶场和大家见面了，第七个靶场为投稿靶场，也希望大家踊跃投稿。主要包括常规信息收集、Web攻防、代码审计、漏洞利用、内网渗透以及域渗透等相关内容学习，此靶场主要用来学习，请大家遵守网络网络安全法。</p><h4><strong>ATT&CK模拟攻击路径</strong></h4><p>ATT&CK模拟攻击路径,2021年红日重新打造ATT&CK靶场，结合ATT&CK最新攻击实战TTP，然后把相关路径结合到靶场当中。</p><ul><li><p>Active Scanning-T1595</p></li><li><p>Exploit Public-facing Application-T1190</p></li><li><p>Command and Interpreter-T1059</p></li><li><p>Scheduled Task/Job-T1053</p></li><li><p>Boot or Logon Autostart Execution-T1547</p></li><li><p>Brute-Force-T1110</p></li><li><p>OS Credential Dumping-T1003</p></li><li><p>Remote Service-T1021</p></li></ul><h2><strong>环境说明</strong></h2><p>DMZ区IP段为192.168.1.1/24</p><ul><li><p>第二层网络环境IP段为192.168.52.1/24</p></li><li><p>第三层网络环境IP段为192.168.93.1/24</p></li></ul><h2><strong>域用户信息</strong></h2><p>Administrator：Whoami2021</p><p>whoami：Whoami2021</p><p>bunny：Bunny2021</p><p>moretz：Moretz2021</p><p>Ubuntu 1：web：web2021</p><p>Ubuntu 2：ubuntu：ubuntu</p><p>通达OA账户：admin：admin657260</p>`,
      file: { name: 'ATT&CK实战系列-红队评估（七）', size: '27 GB', md5: 'e16fd0f6a5104aef0dfa73460afff0e0', sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2021/03/07/20210226161713.png`, `${SCR_IMG}/2021/03/07/20210226162425.png`, `${SCR_IMG}/2021/03/07/WX20210307-2141122x.png`, `${SCR_IMG}/2021/03/07/WX20210307-2141272x.png`]
    }
  },
  {
    id: 8,
    page: 3,
    title: 'ATT&CK实战系列-红队评估（六）',
    date: '2020-06-04',
    viewCount: 87355,
    author: '关',
    image: `${VULN_IMG}/2020/06/04/WX20200604-2204142x.png`,
    summary: '大家好，ATT&CK第六个攻防靶场，当前第六、七靶场为蓝队职业体系课程，vulnstack也开源分享出来 …',
    updateTime: '2020-06-04',
    detail: {
      author: '关',
      createTime: '2020年6月4日 14:14',
      tags: ['威胁情报', '工具使用', 'APT攻击', 'Web安全'],
      description: `<p>大家好，ATT&CK第六个攻防靶场，当前第六、七靶场为蓝队职业体系课程，vulnstack也开源分享出来，目前此套靶场已经录制视频教程，因蓝队体系是收费课程，所以大家根据自己需求选择。本次主要考核内容为从某CMS漏洞然后打入内网然后到域控。</p><h4>拓扑图</h4><h4>环境设备</h4><p>WEB IP:192.168.111.80</p><p>DC IP:10.10.10.10</p><h4>实验目的</h4><p>获取 DC 服务器权限</p>`,
      file: { name: 'att_ck6', size: '22 GB', md5: 'e16fd0f6a5104aef0dfa73460afff0e9', sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2020/06/04/WX20200604-2204142x.png`, `${SCR_IMG}/2020/06/04/WX20200604-2212242x.png`, `${SCR_IMG}/2020/06/04/WechatIMG63.png`]
    }
  },
  {
    id: 7,
    page: 3,
    title: 'ATT&CK实战系列-红队评估（五）',
    date: '2020-03-13',
    viewCount: 80860,
    author: '小星星',
    image: `${VULN_IMG}/2020/03/13/WX20200313-1044122x.png`,
    summary: '大家好，ATT&CK第五个攻防靶场已经出来了，此次靶场虚拟机共用两个，一个外网一个内网，用来练习红队相关内容 …',
    updateTime: '2020-03-13',
    detail: {
      author: '小星星',
      createTime: '2020年3月13日 02:52',
      tags: ['APT攻击', 'Kill Chain', '安全靶场', '红蓝对抗', 'ATT&CK'],
      description: `<p>大家好，ATT&CK第五个攻防靶场已经出来了，此次靶场虚拟机共用两个，一个外网一个内网，用来练习红队相关内容和方向，主要包括常规信息收集、Web攻防、代码审计、漏洞利用、内网渗透以及域渗透等相关内容学习，此靶场主要用来学习，请大家遵守网络网络安全法。</p><h3>描述</h3><h5>虚拟机密码</h5><p><strong>win7</strong></p><p>sun\\heart 123.com</p><p>sun\\Administrator dc123.com</p><p><strong>2008</strong></p><p>sun\\admin 2020.com</p><p>Win7双网卡模拟内外网</p>`,
      file: { name: '红队5', size: '12 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2020/03/13/WX20200313-1044122x.png`, `${SCR_IMG}/2020/03/13/%E5%9B%BE%E7%89%87_1.png`, `${SCR_IMG}/2020/03/13/%E5%9B%BE%E7%89%87_2.png`, `${SCR_IMG}/2020/03/13/%E5%9B%BE%E7%89%87_3.png`, `${SCR_IMG}/2020/03/13/%E5%9B%BE%E7%89%87_4.png`, `${SCR_IMG}/2020/03/13/%E5%9B%BE%E7%89%87_5.png`]
    }
  },
  {
    id: 6,
    page: 3,
    title: 'ATT&CK实战系列-红队评估（四）',
    date: '2020-02-10',
    viewCount: 85156,
    author: 'tt',
    image: `${VULN_IMG}/2020/02/10/FE4Ci3pY9P2Asf1.png`,
    summary: '大家好红日安全红队靶场（四）已经出来，本次靶场渗透反序列化漏洞、命令执行漏洞、Tomcat漏洞、MS系列漏洞、端口转发漏洞、以及域渗透等多种组合漏洞 …',
    updateTime: '2020-02-10',
    detail: {
      author: 'tt',
      createTime: '2020年2月10日 08:57',
      tags: ['内网渗透', '渗透测试', '工具使用'],
      description: `<p>大家好红日安全红队靶场（四）已经出来，本次靶场渗透<strong>反序列化漏洞、命令执行漏洞、Tomcat漏洞、MS系列漏洞、端口转发漏洞、以及域渗透</strong>等多种组合漏洞，希望大家多多利用。</p><h4>红队评估四靶场描述</h4><h5>靶场学习路径，可参考</h5><ul><li><p>st漏洞利用</p></li><li><p>phpmyadmin getshell</p></li><li><p>tomcat 漏洞利用</p></li><li><p>docker逃逸</p></li><li><p>ms14-068</p></li><li><p>ssh密钥利用</p></li><li><p>流量转发</p></li><li><p>域渗透</p></li></ul><h4>环境说明</h4><p><strong>机器密码</strong></p><ul><li><p>ubuntu:ubuntu<strong>域成员机器</strong></p></li><li><p>douser:Dotest123<strong>DC:</strong></p></li><li><p>administrator:Test2008</p></li></ul>`,
      file: { name: 'ATT&CK红队评估实战靶场四', size: '18 GB', md5: '512DCEB15F9F185D6A5C77F79E89EFBH', sha1: 'FB06EEBA7E75558220FDD1DF3127A003D5779C0H' },
      screenshots: [`${SCR_IMG}/2020/02/10/FE4Ci3pY9P2Asf1.png`, `${SCR_IMG}/2020/02/10/JcBwCYZ8VKvmni3.png`, `${SCR_IMG}/2020/02/10/ljKfozt7bFdiDYp.png`, `${SCR_IMG}/2020/02/10/mqXuGgPniEDCy1Z.png`, `${SCR_IMG}/2020/02/10/SzAd6Kjhne3Ca7I.png`, `${SCR_IMG}/2020/02/10/ueHybVmDzRriG82.png`]
    }
  },
  {
    id: 5,
    page: 3,
    title: 'ATT&CK实战系列——红队实战（三）',
    date: '2019-11-11',
    viewCount: 92168,
    author: 'licong',
    image: `${VULN_IMG}/2019/11/11/QQ截图20191111233425.png`,
    summary: '基本信息 作者：licong 环境配置 打开虚拟机镜像为挂起状态，第一时间进行快照 …',
    updateTime: '2019-11-11',
    detail: {
      author: 'licong',
      createTime: '2019年11月11日 15:29',
      tags: ['APT攻击', 'Kill Chain'],
      description: `<p>基本信息</p><p><strong>作者：</strong>licong</p><p>环境配置</p><p><strong>打开虚拟机镜像为挂起状态，第一时间进行快照，部分服务未做自启，重启后无法自动运行。</strong></p><p><strong>挂起状态，账号已默认登陆，centos为出网机，第一次运行，需重新获取桥接模式网卡ip。</strong></p><p><strong>除重新获取ip，不建议进行任何虚拟机操作。</strong></p><p>参考虚拟机网络配置，添加新的网络，该网络作为内部网络。</p><p><strong>注：名称及网段必须符合上述图片，进行了固定ip配置。</strong></p><p>描述</p><p><strong>目标：域控中存在一份重要文件。</strong></p><p>本次环境为黑盒测试，不提供虚拟机账号密码。</p>`,
      file: { name: 'ATT&CK3', size: '22 GB', md5: '512DCEB15F9F185D6A5C77F79E89EFBE512DCEB15F9F185D6A5C77F79E89EFBE', sha1: 'FB06EEBA7E75558220FDD1DF3127A003D5779C0E' },
      screenshots: [`${SCR_IMG}/2019/11/11/QQ%E6%88%AA%E5%9B%BE20191111232827.png`]
    }
  },
  {
    id: 4,
    page: 3,
    title: 'Web安全入门进阶靶场实战',
    date: '2019-11-11',
    viewCount: 80916,
    author: 'hongri',
    image: `${VULN_IMG}/2019/11/11/1573484407063.png`,
    summary: 'Web安全入门进阶实战课程发布以后，目前我们也考虑到大家在安全搭建这一块遇到难题，所以我们Web安全小组搭建了一套附合一套该课程的靶场 …',
    updateTime: '2019-11-11',
    detail: {
      author: 'hongri',
      createTime: '2019年11月11日 15:15',
      tags: ['Web安全'],
      description: `<p>Web安全入门进阶实战课程发布以后，目前我们也考虑到大家在安全搭建这一块遇到难题，所以我们Web安全小组搭建了一套附合一套该课程的靶场，包含了基础靶场和CMS实战靶场，所以大家不要说环境不会搭等问题，我们把环境全部搭建在虚拟机当中，大家直接开启就可以，如果环境有小问题，直接重启就可以。下面给大家简单介绍一下都有哪些靶场吧！！！~~~ 靶场开机密码：hongrisec@2019</p><p>基础靶场</p><ul><li><p>DVWA靶场</p></li><li><p>DSVW靶场</p></li><li><p>WebGoat靶场</p></li><li><p>XVWA靶场</p></li><li><p>webug4.0靶场</p></li><li><p>pikachu靶场</p></li><li><p>VulnSpy靶场</p></li><li><p>SSRF-Vulnerable-with-Curl-master靶场</p></li><li><p>Vulnhub-weblogic-ssrf</p></li><li><p>Web_for_pentester</p></li><li><p>Upload-labs-master</p></li></ul><p>CMS实战</p><ul><li><p>CmsEasy</p></li><li><p>EmpireCMS</p></li><li><p>WUZHICMS</p></li><li><p>74CMS</p></li><li><p>Wordpress-4.0.1-zh_CN</p></li><li><p>TYPECHO CMS</p></li><li><p>XiaoCms_20141229</p></li><li><p>YXcmsApp1.4.6</p></li><li><p>MetInfo6.0.0</p></li><li><p>Fiyo_CMS</p></li><li><p>ZZCMS</p></li><li><p>PHPCMS</p></li></ul>`,
      file: { name: 'Web安全入门进阶靶场实战发布', size: '7 GB', md5: '512DCEB15F9F185D6A5C77F79E89EFBE', sha1: 'FB06EEBA7E75558220FDD1DF3127A003D5779C0E' },
      screenshots: [`${SCR_IMG}/2019/11/11/1573484293580.png`, `${SCR_IMG}/2019/11/11/1573484388069.png`, `${SCR_IMG}/2019/11/11/1573484407063.png`, `${SCR_IMG}/2019/11/11/15722569791.jpg`]
    }
  },
  {
    id: 3,
    page: 4,
    title: 'ATT&CK实战系列——红队实战（二）',
    date: '2019-10-21',
    viewCount: 124875,
    author: 'de1ay',
    image: `${VULN_IMG}/2019/10/21/%E6%8B%93%E6%8B%93%E5%9B%BE.jpg`,
    summary: '红队实战系列，主要以真实企业环境为实例搭建一系列靶场，通过练习、视频教程、博客三位一体学习。本次红队环境主要Access Token利用、WMI利用、域漏洞利用SMB relay，EWS relay，PTT(PTC)，MS14-068，GPP，SPN利用、黄金票据/白银票据/Sid History/MOF等攻防技术。关于靶场统一登录密码：1qaz@WSX …',
    updateTime: '2023-02-09',
    detail: {
      author: 'de1ay',
      createTime: '2019年10月21日 14:21',
      tags: ['威胁情报', '内网渗透', 'Kill Chain', '域渗透', '安全靶场'],
      description: `<p>红队实战系列，主要以真实企业环境为实例搭建一系列靶场，通过练习、视频教程、博客三位一体学习。本次红队环境主要Access Token利用、WMI利用、域漏洞利用SMB relay，EWS relay，PTT(PTC)，MS14-068，GPP，SPN利用、黄金票据/白银票据/Sid History/MOF等攻防技术。关于靶场统一登录密码：1qaz@WSX</p><ol start=""><li><p>Bypass UAC</p></li><li><p>Windows系统NTLM获取（理论知识：Windows认证）</p></li><li><p>Access Token利用（MSSQL利用）</p></li><li><p>WMI利用</p></li><li><p>网页代理，二层代理，特殊协议代理（DNS，ICMP）</p></li><li><p>域内信息收集</p></li><li><p>域漏洞利用：SMB relay，EWS relay，PTT(PTC)，MS14-068，GPP，SPN利用</p></li><li><p>域凭证收集</p></li><li><p>后门技术（黄金票据/白银票据/Sid History/MOF）</p></li></ol><h4>环境说明</h4><p>内网网段：10.10.10.1/24</p><p>DMZ网段：192.168.111.1/24</p><p>测试机地址：192.168.111.1（Windows），192.168.111.11（Linux）</p><h4>配置信息</h4><p><strong>DC</strong> IP：10.10.10.10 OS：Windows 2012(64) 应用：AD域</p><p><strong>WEB</strong> IP1：10.10.10.80 IP2：192.168.111.80 OS：Windows 2008(64) 应用：Weblogic 10.3.6 MSSQL 2008</p><p><strong>PC</strong> IP1：10.10.10.201 IP2：192.168.111.201 OS：Windows 7(32)</p>`,
      file: { name: 'ATT&CK红队评估实战靶场二', size: '23 GB', md5: 'e59afbb1eec6055c3ad3a53f3448c9db', sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2019/10/21/%E6%8B%93%E6%89%91%E5%9B%BE.jpg`, `${SCR_IMG}/2019/10/21/red.png`, `${SCR_IMG}/2019/10/21/vm.png`]
    }
  },
  {
    id: 2,
    page: 4,
    title: 'ATT&CK实战系列——红队实战（一）',
    date: '2019-10-20',
    viewCount: 269600,
    author: 'hongri',
    image: `${VULN_IMG}/2019/10/20/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191020231450.png`,
    summary: '红队实战系列，主要以真实企业环境为实例搭建一系列靶场，通过练习、视频教程、博客三位一体学习。另外本次实战完全模拟ATT&CK攻击链路进行搭建，开成完整闭环。后续也会搭建真实APT实战环境，从实战中成长。关于环境可以模拟出各种各样实战路线，目前给出作者实战的一套攻击实战路线如下，虚拟机所有统一密码：hongrisec@2019： …',
    updateTime: '2025-10-10',
    detail: {
      author: 'hongri',
      createTime: '2019年10月20日 14:05',
      tags: ['内网渗透', 'Kill Chain', '域渗透', '威胁情报'],
      description: `<p>红队实战系列，主要以真实企业环境为实例搭建一系列靶场，通过练习、视频教程、博客三位一体学习。另外本次实战完全模拟ATT&CK攻击链路进行搭建，开成完整闭环。后续也会搭建真实APT实战环境，从实战中成长。关于环境可以模拟出各种各样实战路线，目前给出作者实战的一套攻击实战路线如下，虚拟机所有统一密码：hongrisec@2019：</p><p>一、环境搭建<br />1.环境搭建测试<br />2.信息收集</p><p>二、漏洞利用<br />3.漏洞搜索与利用<br />4.后台Getshell上传技巧<br />5.系统信息收集<br />6.主机密码收集</p><p>三、内网搜集<br />7.内网--继续信息收集<br />8.内网攻击姿势--信息泄露<br />9.内网攻击姿势-MS08-067<br />10.内网攻击姿势-SMB远程桌面口令猜测<br />11.内网攻击姿势-Oracle数据库TNS服务漏洞<br />12.内网攻击姿势-RPC DCOM服务漏洞</p><p>四、横向移动<br />13.内网其它主机端口-文件读取<br />14.内网其它主机端口-redis<br />15.内网其它主机端口-redis Getshell<br />16.内网其它主机端口-MySQL数据库<br />17.内网其它主机端口-MySQL提权</p><p>五、构建通道<br />18.内网其它主机端口-代理转发</p><p>六、持久控制<br />19.域渗透-域成员信息收集<br />20.域渗透-基础服务弱口令探测及深度利用之powershell<br />21.域渗透-横向移动[wmi利用]<br />22.域渗透-C2命令执行<br />23.域渗透-利用DomainFronting实现对beacon的深度隐藏<br />24.域渗透-域控实现与利用</p><p>七、痕迹清理<br />25、日志清理</p>`,
      file: { name: 'ATT&CK红队评估实战靶场', size: '13 GB', md5: COMMON_MD5, sha1: COMMON_SHA1 },
      screenshots: [`${SCR_IMG}/2019/10/20/%E7%BB%98%E5%9B%BE2.png`, `${SCR_IMG}/2019/10/20/%E7%BB%98%E5%9B%BE3.png`, `${SCR_IMG}/2019/10/20/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191020220847.png`, `${SCR_IMG}/2019/10/21/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20191021101244.png`, `${SCR_IMG}/2019/10/21/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20191021101439.png`]
    }
  }
]

// 分页配置：每页6条，共4页（第4页2条）
export const totalPages = 4
export const pageSize = 6

// 获取指定页的漏洞列表
export function getVulnsByPage(page) {
  return vulns.filter(v => v.page === page)
}

// 按 id 获取漏洞详情
export function getVulnById(id) {
  return vulns.find(v => v.id === Number(id))
}

// 站点 URL 常量（供组件使用）
export const SITE_URL = SITE
export const WWEQ_IMG = `static/images/wweq.jpg`
