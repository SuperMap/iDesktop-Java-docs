---
id: SuperMap-help-screenshot-standard-V1_1
title: SuperMap Document screenshot specifications
---
## 修订说明

<table>  
  <tr>  
      <th>修订内容</th>
      <th>修订版本</th>
      <th>修订人</th>
      <th>修订时间</th>
    </tr>
    <tr>
        <th>形成第一稿</th>
        <th>V1.0</th>
        <th>何倩</th>
        <th>2019.4</th>
    </tr>
    <tr>
        <th>增添修订</th>
        <th>V1.1</th>
        <th>何倩</th>
        <th>2019.6</th>
    </tr>
</table>

# **1、对话框透明度设置**

Windows7默认蓝风格，不启用透明效果，设置流程如下：  
1.设置主题风格，选择“Windows7”；  
![图：主题风格设置](img/设置主题风格.png "设置主题风格")  
2.设置窗口颜色，点击上图中“窗口颜色”，进入下面的对话框，设置窗口的颜色，并且取消“启用透明效果”前复选框的选中状态，然后点击“保存修改”按钮即可。  
![图：设置窗口颜色](img/设置窗口颜色.png "窗口颜色设置")  

# **2、截图工具**

根据需求选取不同的工具生成配图。  
  1.截取产品软件界面、对话框、功能实现图等，使用Snagit软件，Snagit 10版本以及上。  
  2.资源结构图使用亿图图示专家，即EDraw Max。  
  3.类结构图使用建议使用Microsoft visio。  
  关于配图格式：设计过的配图，需提供透明背景的png格式图片，供深、浅色背景上使用。但软件截图，则提供png格式即可。

# **3、各产品共有截图样式**
  
  截图尽量避免图片过大，主要保证图片大小适中，小巧、清晰、重点突出，与文档中的文字内容相协调。尽量少截取界面图。  

## 3.1在第三方软件截图时

  当在第三方的软件中截图时，尽量避免截取带有第三方标志的部分以及没有必要展示的部分，例如，在 IE 浏览其中截取网页内容时，避免截取如下图中圈定的标题栏/标签页、收藏夹/书签栏、工具栏、命令栏、菜单栏及状态栏还有滚动条等部分。尤其在截取网页图片是不要出现个人收藏等其他信息。  
![图：三方软件截图](img/第三方软件内截图时图示.png "在第三方软件截图示例")

  注意：如果包含浏览器相关截面截图时，应避免暴露真实外网IP地址。

## 3.2窗口背景  

  当截取带有背景的图片时，尽量采用示范数据中已经配好的地图/场景等作为背景，如当截取带有地图背景的图片时，尽量采用安装包提供的示范数据中已经配好的地图，主要采用世界题图（世界题图_Day），如需要小范围数据，可以使用京津地区的地图。  
![图：窗口背景](img/地图背景图片为世界地图.png "地图背景图片为世界题图")  

## 3.3图片样式

### 3.3.1图片大小  

  提供的配图不压缩、不变形、图片尺寸不小于800像素、分辨率不小于96dpi。如需印刷的配图，需提供图片尺寸不小于1024像素，分辨率不小于300像dpi，软件截图除外。  
  建议图片大小适中，尺寸不宜过大，具体大小视图片内容复杂程度而定，但建议配图不复杂时，宽度不超过当前显示屏的宽度，高度不超过当前显示屏的高度，放置在页面正中时最好上下左右四侧都留有空白空间。   

### 3.3.2图片位置

  大部分截图统一居中放置，API的资源结构图左对齐放置。  
![图：图片位置1](img/界面居中放置.png "一般截图居中放置")  
![图：图片位置2](img/资源结构图左对齐放置.png "资源结构图左对齐放置")  

### 3.3.3 图注  

  若截图需添加图注。图注样式统一为图： XXXX，字体为当前文本字体，字号为当前文本字号，颜色建议为黑色。居中放置在对应图片下方，如下图所示。
![图：图注示例](img/图注示例.png "图注示例")  
  因为目前各产品文档的文字字体和字号都有一定差异。为了整体协调性所以图注没办法直接设置为统一的字体和字号。  

### 3.3.4完整截图

  一般的弹出的对话框，截取全图，使用Snagit的自动截图功能截取即可，截图前可以将页面缩小。如图所示：  
![图：完整截图](img/完整截图.png "完整截图示例")  
  注意：对整个软件界面进行截图的时候，不能截取到Windows的任务栏，不能出现QQ、微信等工具的图标。

### 3.3.5局部截图

  当描述的范围为整个界面的一部分或者某一个整体区域的一部分，考虑图片尺寸的限制，就不可能截取整个区域，因此，为了体现所截取的插图为某个整体区域的一部分，采用下面的表达方式，即撕裂的效果，以Snagit 12为例，对应Snagit>Image> Styles>Edges>Torn edge 图像边界效果。  
