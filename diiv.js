var S;
var time = new Date();
var sec = time.getSeconds();
var min = time.getMinutes();
var hour = time.getHours();
var passed = 0;
var framerate = 0;
//------------0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25
let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function tested(V) {
    S = prompt(V);
    if (S == V) {
        alert("맞습니다.");
    }
    else {
        alert("다시 시도하십시오.");
    }
}
function teller(V) {
    alert(V);
}
function afktester() {
    const testint = 1;
    var correction = 0;
    if (passed == 0) {
        alert("사용자 검사입니다. 다음에 나올 알파벳을 대문자 그대로 작성해 주십시오.")
        for (var v = 0; v <= Math.floor(Math.random() * 7 + 3); v++) {
            var ranalp = alpha[Math.floor(Math.random() * 26)];
            var ansalp = prompt(ranalp);
            if (ranalp == ansalp)
                correction++;
        }
        if (correction < v - 1) {
            alert("다시 시도하십시오.");
            afktester();
        }
        else {
            passed = 1;
            alert("인증되셨습니다. 협조해 주셔서 감사합니다.");
        }
    }
    else { alert("이용 가능 시간대가 아닙니다."); }
}
function checker() {
    var ID = document.querySelectorAll('input')[0];
    var PW = document.querySelectorAll('input')[1];
    if (ID.value == "testid" && PW.value == "passcode") {
        alert("환영합니다.");
    }
    else {
        alert("?");
    }
}