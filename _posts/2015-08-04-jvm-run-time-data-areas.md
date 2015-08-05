---
layout: post
title: 深入理解JVM虚拟机（JAVA内存区域与内存溢出异常）
category: 技术
tags: [Java,JVM]
description: 
---

> JAVA虚拟机运行时数据区
><a class="group" rel="group1" href="/assets/img/blogimg/java_memory.png"><img src="/assets/img/blogimg/java_memory.png" alt=""></a>
> 阅读 <<深入理解JAV虚拟机--JVM高级特性与最佳实践>>和[Java虚拟机规范](http://docs.oracle.com/javase/specs/jvms/se8/html/index.html)，结合一些自己的理解


Java虚拟机管理的内存包含以下几个运行时数据区域。

# 1、线程私有区 #

顾名思义，所谓线程私有区，就是每个线程运行时独享的内存区域，每个线程独享的内存区域又可分为三个部分

## 1.1、程序计数器（PC）##

几乎所有的程序里都需要一个程序计数器，来选取下一条需要执行的指令。这里可把它看做是线程所执行字节码的行号指示器，通过改变这个PC的值来选取下一条需要执行的字节码指令，分支、循环、跳转、异常处理、线程恢复等功能都要这个计数器来完成。

为了保证在JAVA多线程中，每个线程轮流切换后能恢复到正确的执行位置，因此每个线程都需要一个PC计数器，互不影响。

如果线程正在执行的是一个JAVA方法，PC记录的就是下一条需要执行的字节码指令地址（行号），而如果正在执行是一个native方法，则值为空。

注： 这是JVM虚拟机中没有规定任何 `OutOfMemoryError` 的区域


## 1.2、Java虚拟机栈 ##

和PC一样，它也是线程私有的，生命周期与线程相同。 虚拟机栈描述的是java中方法调用执行的内存模型，每个方法执行的同时都会创建一个栈帧（Stack Frame），栈帧中存储着`局部变量表`、`操作数栈`、	`方法出口`、`引用`、`动态链接`等信息，每一个方法从调用到执行完成的过程，就对应着栈帧在虚拟机栈中入栈道出栈的过程

<a class="group" rel="group1" href="/assets/img/blogimg/StackFrame.png"><img src="/assets/img/blogimg/StackFrame.png" alt=""></a>

局部变量表中存储着8种基本数据类型`boolean`、`byte`、`char`、
`short`、`int`、`float`、
`long`、`double`，对象引用（一个指向堆中对象起始地址的指针，或者是指向代表对象的句柄），还有返回地址类型（ReturnAddress,指向了一条字节码指令的地址）。

我们一般的说的栈就是指这一块区域。

## 1.3、本地方法栈 ##

	







