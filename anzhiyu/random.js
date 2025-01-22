var posts=["2025/01/08/1月7日之事/","2025/01/03/线性代数复习提纲/","2025/01/01/数学分析（上）复习提纲/","2024/12/31/通信概论复习/","2025/01/22/（转载）做题家的困境与出路/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };