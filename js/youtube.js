
var tag = document.createElement('script');
//createElement:스크립트 요소의 문서를 생성해서 tag변수에 할당

tag.src = "https://www.youtube.com/iframe_api";
//유튜브를 재생할 수 있는 외부자바스크립트 라이브러리를 태그의 소스에 할당

var firstScriptTag = document.getElementsByTagName('script')[0];
//스트립트(script) 요소중 제일 첫번째에 있는 요소를 찾아서 firstScriptTag 변수에 할당

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//너의 부모를 찾아서 요청하라 tag를  스트립트를 첫번째로 입력해라
/* firstScriptTag의 부모요소를 찾아서 기존 스크립트 요소중 맨 처음으로 
 이스크립트 태그를 삽입해서 실행 */

//var을 제외한 나머지는 수정 불가(player른 절대 수정 불가)
/* onYouTubeIframeAPIReady 함수이름은 YOUTUBE IFRAME API에서 사용하는 이름이기 때문에 
절대 다르게 지정하면 안됨 */
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
/*     onYouTubeIframeAPIReady() {
      new YT.Player('player' 손대지 않고 무조건 작성 */
    /* YT(유튜브) */
    videoId: 'An6LvWQuj_8',/* 최초 재생할 유튜브 영상 ID */
/* (https://www.youtube.com/watch?v=)제외 An6LvWQuj_8 유튜브에 복사 붙어넣기 */
//playVars : 영상을 재생하기 위한 여러가지 변수들
    playerVars:{
      autoplay : true, //자동 재생 유무
      loop : true, //반복 재생 유무
      playlist : 'An6LvWQuj_8' //loop: true이면 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      'onReady': function(event){
     //영상이 준비되었을 때, 동영상이 플레이되는 상활을 event라는 매개변수로 넘겨줌
        event.target.mute(); //음소거
      }
    }
  });
}