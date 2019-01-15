$(function () {

});

//차트 배경값 개수 설정
function backColor(){
    for (var i = 0; i< 4; i++) {
        var str = '';
        switch(i){
            case 0:
                str = 'rgba(51, 102, 204, 0.8)';
                break;
            case 1:
                str = 'rgba(229, 58, 64, 0.8)';
                break;
            case 2:
                str = 'rgba(165, 165, 165, 0.8)';
                break;
            case 3:
                str = 'rgba(252, 180, 65, 0.8)';
                break;
        }
        for (var j = 0; j < payment.length; j++) {
            myChart.data.datasets[i].backgroundColor[j] = str;
        }
    }
}