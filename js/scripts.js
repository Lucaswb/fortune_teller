$(document).ready(function(){
  $("form#luckSurvey").submit(function(event){
    event.preventDefault()
    $("#neutralPrediction, #goodPrediction, #badPrediction").hide();
    var badScore = 0
    var goodScore = 0
    $("input:checkbox[name=bad-things]:checked").each(function(){
      var badThing = $(this).val();
      badScore = badScore + parseInt(badThing)
    })
    $("input:checkbox[name=good-things]:checked").each(function(){
      var goodThing = $(this).val();
      goodScore = goodScore + parseInt(goodThing)
    })
    var totalScore = goodScore - badScore

    if (totalScore>=-1 && totalScore<= 1) {
      $("span#neutralPrediction").show()
      // $("span#goodPrediction").hide()
      // $("span#badPrediction").hide()
    } else if (totalScore>1){
      $("span#goodPrediction").show()
      // $("span#neutralPrediction").hide()
      // $("span#badPrediction").hide()
    } else {
      $("span#badPrediction").show()
      // $("span#neutralPrediction").hide()
      // $("span#goodPrediction").hide()
    }


  })
})
