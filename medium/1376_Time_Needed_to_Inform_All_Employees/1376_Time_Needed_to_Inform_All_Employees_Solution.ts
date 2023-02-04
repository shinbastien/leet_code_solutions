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

    while (stack.length > 0) {
        var cur = stack.shift();
        empTree[cur].employees.forEach((item) => {
            empTree[item].informTime += empTree[cur].informTime;
            stack.push(item);
        })
    }
    return Math.max(...Object.values(empTree).map(item => item.informTime));

};