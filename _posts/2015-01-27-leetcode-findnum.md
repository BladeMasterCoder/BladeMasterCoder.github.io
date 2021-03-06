---
layout: post
title: leetcode之寻找出现一次的数字
category: 技术
tags:  [leetcode,算法]
description: 
---

## 两次

>一个整形数组中，每个数字都出现两次，只有一个数字出现一次，找出这个数字。


在数学中，异或的数学符号为“⊕”,异或的算数属性为相同为0，不同为1

即

- 1 ⊕ 0 = 1 
- 0 ⊕ 1 = 1 
- 1 ⊕ 1 = 0 
- 0 ⊕ 0 = 0 

可利用异或特有的算数属性，任何一个数字异或它自己都等于0，也就是说，如果从头到尾依次异或数组中的每一个数字，那么最终的结果刚好是那个只出现一次的数字，因为那些出现两次的数字全部在异或中抵消掉了。


初始一个值 temp为0，然后用它异或数组中的每一个值，最后的结果就是这个出现一次的数字。

代码如下：

	public int singleNumber(int[] A) {   //待求数组A
        int temp = 0;
        for(int i = 0 ; i < A.length; i++){
            temp ^= A[i];            //异或运算
        }
        return temp;
	}

## 三次

>一个整形数组中，每个数字都出现三次，只有一个数字出现一次，找出这个数字。


这个问题显然不能再用异或求解了，因为三个数字异或之后不能消除。
或许可以采用暴力解法，即建一个Map，key是出现的数字，value是这个数字出现的次数。最后能得到出现一次的数字，但显然这种解法空间复杂度很高，如果数组很大，那么显然在HashMap中put get 的时候，时间复杂度也会很大。应该不考虑这种暴力式算法。

考虑到整形数字在电脑中存储的时候是四个byte，即32位bit，每一个数字都可以表示成一个32位的0 1 串，那么如果用一个32位的数组，记录数组中所有数字，每一位1出现的次数。然后每一位对3取余，数组中不为0的地方就是那一个只出现一次的数字的二进制中1的位置。

例如4出现3次。
4的二进制是 0000 0000 0000 0000 0000 0000 0000 0100
4出现三次的话，

统计的数组就把 数组中的第三位记为3，

即 数组为 0000 0000 0000 0000 0000 0000 0000 0300 

所有位对3取余，结果一定全为0。

代码如下：

	public static   int singleNumber(int[] A) {
        int bits[] = new int[32]; //定义一个32位数组       
        for (int i = 0; i < bits.length; i++) {
        	bits[i]=0;			//初始化  数组中所有值为0
		}            
        for (int i = 0; i < A.length; i++) {    	//对数组中每一个数字    	        	
			for (int j = 0; j < bits.length; j++) {	//这个数字的每一位			
				bits[j] += ((A[i] >> j) & 1);		//记录这个位上是否为1，为1的话 bits数组就加1		
			}
		}              
        int result = 0 ;               
        for (int j = 0; j < 32; j++)  				
            if (bits[j] % 3 != 0)  		//对3取余，是3的倍数的取余后都为0，剩下的就是我们要的
              result += (1 << j);       //把记录的二进制他转化成整形数字       
        return result;
    }



## 举一反三

通过这种思路，我们可以求出任何这种类型的题目。

- 如果一个数组中，每个数字都出现偶数次，只有一个数字出现一次，利用异或即可

- 如果一个数组中，每个数字都出现奇数(大于1)次，只有一个数字出现一次，那么就用一个32位的数组，记录所有位中为1的个数，最后数组中每一个数字对这个奇数取余，不为0的，把它取出，按它的位数，转化成十进制的数字。