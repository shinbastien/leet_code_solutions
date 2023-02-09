# [알고리즘 문제풀이] 195. Tenth Line

# 195. Tenth Line

링크: [https://leetcode.com/problems/tenth-line/description/](https://leetcode.com/problems/tenth-line/description/)

### 문제 파악

(어떤 문제인가)

- 파일의 10번째 줄만 딱 반환하시오. 만약 파일이 10줄이 안되면 반환하지 말 것.
-

## 좋은 풀이

```bash
cnt=0
while read line && [ $cnt -le 10 ]; 
do let 'cnt = cnt + 1' 
if [ $cnt -eq 10 ]; then
    echo $line
    exit 0
  fi
done < file.txt
```

(설명) 답지 확인함… 엔터에 따라서도 bash는 에러가 발생할 수 있음을 깨닫고 벽을 느끼는 중.

- 논리는 간단. line 이 있고, cnt ≤ 10일 때까지 확인 (1번째 줄에 바로 1이 되기 때문에 10까지 확인)
    - cnt === 10이면 줄 반환

## 다른 풀이

```bash
# Solution 2
awk 'FNR == 10 {print }'  file.txt
# OR
awk 'NR == 10' file.txt

# Solution 3
sed -n 10p file.txt

# Solution 4
tail -n+10 file.txt|head -1
```

(설명) 각각 다른 명령어 사용. 하나씩 확인해보자

- awk ⇒ 지정된 패턴에 맞춰서 수정, 입력, 출력 등을 할 수 있는 명령어 여기서는 print로 출력을 했다.
    - FNR 은 현재 작업이 이뤄지고 있는 line 에 대한 기록을 의미 10번째 줄이면 FNR == 10
    - NR 과의 차이는 FNR 은 (File Number Record) , 즉 해당 파일에 대해서 몇번째 행인지를 의미. NR은 전체 파일들에 대해. 여기서는 한 파일만 쓰므로 둘이 같은 의미
- sed 또 비슷한 방식의 명령어. 수정, 입력, 출력에 쓰임
    - sed [OPTIONS] 'command' file 의 형태로 쓰임
    - -n 은 automatic printing 을 막기 위한 옵션
    - 10p 는 10번째 줄을 print 하라는 의미
- tail -n+10 file.txt|head -1
    - -n 은 은 파일 끝에서부터 print를 시작할 위치 받아서 출력한다.
    - +10 은 시작에서부터 10번째 줄에서부터 시작
        - ⇒ 10번째 줄부터 파일 끝까지 출력해라
        - 만약 그냥 10이였으면? 마지막에서부터 10줄을 출력해라
    - |head -1 은 output을 받아서 가장 첫번째 줄 (-1) 만을 출력하라는 의미

---

### 배운 것들 정리

- bash 용법, 명령어 정리