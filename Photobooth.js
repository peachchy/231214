window.addEventListener('DOMContentLoaded', (event) => {
// 웹캠 스트림 가져오기
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var webcam = document.getElementById("webcam");
        webcam.srcObject = stream;
    })
    .catch(function (error) {
        console.error('웹캠 사용 오류:', error);
    });

// Capture button 클릭 이벤트 처리
    document.getElementById("captureButton").addEventListener("click", function () {
    var webcam = document.getElementById("webcam");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // 캡처 버튼 클릭 시 메시지 출력
    console.log("캡처 버튼이 클릭되었습니다");

    // 캔버스 크기를 웹캠 비디오 스트림의 크기에 맞춥니다.
    canvas.width = webcam.videoWidth;
    canvas.height = webcam.videoHeight;

    // 웹캠 프레임을 캔버스에 그립니다.
    context.drawImage(webcam, 0, 0, canvas.width, canvas.height);

    // 오버레이 PNG 파일을 로드하고 이미지 로드 후에 실행될 코드 추가
    var overlayImage = new Image();
    overlayImage.src = "액자.png";
    overlayImage.onload = function () {
        // 이미지가 로드된 후에 실행될 코드
        context.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
        // 캔버스 이미지 데이터를 가져오거나 사용자 정의 작업을 수행할 수 있습니다.
        // imageDataURL = canvas.toDataURL("image/png");
    };
});
});

