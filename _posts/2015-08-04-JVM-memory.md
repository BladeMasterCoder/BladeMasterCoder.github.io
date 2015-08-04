---
layout: post
title: 深入理解JVM虚拟机（JAVA内存区域与内存溢出异常）
category: 技术
tags: [Java,JVM]
description: 
---

> 阅读 <<深入理解JAV虚拟机--JVM高级特性与最佳实践>>和Java虚拟机规范，结合一些自己的理解

Prettify使用

1.下载代码

直接到[google-code-prettify](http://code.google.com/p/google-code-prettify/)官网下载代码，然后将它们放到项目下

2.包含css和js

自己导入`prettify.css`和`prettify.js`，如下

	<link rel="stylesheet" href="/assets/js/prettify/prettify.css">
	<script src="/assets/js/prettify/prettify.js"></script>

调用 `prettify.js` 实现代码高亮，`linenums`表示显示行号，如果不想显示行号，就去掉。

	<script type="text/javascript">
	  $(function(){
	    $("pre").addClass("prettyprint linenums");
	    prettyPrint();
	  });
	</script>
	
这里导入了`css`和`js`后，就可以直接用`markdown`的`tab`的方式来导入代码段了

3.显示行号

默认的每五行显示一个行号，如果想每一行都显示行号，则需要修改`prettify.css`，`list-style-type` 由`none`改为 `decimal`

	li.L0, li.L1, li.L2, li.L3, li.L4, li.L5, li.L6, li.L7, li.L8, li.L9 { list-style-type: decimal;}

4.主题样式

如果对默认主题不满意，可自行修改`prettify.css`

我用的`prettify.css`完整如下

	pre.prettyprint { display: block; background-color: #333;font-size:14px; }
	pre .nocode { background-color: none; color: #000 }
	pre .str { color: #ffa0a0 } /* string  - pink */
	pre .kwd { color: #f0e68c; font-weight: bold }
	pre .com { color: #87ceeb } /* comment - skyblue */
	pre .typ { color: #98fb98 } /* type    - lightgreen */
	pre .lit { color: #cd5c5c } /* literal - darkred */
	pre .pun { color: #fff }    /* punctuation */
	pre .pln { color: #fff }    /* plaintext */
	pre .tag { color: #f0e68c; font-weight: bold } /* html/xml tag    - lightyellow */
	pre .atn { color: #bdb76b; font-weight: bold } /* attribute name  - khaki */
	pre .atv { color: #ffa0a0 } /* attribute value - pink */
	pre .dec { color: #98fb98 } /* decimal         - lightgreen */
	
	/* Specify class=linenums on a pre to get line numbering */
	ol.linenums { margin-top: 5px; margin-bottom: 5px; padding-left:5px;color: #AEAEAE } /* IE indents via margin-left */
	
	li.L0, li.L1, li.L2, li.L3, li.L4, li.L5, li.L6, li.L7, li.L8, li.L9 { list-style-type: decimal;}
	/* Alternate shading for lines */
	li.L1,li.L3,li.L5,li.L7,li.L9 { }
	
	@media print {
	  pre.prettyprint { background-color: none }
	  pre .str, code .str { color: #060 }
	  pre .kwd, code .kwd { color: #006; font-weight: bold }
	  pre .com, code .com { color: #600; font-style: italic }
	  pre .typ, code .typ { color: #404; font-weight: bold }
	  pre .lit, code .lit { color: #044 }
	  pre .pun, code .pun { color: #440 }
	  pre .pln, code .pln { color: #000 }
	  pre .tag, code .tag { color: #006; font-weight: bold }
	  pre .atn, code .atn { color: #404 }
	  pre .atv, code .atv { color: #060 }
	}
	
	
	.prettyprint.linenums ol li, pre.prettyprint.linenums ol li {
		padding-left: 12px;
		color: #bebec5;
		line-height: 20px;
		margin-left: 0;
	}
	.prettyprint.linenums, pre.prettyprint.linenums {
		-webkit-box-shadow: inset 40px 0 0 #3D4C53,inset 41px 0 0 #464741;
		-moz-box-shadow: inset 40px 0 0 #3D4C53,inset 41px 0 0 #464741;
		box-shadow: inset 40px 0 0 #3D4C53,inset 41px 0 0 #464741;
	}
	
	p > code{
		margin: 0 3px;
		background: #ddd;
		border: 1px solid #ccc;
		border-radius: 2px;
		color: rgba(0,0,0,0.6);
		font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;
	}
	
	a > code{
		margin: 0 3px;
		background: #ddd;
		border: 1px solid #ccc;
		border-radius: 2px;
		color: #2a7ae2;
	}


