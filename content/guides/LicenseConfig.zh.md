---
id: LicenseConfig
title: SuperMap 许可简介
---

　　SuperMap GIS 9D 许可用于验证 SuperMap GIS 9D 产品的可用性。针对 Windows 平台，提供 SuperMap 许可中心（SuperMap License Center）对许可进行配置和管理；在 Linux 平台，提供命令行方式配置许可。此外，SuperMap GIS 7C/8C 系列产品还提供了云许可。

　　在 Windows 和 Linux 操作系统下，SuperMap GIS 9D 系列产品均提供两种许可：试用许可和正式许可，其中正式许可又分为软许可和硬件许可。

### 试用许可

　　SuperMap GIS 9D 系列产品默认提供了90天的试用许可，您也可以在线申请试用许可，申请地址：[https://www.supermapol.com/web/pricing/triallicense](https://www.supermapol.com/web/pricing/triallicense)

　　用户只要安装了 SuperMap GIS 9D 系列产品，并在 Windows 平台部署 SuperMap 许可中心，或在 Linux 平台安装许可驱动 ，就可以查看到对应的产品的试用许可状态。

### 正式许可

　　正式许可的提供形式有两种：软许可和硬件许可。硬件许可又分为单机加密锁和网络加密锁。

1. 软许可，是以离线或在线方式获得合法的软件运行许可，激活到本机，即可生效。软许可分为单机软许可和网络软许可。如果激活单机软许可，则只能为本机提供许可服务；如果激活网络软许可，则可以为当前网络中的计算机提供许可服务。注意，在许可服务器上激活网络软许可后，无法转移该网络软许可。 
2. 硬件许可，是以硬件加密锁（简称“硬件锁”）的形式获得合法的软件运行许可。硬件锁分为以下两种：

   - 单机锁：只提供一个授权许可，需与 SuperMap GIS 产品安装在同一台计算机上。单机锁外观为绿色磨砂。 
   - 网络锁：网络加密锁可安装在网络中任意一台计算机上，可以提供多个授权许可，安装有网络锁的计算机称为许可服务器。网络中许可范围内的客户端无论是否安装驱动都能使用该网络锁。网络锁的外观为红色磨砂。 

　　其中，硬件许可的硬件加密锁在使用时，需要注意：

- 硬件锁插入计算机后，锁上的信号指示灯点亮说明硬件锁有效。 
- 在 Windows 操作系统下，硬件加密锁插入后会被识别为 USB 设备，可直接运行。 
- 在 Linux 操作系统下，需要安装加密锁的驱动程序，硬件加密锁才能插入并被识别。如果使用单机锁，请在本机安装加密锁的驱动程序；如果使用网络锁，则必须在许可服务器上安装加密锁驱动程序。 
- 对于两种硬件锁，在同一台计算机，会优先使用单机锁。 
- 如果在虚拟机上使用硬件锁，需要通过虚拟机软件的相关设置将硬件锁设备连接到虚拟机上。 