![图：局部截图](img/局部截图.png "局部截图-其右侧还有内容")  
  建议自己添加几个Quick Styles，以方便对图片的上、下、左、右分别进行处理。关于Quick Styles的设置：  
  （1）一般可以先选择默认提供的几个撕裂方式  
  （2）但是，默认的这几种样式，边线颜色太深（为黑色），并且带有阴影，放在文档中不好看。所以，可以对几种样式进行修改。  
  ***
  **图像边界效果的设置标准：**  
  Torn edge  
小图size =3px  
大图size=4px  
Canvas color：RGB(255，255，255)  
Shadow depth：2px  
Shadow color：RGB(192，192，192)  
Outline width:2px  
Outline color:RGB(192,192,192)  
***  
![图：局部截图参数设置](img/设置参数.png "局部截图参数设置")  

## 3.4框选

  当需要使用矩形框来框住图中的重点部分时， 大部分使用橘黄色矩形框，如果在同一图片上需要不同颜色的矩形框，可以使用红色、蓝色，如果这些颜色不能够满足需要，可以自行设置颜色，但是矩形框的线型和其他设置要统一使用一种。  
  注意：框选时尽量只框选需要重点突出的部分，避免框选其他的部分，不能遮挡图片有效内容。避免框选颜色与图片本身的颜色混淆。  
![图：矩形框选](img/框选.png "矩形框选示例")  
若图片无边框和背景，与网页中的文字不好区别，可以为其添加浅色边框以示区别。  
![图：浅色边框](img/浅色边框.png "图片浅色边框")  
**矩形边框样式参数**  
<table>  
  <tr>  
      <th>参数</th>
      <th>width</th>
      <th>color</th>
      <th>shadow</th>
    </tr>
    <tr>
        <th>橘红色矩形框</th>
        <th>2px</th>
        <th>RGB(227.108.9)</th>
        <th>no shadow</th>
    </tr>
    <tr>
        <th>蓝色矩形框</th>
        <th>2px</th>
        <th>RGB（255，0,0）</th>
        <th>no shadow</th>
    </tr>
     <tr>
        <th>红色矩形框</th>
        <th>2px</th>
        <th>RGB（0,0，255）</th>
        <th>no shadow</th>
    </tr>
       <tr>
        <th>图片边框</th>
        <th>1px</th>
        <th>RGB（219,238,243）</th>
        <th>no shadow</th>
    </tr>
</table>

## 3.5文字标注

**标注内容**  
以对功能的参数介绍为主，功能的使用场景以及使用此功能的注意要点。避免对功能操作步骤的逐一介绍。操作步骤简单并且易于理解的功能，不需要进行操作步骤的介绍。  
注意：添加的文字标注不能遮挡图片有效内容。避免文字标注颜色与图片本身的颜色混淆。  
**文字标注添加情况1**  
为了便于与产品界面本身的元素区别，并且更加醒目，文本标注一般采用了背景图框进行修饰。  
建议添加Quick Styles，以方便需要时直接添加标注背景图框。关于Quick Styles的设置：  
（1）一般可以先选择与预想样式相近的常规样式；  
（2）然后，对选择样式进行修改，添加到Quick Styles中。  
文本框如图所示  
![](img/橘红色文本标注框.png "橘红色文本标注框")
![](img/蓝色文本标注框.png "蓝色文本标注框")
![](img/红色文本标注框.png "红色文本标注框")  
另外，如果文本标注与矩形框元素配合使用，上面的“文本标注背景图框标准”与橘黄色矩形框配合使用，但如果配合使用的矩形框为非橘红色，则使用与矩形框颜色匹配的文本标注背景图框。  
**文本标注背景图框参数**

<table>  
  <tr>  
      <th>参数</th>
      <th>橘红色文本标注框</th>
      <th>蓝色文本标注框</th>
      <th>红色文本标注框</th>
    </tr>
    <tr>
        <th>文本框的线宽</th>
        <th>1</th>
        <th>1</th>
        <th>1</th>
    </tr>
    <tr>
        <th>文本框阴影</th>
        <th>无</th>
        <th>无</th>
        <th>无</th>
    </tr>
     <tr>
        <th>文本框边线色</th>
        <th>RGB (227,108,9)</th>
        <th>RGB (0,0,255)</th>
        <th>RGB (235,117,123)</th>
    </tr>
       <tr>
        <th>文本框填充色</th>
        <th>RGB (253,234,218)</th>
        <th>RGB (219,238,243)</th>
        <th>RGB (248,209,211)</th>
    </tr>
    <tr>
        <th>字体</th>
        <th>微软雅黑</th>
        <th>微软雅黑</th>
        <th>微软雅黑</th>
    </tr>
      <tr>
        <th>字号</th>
        <th>10、9</th>
        <th>10、9</th>
        <th>10、9</th>
    </tr>
      <tr>
        <th>字色</th>
        <th>RGB (227,108,9)</th>
        <th>RGB (31,73,125)</th>
        <th>RGB (255,0,0)</th>
    </tr>
     <tr>
        <th>边界填充</th>
        <th>0 px</th>
        <th>0 px</th>
        <th>0 px</th>
    </tr>
