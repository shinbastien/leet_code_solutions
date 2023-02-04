# [알고리즘 문제풀이] **1376. Time Needed to Inform All Employees**

# **1376. Time Needed to Inform All Employees**

링크: [https://leetcode.com/problems/time-needed-to-inform-all-employees/description/](https://leetcode.com/problems/time-needed-to-inform-all-employees/description/)

### 문제 파악

(어떤 문제인가)

- 어떤 회사는 0 ~n-1까지 n 명의 직원이 있고, 각 직원은 자신의 매니저가 있다.
- `manager` 는 이 매니저 관계를 나타내는 배열로 `manager[i]` 는 직원 i의 매니저를 나타낸다.
- `headID` 는 대표의 index를 나타내며 `manager[headID] = -1` 이다.
- `informTime` 은 i 번째 직원이 자신의 직속 부하에게 정보를 전달하는데 필요한 시간을 나타내는 배열이다.
- 모든 직원은 전달을 받을 수 있는 내부 구조로 이뤄져있다고 전제할 수 있다.

이 상황에서, 지시사항이 대표로부터 부하 직원에게까지 전달되기 위해 필요한 시간을 구하라.

## 첫번째 풀이

```tsx
function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    var res = 0;
    var headNodes = [];
    var i = 0;
    headNodes.push(headID);
    while (headNodes.length > 0) {
        var currentHead = headNodes.pop();
        for (i=0; i<informTime.length; i++) {
            if (manager[i] === currentHead) {
                informTime[i] += informTime[currentHead];
                headNodes.push(i);  
            }
        };

    }
    return Math.max(...informTime)
};
```

(설명) BFS 로, 대표로부터 시작해서, 부하 직원들을 찾고, 부하 직원들의 informTime에 매니저의 informTime 값을 더해 informTime 내 최댓값을 반환한다.

- Time Complexity: O(n^2) headNodes 는 n번 돌고, 거기에 n만큼의 길이의 for 문이 있으므로 O(n^2)
- Space Complexity: O(N) 자식이 최대 n-1개까지 있으니 O(n).

### (실패했다면? 틀린 이유)

(실패한 이유) Time Limit Exceeded Error ⇒ O(N^2) 이 너무나도 컸다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```tsx
function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    
    interface empProps {
        id: number;
        manager: number;
        informTime: number;
        isLeaf: boolean;
    }

    var headNodes: empProps[] = [];
    var employees: empProps[] = [];

    employees = manager.map((item, index) => ({
        id: index,
        manager: item,
        informTime: informTime[index],
        isLeaf: informTime[index] === 0,
    }))

    // console.log(employees);

    headNodes.push({
        id: headID,
        manager: -1,
        informTime: informTime[headID],
        isLeaf: false,
    });
    while (headNodes.length > 0 && !employees.every(item => item.isLeaf === true)) {
        var currentHead = headNodes.shift();

        // console.log(employees);
        employees.forEach((item, index) => {
            if (item.manager === currentHead.id) {
                employees[index].informTime += currentHead.informTime;
                if (!item.isLeaf) headNodes.push(item);
            }
        })
        employees = employees.filter(item => item.id != currentHead.id);

    }
    informTime = employees.map(item => item.informTime);
    return Math.max(...informTime)
};
```

(설명) 유사한 방식, props를 설정해서 employees를 만들고, leaf 여부를 판단해서 for loop 횟수를 줄이고자 했으나, 큰 효과는 없었음.

- Time Complexity: O(n^2)
- Space Complexity:

### (실패했다면? 틀린 이유)

(실패한 이유) Time Limit Exceeded

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```tsx
function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    var stack = [];
    stack.push(headID);
    interface manProps {
        employees: number[];
        informTime: number;
    }
    var empTree: {[key: number]: manProps} = {};
    informTime.forEach((item, index) => {
        empTree[index] = {
            employees: [],
            informTime: item,
        }
    });

    manager.forEach((item, index) => {if(item!== -1) empTree[item].employees.push(index)});

    // console.log(empTree);

    while (stack.length > 0) {
        var cur = stack.shift();
        empTree[cur].employees.forEach((item) => {
            empTree[item].informTime += empTree[cur].informTime;
            stack.push(item);
        })
    }

    return Math.max(...Object.values(empTree).map(item => item.informTime));

};
```

(설명) BFS로 empTree를 key, value pair로 생성. informTime을 도는 것이 아니나, employees를 기준으로 돌고, index를 찾지 않아도 되어서 O(mn) 이 되었다.

- Time Complexity: O(mn) ⇒ worst case O(n^2)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee432583-e4c3-4729-80d0-c908b4ea6223/Untitled.png)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
var numOfMinutes = function(n, headID, manager, informTime) {
    manager.forEach((_, index) => timeFromEmployeeToHead(index))
        
    return Math.max(...informTime);
    
    function timeFromEmployeeToHead(id) {
        if (manager[id] !== -1) {
            informTime[id] += timeFromEmployeeToHead(manager[id]);
            manager[id] = -1
        }
        return informTime[id];
    }
};
```

(설명) DFS, recursion 각 node 에 대해, 밑에서부터 위로 올라가는 bottom-up 방식의 recursion 작성.

- Time Complexity: O(n*depth of tree)
- Space Complexity:

---

### 배운 것들 정리

- BFS, DFS 양쪽 풀이 모두 접근 ⇒ 그 동안 DFS 로만 접근하는 경우가 많았는데, 오랜만에 BFS로 시도.
    - BFS는 queue, DFS는 stack이 사용하기 유리.
- key, value pair 의 dictionary 이용. ⇒ index를 찾기 위한 시간이 줄어들기 때문에 더욱 용이.
- TypeScript 활용