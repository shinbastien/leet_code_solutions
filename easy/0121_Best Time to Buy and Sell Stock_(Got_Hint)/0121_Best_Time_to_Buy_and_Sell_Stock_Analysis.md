# [알고리즘 문제풀이] **121. Best Time to Buy and Sell Stock**

# **121. Best Time to Buy and Sell Stock**

링크: [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

### 문제 파악

(어떤 문제인가)

- 수가 담긴 배열이 주어졌을 때, 각각의 숫자는 i번째 날의 주식의 값을 의미한다. 이 주식을 통해서 얻을 수 있는 가장 큰 수익은 얼마인지 반환하라
    - 매도시점은 무조건 매수시점 이후여야 하므로, index가 더 커야한다.

## 첫번째 풀이

```jsx
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) {
        return 0;
    }
    else {
        var max1 = Math.max(...prices.map((item) => item - prices[0]));
        var max2 = maxProfit(prices.slice(1));
        console.log(max1, max2);
        return (max1 > max2) ? max1 : max2;
    }
};
```

(설명) 재귀함수의 방식으로, 자신의 오른쪽 배열에서, 자신을 뺀 값 중 최댓값을 찾아서 그 다음 maxProfit 값과 비교한다.

- Time Complexity: O(n^2) ⇒ [prices.map](http://prices.map) 통해서 O(n) 이고, 재귀를 통해서 총 n 번 실행하기 때문에
- Space Complexity: O(n) ⇒ 스택을 n 번 실행 하기 때문에 O(1) * n ⇒ O(n)

### (실패했다면? 틀린 이유)

(실패한 이유) 시간 초과. O(n^2)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 두번째 풀이

```jsx
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0;
    }
    var maxPriceIndex = prices.indexOf(Math.max(...prices));
    var minPriceIndex = prices.indexOf(Math.min(...prices));
    if (minPriceIndex <= maxPriceIndex) {
        return Math.max(...prices) - Math.min(...prices);
    }
    var left = [];
    var right = [];
    if (maxPriceIndex === 0) {
        left = prices.slice(maxPriceIndex+1);
        
    }
    else {
        left = prices.slice(0, maxPriceIndex+1);
    }
    if (minPriceIndex === prices.length -1) {
        right = prices.slice(0, minPriceIndex);
    }
    else {
        right = prices.slice(minPriceIndex);
    }
    return Math.max(maxProfit(left), maxProfit(right));
};
```

(설명) 첫번째 풀이를 조금 더 세분화해서 다뤘다. 최솟값과 최댓값을 도입하고 만약 최솟값이 최댓값보다 왼쪽이라면 바로 return 하고, 아니면 최솟값을 기준으로 왼쪽, 최댓값을 기준으로 오른쪽을 탐색하도록 했다. 그 다음 최솟값, 그 다음 최댓값을 찾게 하기 위한 과정..

- Time Complexity: O(n^2)
- Space Complexity: O(n)

### (실패했다면? 틀린 이유)

(실패한 이유) 시간초과, 알고리즘 자체의 복잡도.. O(n^2)을 벗어나질 못했다.

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 세번째 풀이

```jsx
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var ms = [];
    var mx = [];
    var n = prices.length-1;
    var res = 0;
    for (i=0; i<prices.length; i++) {
        ms[i] = 0;
        mx[i] = 0;
    }
    ms[0] = prices[0];
    mx[n] = prices[n];
    for (i=1; i<n+1; i++) {
        if (ms[i-1] <= prices[i]) {
            ms[i]=ms[i-1];
        }
        else {
            ms[i] = prices[i];
        }
     
    }
    for (i=n-1; i>=0; i--) {
        if (mx[i+1] >= prices[i]) {
            mx[i] = mx[i+1];
        }
        else {
            mx[i] = prices[i];
        }
        
    }

    for (i=0; i<n; i++) {
        if (res < mx[i] - ms[i]) {
            res = mx[i] - ms[i];
        }
    }
    
    return res;
};
```

(설명) Iteration 활용. ms는 왼쪽에서부터 현재 index 까지 가장 작은 값을 담은 배열, mx는 오른쪽에서부터 현재 index까지 가장 큰 값을 담은 배열이다. 마지막 for 문은 mx[i] - ms[i]의 최댓값을 찾아서 반환하는 과정.

- Time Complexity: O(n) n 번 돌리는 for문 만을 이용.
- Space Complexity: O(n) 추가 배열 ms, mx 생성

### (실패했다면? 틀린 이유)

(실패한 이유)

### (성공했다면? 결과)

(leetcode에 나온 코드 결과를 적으세요)

(더 나은 풀이가 있을 수 있을지 고민)

## 좋은 풀이

```jsx
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
}
```

(설명) for 문을 돌면서, if 에서는 현재까지의 최소 가격을 찾는다. 만약 minPrice 가 더 크다면, minPrice 갱신하는 과정

만약 minPrice가 더 작다면, 지금까지의 maxProfit과 현재가 - minPrice와 비교해서 maxProfit 갱신

- Time Complexity: for 문 한 번 실행 O(n)
- Space Complexity: O(1) ⇒ 추가 배열 생성 x

## 좋은 풀이 (Functional Programming)

```jsx
const maxProfit = prices => prices.reduce((acc, price, i, prices) => {
    const minPrice = Math.min(...prices.slice(0, i+1));
    const profit = price - minPrice;
    return Math.max(acc, profit);
}, 0);
```

(설명) Array.reduce를 써서 갱신. minPrice는 마찬가지로 현재 위치까지의 가장 최솟값. profit은 현재가 - minPrice, maxProfit은 acc 와 profit의 비교 후 최댓값 갱신

- Time Complexity: O(n)
- Space Complexity: O(1)

---

### 배운 것들 정리

- 재귀로는 최대 효율이 나오지 않는 문제들도 있다.
- O(n^2) 을 벗어난 풀이를 생각하지 못했다.
    - 무엇을 알아야 하는지를 명확하게 파악 못한 것.
        - 나는 현재까지의 최솟값이라는 개념을 생각 못하고, 현재 값 혹은 앞으로 나오는 것의 최솟값 위주로만 생각했다.
- 함수형 프로그래밍이 꼭 재귀는 아니다. ⇒ reduce 를 잘 활용해보자.