var posts=["2025/01/08/1月7日之事/","2025/03/19/[cpp]原生数组不可赋值引起的编译错误该如何解决？/","2025/01/23/markdown语法览/","2025/03/19/C原生数组不可赋值引起的编译错误该如何解决？/","2025/03/03/大学物理D学习笔记/","2025/01/03/数字逻辑与数字系统/","2025/03/29/cpp该如何面向对象/","2025/02/25/数学分析（下）学习笔记/","2025/01/01/数学分析（上）复习提纲/","2025/03/13/日寄其一/","2025/01/25/杭电acm入门/","2025/03/10/离散数学/","2025/02/05/本地部署deepseek-r1模型 评价——玩具 or not/","2025/01/03/线性代数复习提纲/","2025/04/09/癔症与投影与柏拉图/","2024/12/31/通信概论复习/","2025/01/22/（转载）做题家的困境与出路/","2025/03/21/（转载）cpp算法模板/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };