# 返回距离指定时间还有多少时间（DD HH:mm:ss）

endDate:结束日期

startDate:开始日期 默认值现在

format:转换格式 默认值 HH:mm:ss (DD HH:mm:ss , HH:mm:ss, mm:ss, ss)

若开始时间大于结束时间则返回 false

```
import countDown  from  countDown-lz

countDown(endDate ,startDate , format)

```

若要做一个倒计时可以这么写

```
let time = ""
let timeInterval = setInterval(()=>{
    time = countDown('2023-03-13 18:30:00')
    console.log('time',time)
    if (!time) {
        clearInterval(timeInterval)
    }
},1000)

```
