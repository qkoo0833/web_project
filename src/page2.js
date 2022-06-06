$(document).ready(function(){
    $("#btn").click(function(){
        var url = "http://openapi.foodsafetykorea.go.kr/api/f9b09646a1484e82946a/C005/xml/1/5/BAR_CD="
        url += $("#barcode").val();
        $("#bottom").text("")

        $.ajax({
            type    :"GET",
            url     : url,
            dataType: "xml",

            success : function(data){
                if($(data).find("total_count").text()=="0"){
                    alert("검색결과가 없습니다.")
                }

                $(data).find("row").each(function(){
                    var url = "http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=MYu9ej4FDlqP2sgkbEnE1FkoGx5x9DeIIK7HGY%2BO%2BPeZOC0HnZJkrG%2FYo09%2Fvs1uP3KnyF%2BgpyfEfsiLHXVqLA%3D%3D&desc_kor="
                    url += $(this).find("PRDLST_NM").text();
                    console.log(`내부ajax시도`)
                    console.log(url)
                    $.ajax({
                        type    :"GET",
                        url     : url,
                        dataType: "xml",
                        success : function(foodData){
                            var str = "";
                            if($(foodData).find("totalCount").text()=="0"){
                                alert("검색결과가 없습니다.")
                            }
                            $(foodData).find("item").each(function(){
                                str += $(this).find("DESC_KOR").text()
                                str += "<br>"
                                str += "1회 제공량: "+$(this).find("SERVING_WT").text()
                                str += "<br>"
                                str += "열량(kcal): "+$(this).find("NUTR_CONT1").text()
                                str += "<br>"
                                str += "탄수화물(g):"+$(this).find("NUTR_CONT2").text()
                                str += "<br>"
                                str += "단백질(g):"+$(this).find("NUTR_CONT3").text()
                                str += "<br>"
                                str += "지방(g):"+$(this).find("NUTR_CONT4").text()
                                str += "<br>"
                                $("#bottom").append(str)
                            })
                        },
                        error : function(){
                            alert("오류입니다2.")
                        }
                     })
                })
                
            },
            error : function(){
                alert("오류입니다2.")
            }
        })
    })
})