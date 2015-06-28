---
layout: post
title: JDK动态代理与spring中的AOP
category: 技术
tags:  Java,spring
description: 
---

>spring有两大核心，一个是依赖注入，一个是AOP。AOP是什么呢，Aspect-OrientedProgramming，面向切面编程。AOP是对OOP（Object-Oriented Programing）面向对象编程的一种很好的补充和完善。传统的OOP为我们建立了一种对象的层次结构，子类继承父类。但是如果对于不同的类有一些公共的行为，而这些类类不能从同一个类继承而来。那么势必要在这些不同的类中造成代码的重复。例如，日志功能，异常处理功能。在OOP设计中，它导致了大量代码的重复，而不利于各个模块的重用。spring很好的为我们提供了这样一种面且切面编程的能力，今天学习下AOP。以及它的实现方式，采用JDK动态




**分享使用的百度分享**

只需要在每一个页面中引入如下代码就可以了，你也可以放到模板里，引入这个模板。

	<!-- 百度分享 BEGIN -->
	<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>
	<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
	<!-- 百度分享 END -->


**评论使用友言插件**

需要现在友言网站上注册一个账号，这个账号可以在后台进行管理。然后在页面中引入如下代码。uid=2042092 是我在友言的用户id。

	<!-- UY BEGIN -->
	<div id="uyan_frame"></div>
	<script type="text/javascript" src="http://v2.uyan.cc/code/uyan.js?uid=2042092"></script>
	<!-- UY END -->


