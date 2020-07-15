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

// new Promise(resolve => {
//     console.log("1");
//     setTimeout(() => {
//       resolve('100')
//     }, 1000)
// }).then(val =>{
//     return new Promise(resolve =>{
//         console.log("2");
//         setTimeout(() => {
//             resolve('110')
//           }, 1000)
//     }).then(val =>{
//         console.log("3");
//         return val
//     }).then(val=>{
//         console.log("4");
//         return val 
//     })    
// }).then(val=>{
//     console.log(val);
//     console.log("5");
    
// })
new Promise(resolve => {
    console.log("1");
    setTimeout(() => {
      throw new Error('wrong')
    }, 1000)
}).then(val =>{
        console.log("3");
        return val
}).catch(error=>{
    console.log(error);
    
})