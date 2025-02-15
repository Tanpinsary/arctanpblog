var posts=["2025/01/08/1月7日之事/","2025/01/23/markdown语法览/","2025/01/01/数学分析（上）复习提纲/","2025/01/25/杭电acm入门/","2025/01/03/线性代数复习提纲/","2025/02/05/本地部署deepseek-r1模型 评价——玩具 or not/","2025/01/22/（转载）做题家的困境与出路/","2024/12/31/通信概论复习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };