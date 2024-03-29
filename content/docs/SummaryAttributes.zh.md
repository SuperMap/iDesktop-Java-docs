---
title: 属性汇总统计
---

　　属性汇总统计，指的是对输入的数据集中所有属性进行汇总统计。统计指定分组字段中，每个字段值的个数，并可以按照统计模式，统计指定字段的最大值、最小值、平均值等。

　　通过对输入的数据集设定分组字段、属性字段以及对属性字段需进行的统计模式，从而得到汇总统计的结果。以下图为例，按照字段borough进行分组统计，Queens的个数统计结果为5，再从中取得最小的LocationID为2。

　　![](img/SummaryAttributes.png)

##### 　　功能入口

　　提供了两个功能入口，如下所述：

- 在“在线”选项卡的“分析”组中，选择“属性汇总统计”，即可弹出**属性汇总统计**的参数设置对话框。
- 在**工具箱**，双击“在线分析”中的“属性汇总统计”，或者选中对应功能，将其拖拽到“可视化建模”窗口中，双击即可弹出**参数设置**面板。

##### 　　参数说明

　　属性汇总统计的参数设置分为登录iServer、源数据、分析参数三个部分，前两部分的操作说明请参见[数据输入](DataInputType.html)页面，分析参数的介绍如下：

1. **分组字段**：选填参数，指定分组字段后，则会根据字段各属性值的唯一组合来进行统计。可设置多个字段，使用逗号","分隔。
2. **属性字段**：选填参数，支持数值型的非系统字段，可通过下拉按钮选择字段，也可直接输入字段名。
3. **统计模式**：选填参数，对所选属性字段进行统计，支持的模式有：最大值、最小值、平均值、总和、方差、标准差，同时，还会统计分组字段中每组属性值的个数。
4. 设置好以上参数之后，即可执行分析，属性汇总分析的结果是属性表数据集，分析结果保存的路径会在输出窗口提示。


