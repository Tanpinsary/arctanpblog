---
title: 大学物理D学习笔记
date: 2025/03/03/09:57
tags:
  - 物理
  - 学习笔记
categories: 
  - 学习笔记
---
# 01质点运动学
## 1-1
1. 质点概念（理想模型）
2. 质点运动学：研究质点位置随时间变化的规律
3. 参照系
   - 任意
   - 各种坐标系（直角，球，柱etc
4. 确定质点位置
   - 坐标法
   - 位矢法
   - 自然法（注意规定方向的正负
     ![image.png](https://pic.arctanp.top/PicGo/20250303100553470.png)
5. 运动学方程  当涉及时间变化时
   - 坐标法（消去变量$t$）
   - 位矢法
     ![image.png](https://pic.arctanp.top/PicGo/20250303100855235.png)
   - 自然法
6. 位移 $\vec{x}$
   - 注意$|\Delta \vec{r}|$与$\Delta r$区别
## 1-2
1. 速度 $\vec{v}$$$
     \vec{v}=\frac{\Delta\vec{r}}{\Delta t}
     $$
8. 瞬时速度 $$
    \vec{v}=\frac{d\vec{r}}{dt}
   $$
9. 瞬时速度的大小就是瞬时速率  $|d\vec{r}|=ds$
10. 加速度 $$
      \vec{a}=\frac{d^2\vec{r}}{dt^2}
    $$
11. ![image.png](https://pic.arctanp.top/PicGo/20250303103826469.png)
12. 自然坐标系
    - 设指点作曲线运动且轨迹已知，则选取参考点和正方向建立自然坐标系，方程为$s=s(t)$
    - 单位切向量$\vec{\tau}$ 指向运动方向
    - 单位法向量$\vec{n}$ 指向凹的一侧
    - 速度：$\vec{v}=v\vec{\tau}=\frac{ds}{dt}\vec{\tau}$
    - 加速度：![image.png](https://pic.arctanp.top/PicGo/20250303110705261.png)
      - 匀速率圆周运动
	    法向加速度：
        ![image.png](https://pic.arctanp.top/PicGo/20250303111108443.png)
      - 变速率圆周运动
        ![](https://pic.arctanp.top/PicGo/20250303111606583.png)
      -  一般曲线运动
        找到曲率半径，曲率半径越小，曲线越弯
        ![image.png](https://pic.arctanp.top/PicGo/20250303112629612.png)
## 1-5 圆周运动角量表示
1. 平面极坐标系
   - 角坐标
   - 角位移
   - 角速度 $\vec{w}=\frac{d\theta}{d t}$ 注意方向（右手螺旋）（矢量叉乘）
   - 角加速度 $\beta=\frac{dw}{dt}=\frac{d^2\theta}{dt^2}$
   - ![image.png](https://pic.arctanp.top/PicGo/20250303113500153.png)
   - 
   ![image.png](https://pic.arctanp.top/PicGo/20250303113946936.png)

---
# 第二章
## 2.1.4质点动力学的两类问题
- 两类问题（桥梁是加速度）
  ![image.png](https://pic.arctanp.top/PicGo/20250305080429000.png)
- 分析思路
	- **隔离物体**——明确研究对象
	- **具体分析**——研究对象的运动情况、受力情况
	- **选定坐标**——参考系，坐标系，正方向
	- **建立方程**——分量式
## 2.2 功能原理与机械能守恒定律
### 2.2.1 质点与质点系的功能定理
1. 恒力的功
$$
  W=\vec{F}\cdot \vec{S}
$$

2. 变力的功
   ![image.png](https://pic.arctanp.top/PicGo/20250305092042219.png)
3. 不同坐标系下的功的计算
   ![image.png](https://pic.arctanp.top/PicGo/20250305092426848.png)
4. 做功对运动状态的影响？——动能定理
   - 引入动能 $$
   E_{k}=\frac{1}{2}mv^2
   $$