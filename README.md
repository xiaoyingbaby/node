# 前端技术栈学习-基本操作、环境配置、常用命令等

## 一、Cmder

- 功能：windows终端，取代系统自带的cmd
- 安装：去官网[http://cmder.net/](http://cmder.net/)下载安装即可，分别有mini（6MB）和full（84MD）版本，都是portable的，解压即可使用。
- 技巧：
 - 1、使用命令行直接调用cmder：将安装目录添加到“环境变量”系统/path里，如D:\Program Files\cmder，加完之后,Win+r一下输入cmder,即可。
 - 2、将cmder加入右键菜单：在管理员权限的终端输入以下语句即可: Cmder.exe /REGISTER ALL
 - 3、一些设置：
- 字体：Main->Main console font ：“Source Code Pro	24”；
- 颜色：Features->Colors->Schemes ： “《xterm》”
- 命令：
 - cd 切换目录，可输入唯一文件名的前面几个字符按tab键自动补齐文件名
 - dir 显示文件，dir/w 仅显示文件命名
 - cls 清屏