</table>

**文字标注添加情况2**  
另外，有些图片中的说明文字不加背景图框效果较佳，那么可以采用下面的形式:  
![图：文字标注情况2](img/文字标注情况2.png "文字标注情况2")  
文字标注颜色与箭头配合使用，如橘黄色文字标注与橘黄色箭头搭配使用，但如果配合使用的箭头为非橘黄色，则使用与箭头颜色匹配的文字标注。

## 3.6箭头

箭头与框选背景图框配合使用，箭头样式推荐![](img/arrow.png "箭头")，当箭头与矩形框配合使用时，箭头颜色同矩形框颜色。  
注意：避免箭头颜色与图片本身的颜色混淆。  
一般采用橘黄色箭头，设置如下：  
***  
箭头线宽：2  
阴影：无  
颜色：RGB(227,108,9)  
***  

## 3.7截图中的序号

如果截图中出现序号，应与矩形框元素配合使用，下面的“橘黄色序号”与橘黄色矩形框配合使用，但如果配合使用的矩形框为非橘黄色，则使用与矩形框颜色匹配的序号。  
![](img/橘红色序号.png "橘红色序号")
![](img/蓝色序号.png "蓝色序号")
![](img/红色序号.png "红色序号")  
**序号设置参数**

<table>  
  <tr>  
      <th>参数</th>
      <th>边线色（数字颜色）</th>
      <th>填充色</th>
      <th>形状</th>
    </tr>
      <tr>
        <th>橘红色序号</th>
        <th>RGB (255, 255, 255)</th>
        <th>RGB (227,108，9)</th>
        <th>Circle</th>
    </tr>
     <tr>
        <th>蓝色序号</th>
        <th>RGB (255, 255, 255)</th>
        <th>RGB (0,0,255)</th>
        <th>Circle</th>
    </tr>  
    <tr>
        <th>红色序号</th>
        <th>RGB (255, 255, 255)</th>
        <th>RGB (255,0，0)</th>
        <th>Circle</th>
    </tr>
</table>

## 3.8图片存在放大显示部分时

当图片过小无法显示全部信息时，建议使用放大图片脚本。当用户想要放大查看图片信息时，可点击图标查看放大效果。  
也可使用如下图的方式进行放大显示。
![图片放大显示](img/放大显示.png "图片放大显示")  

## 3.9插入视频时

**使用软件**  
建议使用Wink或Camtasia软件进行录制制作。  
**视频窗口**  
插入文档内的视频不要过大，建议视频窗口大小为800*600。

## 3.10软件中出现的版本信息

为了达到各产品的图片复用和避免后期维护麻烦，在截图时，尽量避免截取产品名及产品版本号等信息，可以通过设置选项或者在相应的配置文件中进行版本信息隐藏。  
注意：因为目前文档内有很多带有版本信息的截图所以所以建议及时进行更新或者替换为不带版本信息的截图。
同理，截图中存在copyright字样的，建议根据当前所在年份进行更新或者替换为不带版本信息的截图。

## 3.11当截取的图片出现地址时

当截取的图片中出现地址信息，如文件路径、网页路径，要修改为正式的、标准路径：  
1、对于文件路径尽量采用磁盘录、安装目录、或者根目录\SuperrMap 文件夹，例如：  
C:\*.png 或 C:\Program Files\SuperMap\SuperMap Deskpro .NET 9D 或
C: \SuperMap\*.udb  
2、对于网页地址，可以写成 http://www.supermap..com.cn\html\... 。  
![图：图示](img/图片内有路径的示例.png "图片内有路径")

## 3.12当插入图片为公式类时

当插入的图片为公式类时，即当插入的图片为如图所示的中英文字时，建议与当前文档字体统一。  
![图：公式类图片](img/公式类图片.png "公式类图片")

# 4.各产品特有截图样式

## 4.1移动GIS产品

1.移动设备上的截图统一加设备边框，具体需要区分手机和平板设备，统一添加如下样式的边框。  
![图：手机截图样式](img/手机.png "手机截图")
![图：平板截图样式](img/平板.png "平板截图")  
2.不同截图根据设备型号，选择不同的边框样式，帮助文档中的边框统一选择深色风格，如上所示。  
3.Android系统相关设备的配图不保留虚拟键盘及状态栏，在截图时需隐藏或处理截图时裁剪掉。边框大小根据裁剪后的尺寸进行调整。  