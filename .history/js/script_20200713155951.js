// var xmlhttp = new XMLHttpRequest()
// var data = null

// xmlhttp.onreadystatechange = function(){
//     if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//         data = xmlhttp.responseText
//     }
// }

// xmlhttp.open("get","https://baidu.com",true)

// xmlhttp.send()

// //   ------------------------------------------------------------------


// $.ajax({
//     url:"https://baidu.com", // 请求地址
//     type:"get",              //  请求方式
//     async:true,              //  是否异步
//     dataType:"json",         //  数据类型
//     success:function(){        
//         console.log("请求成功");  // 请求成功后执行的函数
//     }
// })

let pro = new Promise(resolve => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
  setTimeout(() => {
    pro.then(value => {
    console.log(value) // hello world
  })
  }, 2000)