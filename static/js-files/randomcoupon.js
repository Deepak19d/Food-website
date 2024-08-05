
const couponList = ['"foodzillaBest"', '">zomato"', '">swiggy"', '"partytime"', '"luckyday"'];

randomizeFunctioncoupon()

  function randomizeFunctioncoupon() {
      document.getElementById("randomcoupon").innerHTML = couponList[Math.floor(Math.random() * couponList.length)]
  }
