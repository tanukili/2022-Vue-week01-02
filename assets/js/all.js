"use strict";

// 產品資料格式
var products = [{
  category: "甜甜圈",
  content: "尺寸：14x14cm",
  description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
  id: "-L9tH8jxVb2Ka_DYPwng",
  is_enabled: 1,
  origin_price: 150,
  price: 99,
  title: "草莓莓果夾心圈",
  unit: "個",
  num: 10,
  imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGRvbnV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  imagesUrl: ["https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80", "https://images.unsplash.com/photo-1559656914-a30970c1affd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxkb251dHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"]
}, {
  category: "蛋糕",
  content: "尺寸：6寸",
  description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
  id: "-McJ-VvcwfN1_Ye_NtVA",
  is_enabled: 16,
  origin_price: 1000,
  price: 900,
  title: "蜂蜜檸檬蛋糕",
  unit: "個",
  num: 1,
  imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
  imagesUrl: ["https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"]
}, {
  category: "蛋糕",
  content: "尺寸：6寸",
  description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
  id: "-McJ-VyqaFlLzUMmpPpm",
  is_enabled: 1,
  origin_price: 700,
  price: 600,
  title: "暗黑千層",
  unit: "個",
  num: 15,
  imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  imagesUrl: ["https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60", "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"]
}];
var productList = document.querySelector('.productList');
var productNum = document.querySelector('.productNum'); //渲染產品列表

function renderProductList() {
  var template = '';
  products.forEach(function (item) {
    template = template + "<tr>\n      <td width=\"150\">".concat(item.title, "</td>\n      <td width=\"120\">\n        ").concat(item.origin_price, "\n      </td>\n      <td width=\"120\">\n        ").concat(item.price, "\n      </td>\n      <td width=\"150\">\n      <span class=\"text-success\">\u555F\u7528</span>\n        <span>\u672A\u555F\u7528</span>\n      </td>\n      <td width=\"120\">\n        <button type=\"button\" class=\"btn btn-primary\">\u67E5\u770B\u7D30\u7BC0</button>\n      </td>\n    </tr>");
  });
  productList.innerHTML = template;
  productNum.innerHTML = "\u76EE\u524D\u6709 <span>".concat(products.length, "</span> \u9805\u7522\u54C1");
}

renderProductList(); //渲染產品細節

var productDetail = document.querySelector('.productDetail');

function renderProductDetail(id) {
  var data = products.filter(function (item) {
    return item.id === id;
  });
  console.log(data[0].title);
  var template = '';
  template = "<template>\n    <div class=\"card mb-3\">\n      <img src=\"\" class=\"card-img-top primary-image\" alt=\"\u4E3B\u5716\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n          ".concat(data.title, "\n          <span class=\"badge bg-primary ms-2\">{{  }}</span>\n        </h5>\n        <p class=\"card-text\">\u5546\u54C1\u63CF\u8FF0\uFF1A{{  }}</p>\n        <p class=\"card-text\">\u5546\u54C1\u5167\u5BB9\uFF1A{{  }}</p>\n        <div class=\"d-flex\">\n          <p class=\"card-text me-2\">{{  }}</p>\n          <p class=\"card-text text-secondary\"><del>{{  }}</del></p>\n        \u5143 / {{  }}\n        </div>\n      </div>\n    </div>\n    <template>\n      <img src=\"\" alt=\"\" class=\"images m-2\">\n    </template>\n  </template>\n  ");
  productDetail.innerHTML = template;
}

;
renderProductDetail('-L9tH8jxVb2Ka_DYPwng');
//# sourceMappingURL=all.js.map
