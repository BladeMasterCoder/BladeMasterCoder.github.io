---
layout: post
title: BP神经网络
category: 技术
tags: [数据挖掘]
description: 
---

> 一晃又是几个月没更新了，最近面临发paper的问题，想紧跟潮流用深度学习做一些东西，想学习深度学习，先要从神经网络说起。

**神经元**

　　神经元（Neuron）是构成神经网络的基本单元。人工神经元和感知器非常类似，也是模拟生物神经元特性，接受一组输入信号并产出输出。生物神经元有一个阀值，当神经元所获得的输入信号的积累效果超过阀值时，它就处于兴奋状态；否则，应该处于抑制状态。

　　人工神经元使用一个非线性的激活函数，输出一个活性值。假定神经元接受n个输入$$x=(x_1,x_2,\ldots,x_n)$$,用状态z表示一个神经元所获得的输入信号x的加权和，输出为该神经元的活性值a。具体定于如下:

\begin{equation}\label{equation1}z = \omega^T x + b\end{equation} 

\begin{equation}\label{equation2}a = f(z)\end{equation}

　　其中，w是n维的权重向量，b 是偏置。典型的激活函数f 有sigmoid型函数、非线性斜面函数等。
　　如果我们设激活函数f为0或1的阶跃函数，人工神经元就是感知器。

**sigmoid 函数**

　　sigmoid 型函数是指一类S 型曲线函数，常用的sigmoid 型函数有logistic 函数$$\sigma(x)$$ 和tanh(x) 函数。

\begin{equation}\label{equation３}\sigma(x) = \frac{1}{1 + e ^ {-x}}\end{equation}

\begin{equation}\label{equation４}\tanh(x) = \frac{e ^ {x} - e ^ {-x}}{e ^ {x} + e ^ {-x}}\end{equation} 

　　logistic函数$$\sigma(x)$$对应的函数曲线如下图所示：	
![](http://tech.meituan.com/img/lr_intro/sigmoid.png)

　　tanh函数以看作是放大并平移的logistic函数$$tanh(x) = 2\sigma(2x)-1$$

　　sigmoid 型函数对中间区域的信号有增益，对两侧区的信号有抑制。这样的特点也和生物神经元类似，对一些输入有兴奋作用，另一些输入（两侧区）有抑制作用。和感知器的阶跃激活函数(−1/1, 0/1) 相比，sigmoid 型函数更符合生物神经元的特性，同时也有更好的数学性质。




 

**前馈神经网络**

**反向传播算法**







  



