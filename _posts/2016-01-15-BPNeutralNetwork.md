---
layout: post
title: BP神经网络
category: 技术
tags: [数据挖掘]
description: 
---

> 一晃又是几个月没更新了，最近面临发paper的问题，想紧跟潮流用深度学习做一些东西，想学习深度学习，先要从神经网络说起。

## 1、神经元 ##

　　神经元（Neuron）是构成神经网络的基本单元。人工神经元和感知器非常类似，也是模拟生物神经元特性，接受一组输入信号并产出输出。生物神经元有一个阀值，当神经元所获得的输入信号的积累效果超过阀值时，它就处于兴奋状态；否则，应该处于抑制状态。

　　人工神经元使用一个非线性的激活函数，输出一个活性值。假定神经元接受n个输入$$x=(x_1,x_2,\ldots,x_n)$$,用状态z表示一个神经元所获得的输入信号x的加权和，输出为该神经元的活性值a。具体定于如下:

\begin{equation}\label{equation1}z = \omega^T x + b\end{equation} 

\begin{equation}\label{equation2}a = f(z)\end{equation}

　　其中，w是n维的权重向量，b 是偏置。典型的激活函数f 有sigmoid型函数、非线性斜面函数等。
　　如果我们设激活函数f为0或1的阶跃函数，人工神经元就是感知器。

### sigmoid 函数 ###

sigmoid 型函数是指一类S 型曲线函数，常用的sigmoid 型函数有logistic 函数$$\sigma(x)$$ 和tanh(x) 函数。

\begin{equation}\label{equation３}\sigma(x) = \frac{1}{1 + e ^ {-x}}\end{equation}

\begin{equation}\label{equation４}\tanh(x) = \frac{e ^ {x} － e ^ {-x}}{e ^ {x} + e ^ {-x}}\end{equation} 





 

## 2、高级参数 ##







  



