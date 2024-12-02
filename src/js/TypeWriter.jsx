import { useState, useEffect } from "react";


export default function useTypeWriter(위치좌표, delayPassed) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const text = `현재 위치 좌표 : ${위치좌표}`;
    const speed = 100;

    if (delayPassed) {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          document.getElementById("text").textContent += text.charAt(index);
          setIndex(index + 1); // index를 업데이트하여 다음 글자 출력
        }, speed);

        return () => clearTimeout(timeoutId); // 타이머 정리
      } else {
        // 타이핑이 끝났을 때 cursor 숨기기
        setTimeout(()=> {
         document.querySelector(".cursor").style.visibility = "hidden";
        }, 2000)
      }
    }
  }, [index, 위치좌표, delayPassed]); // index, 위치좌표, delayPassed가 변경될 때마다 실행

  return index;
}