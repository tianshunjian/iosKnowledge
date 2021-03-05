## iOS App 瘦身

1. 删除无用图片，可以使用**LSUnusedResources**进行扫描
2. 压缩图片，imageOptim 或者 TinyPng
3. 使用Assets.xcassets管理图片，它会把png压缩成一个Assers.car文件，压缩比例比其他管理图片方式要高
4. 去除未使用的第三方库，减少release模式下库的引用，避免一些在debug模式下的库编译到release环境的ipa包中
```
pod 'A', :configurations => ['Debug'] // debug下用于调试的库
```

5. 删除未使用的头文件和已废弃的代码, NSLog只在Debug下打印
6. 静态库瘦身，release版删除多余的指令集，比如 armv7 兼容 armv7s，所以删除armv7s，i386和x86_64是针对模拟器的，release版可以删除，只保留 arm64。可以通过LinkMap文件查看并统计每个.o和.a的大小，并对较大的静态库进行瘦身
7. 编译选项优化，将release状态下设置以下选项为YES
	- Optimization Level 设为 Fastest,Smallest[-Os]
	- Strip Debug Symbols During Copy 设置YES 
	- Strip Linked Product 设置YES 
	- Make String Read-Only 设置YES 
	- Dead Code Stripping 设置YES 
	- Deployment PostProcessing 设置YES 
	- Symbols hidden by default 设置YES 