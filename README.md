[English](./README-en.md)

# Stable-Diffusion-WebUI无边图像浏览



高性能的图片(文件)浏览器😋，自带百度云互传。

它适合在所有地方使用，针对云端还做了优化，你可以使用缩略图进行更快的预览和使用自带百度云进行文件传输。


还有一个独立不依赖sd-webui的版本[baiduyun-web-transfer](https://github.com/zanllp/baiduyun-web-transfer)


如果您对该项目有任何疑问或建议，请在GitHub上提交issue。



## 主要特性

> 使用prompt,lora,model搜索图像的功能即将可用

- 类chrome,vscode的多标签页多窗格。自由拖拽创建，同时预览多个文件夹，在多窗格之间移动文件
- 支持使用walk模式浏览图片，自动加载下个文件夹(类似`os.walk`)，让你不翻页浏览所有图片。亲测2w7+文件下正常工作
- 支持查看图像生成信息，发送图像到其他tab，可选的缩略图预览使用，全屏预览以及移动。
- 你也可以基于文件树的结构进行预览，同时支持基本的文件操作及多选删除/移动。
- 支持与百度云互传，相关依赖只有等要用时才会下载，使用拖拽操作进行上传下载，支持Shift、Ctrl进行多选。支持多任务同时。



[视频演示可以在Bilibili上观看](https://space.bilibili.com/27227392/channel/series)

文档后面有空再修改

强烈推荐使用在`在新页面打开`（在插件启动页的右上角），比塞在gradio里舒服太多，不过这时`发送图像到其他tab`功能是用不了的。


## 预览


<img width="1920" alt="image" src="https://user-images.githubusercontent.com/25872019/230064374-47ba209e-562b-47b8-a2ce-d867e3afe204.png">

<img width="1906" alt="image" src="https://user-images.githubusercontent.com/25872019/232167416-32a8b19d-b766-4f98-88f6-a1d48eaebec0.png">

### 右键菜单
<img width="517" alt="image" src="https://user-images.githubusercontent.com/25872019/230896820-26344b09-2297-4a2f-a6a7-4c2f0edb8a2c.png">

### Walk模式


https://user-images.githubusercontent.com/25872019/230768207-daab786b-d4ab-489f-ba6a-e9656bd530b8.mp4




### 深色模式

<img width="1916" alt="image" src="https://user-images.githubusercontent.com/25872019/230064879-c95866ac-999d-4d4b-87ea-3e38c8479415.png">





## FAQ

### 在移动端如何打开右键菜单？

你必须先在全局设置中把“支持使用长按打开右键菜单”打开，然后使用长按进行操作，即可代替右键打开右键菜单

<img  alt="image" src="https://user-images.githubusercontent.com/25872019/232274767-cc0ec850-343c-416c-aa80-2c85c76a05d8.jpg">
