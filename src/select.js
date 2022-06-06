let questions={
    0:{
        fat:1,
        keto:2,
        carbon:3,
        flex:2,
        cycle:1,
    },
    1:{
        question:"중도비만 입니까?",
        fat:2,
        keto:1,
        carbon:3,
        flex:1,
        cycle:1,
    },
    2:{
        question:"과체중 입니까?",
        fat:3,
        keto:0,
        carbon:2,
        flex:3,
        cycle:3,
    },
    3:{
        question:"복부비만 입니까?",
        fat:0,
        keto:2,
        carbon:3,
        flex:0,
        cycle:1,
    },
    4:{
        question:"전신비만 입니까?",
        fat:3,
        keto:1,
        carbon:1,
        flex:2,
        cycle:3,
    },
    5:{
        question:"활동량이 적은 편입니까?",
        fat:0,
        keto:2,
        carbon:3,
        flex:1,
        cycle:0,
    },
    6:{
        question:"이미 체지방률이 낮은 상태이고, 더 낮추고 싶은 건가요?",
        fat:2,
        keto:0,
        carbon:3,
        flex:1,
        cycle:2,
    },
    7:{
        question:"육체노동이 많은 편인가요?",
        fat:3,
        keto:0,
        carbon:2,
        flex:3,
        cycle:1,
    },
    8:{
        question:"지구력 종목을 즐기는 편인가요?",
        fat:1,
        keto:2,
        carbon:2,
        flex:2,
        cycle:3,
    },
    9:{
        question:"근력 위주의 종목을 즐기는 편인가요?",
        fat:3,
        keto:0,
        carbon:1,
        flex:2,
        cycle:3,
    },
    10:{
        question:"채식주의거나 채식을 즐기는 편인가요?",
        fat:3,
        keto:0,
        carbon:0,
        flex:0,
        cycle:1,
    },
    11:{
        question:"경제적인 방법을 찾으시나요?",
        fat:2,
        keto:0,
        carbon:0,
        flex:3,
        cycle:1,
    },
    12:{
        question:"계획한 다이어트 기간이 짧나요?",
        fat:1,
        keto:3,
        carbon:2,
        flex:0,
        cycle:0,
    },
    13:{
        question:"계획한 다이어트 기간이 긴가요?",
        fat:0,
        keto:1,
        carbon:2,
        flex:3,
        cycle:1,
    },
    14:{
        question:"어린이 혹은 청소년인가요?",
        fat:2,
        keto:0,
        carbon:2,
        flex:2,
        cycle:1,
    },
    15:{
        question:"고령자 인가요?",
        fat:2,
        keto:0,
        carbon:2,
        flex:1,
        cycle:0,
    },
    16:{
        question:"탄수화물에 대한 갈망이 심한 편인가요?",
        fat:0,
        keto:3,
        carbon:2,
        flex:0,
        cycle:0,
    },
    17:{
        question:"기름진 음식에 대한 갈망이 심한 편인가요?",
        fat:3,
        keto:0,
        carbon:2,
        flex:0,
        cycle:0,
    },
    18:{
        question:"폭식하는 때가 많나요?",
        fat:0,
        keto:3,
        carbon:2,
        flex:0,
        cycle:0,
    },
    19:{
        question:"외식이 잦은 직종인가요?",
        fat:2,
        keto:0,
        carbon:2,
        flex:3,
        cycle:2,
    },
    20:{
        question:"운동과 체중 관리 경력이 긴가요?",
        fat:2,
        keto:1,
        carbon:2,
        flex:2,
        cycle:3,
    }
}
let idx = 0
let carbon = 0
let keto = 0
let fat = 0
let cycle = 0
let flex = 0
$(document).ready(function(){
    $("#yes").on("click",function(){
        carbon+=questions[idx].carbon
        keto+=questions[idx].keto
        fat+=questions[idx].fat
        flex+=questions[idx].flex
        cycle+=questions[idx].cycle
        idx++
        if(idx>20){
            location.href="./result.html?lowcarbon="+carbon.toString()
            +"&keto="+keto.toString()
            +"&lowfat="+fat.toString()
            +"&flex="+flex.toString()
            +"&cycle="+cycle.toString()
        }
        $("#top>p").text(questions[idx].question)
        $("#number").text((idx+1).toString()+"/21")
    })
    $("#no").on("click",function(){
        idx++
        if(idx>20){
            location.href="./result.html?lowcarbon="+carbon.toString()
            +"&keto="+keto.toString()
            +"&lowfat="+fat.toString()
            +"&flex="+flex.toString()
            +"&cycle="+cycle.toString()
        }
        $("#top>p").text(questions[idx].question)
        $("#number").text((idx+1).toString()+"/21")
    })
})