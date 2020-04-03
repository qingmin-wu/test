
// var node1 = document.getElementById('lighttest');
// var node2 = document.getElementById('lightok')

// // function traversNode(node) {
// //     if(node && node.nodeType === 1) {
// //         console.log(node.tagName)
// //     }
// //     let childNodes = node.childNodes;
// //     let item;
// //     for(let i = 0;i < childNodes.length; i ++) {
// //         item = childNodes[i];
// //         if(item.nodeType === 1) {
// //             traversNode(item);
// //         }
// //     }
    
// // }

// // traversalNodes(node1);
// // traversalNodes(node2);


// //递归遍历一个dom树
// function traversalNodes(node) {
//     if(node && node.nodeType === 1) {
//         console.log(node.tagName);
//         let nodeChilds = node.childNodes,
//             item = null;
//         for(let i = 0; i < nodeChilds.length; i ++) {
//             item = nodeChilds[i];
//             if(item.nodeType === 1) {
//                 traversalNodes(item);
//             }
//         }
//     }
// }

// var canThreePartsEqualSum = function(A) {
//     let sum = A.reduce((a,b)=> a + b,0);
//     let [times,sinSum] = [0,0];
//     for(let i = 0; i< A.length; i ++) {
//         sinSum += A[i];
//         if(sinSum === sum / 3) {
//             times ++;
//             sinSum = 0;
//         }
//     }
//     console.log(times, sum, sinSum)
//     return (times === 3 && sum !== 0) || (times > 3 && sum === 0)

// };


// // canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])÷÷


// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,nums1.length - m)
//     nums2.splice(n,nums2.length - n)    
//     Object.assign(nums1,[...nums1,...nums2].sort((a,b) => a - b))
// };

// var lengthOfLIS = function(nums) {
//     if(nums.length == 0 || nums.length == 1) return nums.length;
//     let arr = [];
//     let num = 0;
//     for(let i = 0; i < nums.length - 1; i ++) {
//         arr.push(nums[i]);
//         for(let j = i + 1; j < nums.length; j ++) {
//             if(nums[j] > arr[arr.length - 1]) {
//                 arr.push(nums[j]);
//             }
//         }
//         if(arr.length > num) {
//             num = arr.length;
//         }
//         console.log(arr)
//         arr = [];
//     }
//     return num;
// };

// // lengthOfLIS([10,9,2,5,3,4]);


// let maxAreaOfIsland1 = (arr) => {
//     if (!arr.length) return 0;
//     let maxCount = 0;
//     let curCount = 0;
//     let hash1 = {}; // 都遍历过哪些1
//     let dfs = (row, col, arr) => {
//         if (row < 0 || row > arr.length - 1) return;
//         if (col < 0 || col > arr[0].length - 1) return;
//         // 碰到0，就是边界
//         if (arr[row][col] === 0) return;
//         if (hash1[row + '_' + col]) return;
//         if(!hash1[row + '_' + col]){
//             hash1[row + '_' + col] = true;
//             ++curCount;
//             dfs(row + 1, col, arr)
//             dfs(row - 1, col, arr)
//             dfs(row, col + 1, arr)
//             dfs(row, col - 1, arr)
//         }
//     }
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr[0].length; j++){
//             if (arr[i][j] === 0) continue;
//             if (hash1[i + '_' + j]) continue;

//             dfs(i, j, arr);
//             console.log(curCount)
//             // 更新最大值
//             maxCount = Math.max(maxCount, curCount)
//             // 重置下一个岛屿的面积数
//             curCount = 0;
//         }
//     }
//     return maxCount;
// }

// var maxAreaOfIsland2 = function(grid) {
//     if(!grid.length) return 0;
//     let [maxArea,curArea,obj] = [0,0,{}];
//     let abcd = (row, colum, grid) => {
//         if(row < 0 || row > grid.length - 1) return;
//         if(colum < 0 || colum > grid[0].length - 1) return;
//         //碰到0 即为dreturn  
//         if(grid[row][colum] === 0) return;
//         if(obj[row + '_' + colum]) return;
//         if(!obj[row + '_' + colum]) {
//             obj[row + '_' + colum] = true;
//             ++ curArea;
//             abcd(row + 1, colum, grid);
//             abcd(row - 1, colum, grid);
//             abcd(row, colum + 1, grid);
//             abcd(row, colum - 1, grid);
//         }
//     };
//     for(let i=0;i <grid.length; i ++) {
//         for(let j=0;j < grid[0].length; j ++) {
//             if(grid[i][j] === 0) continue;
//             if(obj[i + '_' + j]) continue;
//             abcd(i,j,grid);
//             console.log(curArea)
//             maxArea = Math.max(maxArea,curArea);
//             curArea = 0;
//         }
//     }
//     return maxArea;
// };

// // maxAreaOfIsland1([[0,0,1,0,0,0,0,1,0,0,0,0,0],
// //     [0,0,0,0,0,0,0,1,1,1,0,0,0],
// //     [0,1,1,0,1,0,0,0,0,0,0,0,0],
// //     [0,1,0,0,1,1,0,0,1,0,1,0,0],
// //     [0,1,0,0,1,1,0,0,1,1,1,0,0],
// //     [0,0,0,0,0,0,0,0,0,0,1,0,0],
// //     [0,0,0,0,0,0,0,1,1,1,0,0,0],
// //     [0,0,0,0,0,0,0,1,1,0,0,0,0]])

// // maxAreaOfIsland2([[0,0,1,0,0,0,0,1,0,0,0,0,0],
// //     [0,0,0,0,0,0,0,1,1,1,0,0,0],
// //     [0,1,1,0,1,0,0,0,0,0,0,0,0],
// //     [0,1,0,0,1,1,0,0,1,0,1,0,0],
// //     [0,1,0,0,1,1,0,0,1,1,1,0,0],
// //     [0,0,0,0,0,0,0,0,0,0,1,0,0],
// //     [0,0,0,0,0,0,0,1,1,1,0,0,0],
// //     [0,0,0,0,0,0,0,1,1,0,0,0,0]])

// var maxArea = function(height) {
//     let i = 0, // 左边界
//         j = height.length - 1, // 右边界
//         res = 0, // 最大值
//         lastHeight = 0; // 存放上一次的高度
//     while(i < j){
//         if (height[i] < height[j]) { // 以左边界为高
//             if (height[i] > lastHeight) { // 只考虑移动后高度增加的情况（移动后宽度肯定变小，若高度也变小，则面积是一定小于之前的）
//                 res = Math.max(res, (j - i) * height[i]); // 将最大值赋值给res
//                 lastHeight = height[i]; // 将高度赋值给lastHeight
//             }
//             i++;
//         } else { // 以右边界为高
//             if (height[j] > lastHeight) {
//                 res = Math.max(res, (j - i) * height[j]);
//                 lastHeight = height[j];
//             }
//             j--;
//         }
//     }
//     return res;
// };



// var maxProfit = function(prices) {
//     let lowPrice = Infinity
//     let maxProfit = 0
//     prices.forEach(x=>{
//         if(x < lowPrice) lowPrice = x
//         let profit = x - lowPrice
//         maxProfit = Math.max(maxProfit,profit)
//     }) 
//     return maxProfit
// };

// var compressString = function (S) {
//     let result = '';
//     let S_arr = S.match(/([a-zA-Z])\1*/g);
//     if(S_arr) { // 不作这个判断，LeetCode会报S_arr为null的错误
//       S_arr.forEach(function(item) {
//           result += item.charAt(0) + item.length;
//       })
//     }
//     return result.length >= S.length ? S : result;
//   };

//   var countCharacters = function(words, chars) {
//     let sum = 0
//     for(let i=0 ; i<words.length; i++){
//         const w = words[i]
//         let s = chars, flag = true, j = 0
//         while( j < w.length ){
//             if( s.indexOf(w[j]) === -1 ){
//                 flag = false
//                 break
//             }
//             s = s.replace(w[j],'')
//             j++
//         }
//         if( flag ) sum += w.length
//     }
//     return sum
// };


// var removeSubfolders = function(folder) {
//     folder = folder.sort();
//     let result = [];
//     const { length } = folder;
//     for(let i = 0,j; i < length; i++){
//         j = i + 1;
//         let v = `${folder[i]}/`;
//         console.log(v)
//         result.push(folder[i]);
//         while(j < length){
//             if(!folder[j].includes(v)) break;
//             j++;
//         }
//         i = j - 1;
//     }
//     return result;
// };

// let test = () => {
    
//     setInterval(function run() {
//         i ++
//     },100);
//     let i = 0;
//     setTimeout(function fun() {
//         i ++;
//         setTimeout(run, 100)
//     }, 100)
// }

// //一个数字累计加一
// let i = 1;
// function add() {
//     i ++;
//     console.log(add)
//     setTimeout(add, 1000)
// }

// function add(i) {
//     i ++
//     console.log(i);
//     if (i < 100) add(i);
// }


// var middleNode = function(head) {
//     let fast = head;
//     let slow = head;
//     while(fast && fast.next){
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     return slow;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var massage = function(nums) {
//     if (!nums || !nums.length) return 0;
//     if (nums.length === 1) return nums[0];
//     if (nums.length === 2) return Math.max(nums[0], nums[1]);
//     let dp = new Array(nums.length - 1);
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1]);
//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
//     }
//     return dp[nums.length - 1];
// };

// var massage = function(nums) {
//     const dp = [];
//     dp[0] = 0;
//     dp[1] = 0;

//     for (let i = 2; i < nums.length + 2; i++) {
//         dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
//     }

//     return dp[nums.length + 1];
// };

// var maxSubArray = function (nums) {
//     if (!Array.isArray(nums)) {
//         console.log('非法输入');
//     }
//     if (!nums.length) {
//         console.log('数组为空')
//     }
//     let maxSum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] > 0) {
//             nums[i] += nums[i - 1];
//         }
//         maxSum = Math.max(maxSum, nums[i]);
//     }
//     return maxSum
// };
// var maxSubArray = function(nums) {
//     let ans = nums[0];
//     let sum = 0;
//     for(const num of nums) {
//         if(sum > 0) {
//             sum += num;
//         } else {
//             sum = num;
//         }
//         ans = Math.max(ans, sum);
//     }
//     return ans;
// };


// var isSubsequence = function(s, t) {
//     if(s.length > t.length) return false;
//     let j = 0;
//     let arr = [];
//     for(let i = 0; i < s.length; i ++) {
//         for(; j < t.length; j ++) {
//             if(s[i] == t[j]) {
//                 arr.push(j);
//                 console.log(j)
//                 break;
//             }
//         }
//     }
//     return arr;
// };
// // isSubsequence("leeeeetcode","yyyyylyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyytyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyoyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyydyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")



// // for(var i = 0; i < 5; i ++) {
// //     (function(j) {
// //         setTimeout(function(j) {
// //             console.log(j);
// //         },1000)
// //     })(i)
// // }

// // const task = [];
// // for(var i = 0; i < 5; i ++) {
// //     ((j)=> {
// //         task.push(new Promise((resolve)=> {
// //             setTimeout((j)=> {
// //                 console.log(j);
// //                 resolve();
// //             },1000 * j)
// //         }))
// //     })(i)
// // }

// // Promise.all(task).then(()=> {
// //     setTimeout(()=> {
// //         console.log(i)
// //     })
// // })

// // const task = [];
// // const fun  = (i) => {
// //     new Promise((resolve)=> {
// //         setTimeout((i)=> {
// //             console.log(i)
// //         },1000 * i)
// //     })
// // }

// // for(var i = 0; i < 5; i ++) {
// //     task.push(fun(i))
// // }

// /**
//  * @param {character[][]} board
//  * @return {number}
//  */
// var numRookCaptures = function(board) {
//     let [x, y, sum] = [0, 0, 0];
//     let arr = [];
//     for(let i = 0; i < 8; i ++) {
//         if(board[i].indexOf('R') !== -1) {
//             x = i;
//             y = board[i].indexOf('R');
//         }
//     }
//     console.log(x,y)
//     const find = (a,b,board) => {
//         console.log(arr, a, b, sum)
//         if(arr.length === 4) return sum;
//         if(board[a][b] === 'B') {
//             arr.push(1);
//             return find(x, y, board)
//         }
//         if(board[a][b] === 'p') {
//             sum ++;
//             arr.push(1);
//             return find(x, y, board)
//         }
//         if(arr.length === 0 && a - 1 >= -1) {
//             if(a - 1 === -1) {
//                 arr.push(1);
//                 return find(x, y, board);
//             }
//             return find(a - 1, b, board);
//         }
//         if(arr.length === 1 && a + 1 <= 8) {
//             if(a + 1 === 8) {
//                 arr.push(1);
//                 return find(x, y, board);
//             }
//             return find(a + 1, b, board);
//         }
//         if(arr.length === 2 && b - 1 >= -1) {
//             if(b - 1 === -1) {
//                 arr.push(1);
//                 return find(x, y, board);
//             }
//             return find(a, b - 1, board);
//         }
//         if(arr.length === 3 && b + 1 <= 8) {
//             if(b + 1 === 8) {
//                 arr.push(1);
//                 return find(x, y, board);
//             }
//             return find(a, b + 1, board);
//         }
//     }
//     return find(x,y,board)
// };
// // console.log(numRookCaptures(
// //     [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
// // ))


// /**
//  * call  使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或者方法；
//  * 
//  * 手动实现一下
//  */

//  Function.prototype.call  = function(context) {
//     context.fn = this;
//     context.fn();
//     delete context.fn;
//  }

// var obj = {
//     a: 1,
// }

// function bar() {
//     console.log(this.value)
// }

// bar.call(obj);


// Function.prototype.call2 = function(context) {
//     context.fn = this;
//     var args = [];
//     for(let i = 1, len = arguments.length; i< len; i ++) {
//         args.push(`arguments[${i}]`)
//     }
//     eval(`context.fn(${args})`);
//     delete context.fn();
// }


// Function.prototype.call = function(context) {
//     var context = context || window;
//     context.fn = this;
//     const args = [];
//     for(let i = 1; i < arguments.length; i ++) {
//         args.push(`argumens[${i}]`)
//     }
//     let result = eval(`context.fn(${args})`);
//     delete context.fn;
//     return result;
// }


// Function.prototype.call3 = function(context) {
//     var context = context || window;
//     context.fn = this;
//     const args = [];
//     for(let i = 1; i < arguments.length; i ++) {
//         args.push(`arguments[${i}]`);
//     }
//     var result = eval(`context.fn(${args})`);
//     delete context.fn;
//     return result;
// }

// Function.prototype.apply = function(context, arr) {
//     var context = Object(context) || window;
//     context.fn = this;
//     var result;
//     if(!arr) result = context.fn();
//     const args = [];
//     for(let i = 0; i < arr.length; i ++) {
//         args.push(`arr[${i}]`);
//     }
//     result = eval(`context.fn(${args})`);
//     delete context.fn;
//     return result;
// }

// /**
//  * bind方法返回一个函数  bind的第一个参数作为this的指向  可以传入参数
//  */

//  Function.prototype.bind1 = function(context) {
//      if(typeof(this) !== 'function') throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
//      let self = this;
//      //获取bind函数的第二个参数到最后一个参数；
//      let args = Array.prototype.slice.call(arguments,1);
//      let fNOP = function() {};
//      let fBound = function() {
//          //获取返回的函数传入的参数
//         let bindArgs = Array.prototype.slice.call(arguments);
//         return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
//      }
//      fNOP.prototype = this.prototype;
//      fBound.prototype = new fNOP();
//      return fBound;
//  }

//  var hasGroupsSizeX = function(deck) {
//     let map = new Map()
//     for(let n of deck){
//         map.set(n,map.has(n)?map.get(n)+1:1)
//     }
//     let arr = [...map.values()]
//     let res = arr[0]
//     return arr.every(i => (res = gcd(res, i)) > 1)

// };

// let gcd = (a,b) => b === 0 ? a : gcd(b, a % b);









// let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))



// /**解析URL   把url解析成对象的形式 */

// function parseParams(url) {
//     const reg = /.+\?(.+)$/g;
//     const parmStr = reg.exec(url)[1];
//     const parmArr = parmStr.split("&");
//     let obj = {};
//     parmArr.forEach(item => {
//         if(/=/.test(item)) {
//             let [key, value] = item.split("=");
//             if(!obj.hasOwnproperty(key)) {
//                 obj[key] = value;
//             } else {
//                 obj[key] = [obj[key]].concat([value]);
//             }
//         }else {
//             obj[item] = true;
//         }
//     })
//     return obj;
// }




// /**
//  * 把一个URL的参数解析为对象的形式
//  */


//  function foo(url) {
//      const reg = /.+\?(.+)$/;
//      const parmStr = reg.exec(url)[1];
//      const parmArr = parmStr.split('&');
//      let obj = {};
//      parmArr.forEach(item => {
//          if(/=/.test(item)) {
//              let [key, value] = item.split('=');
//              if(!obj.hasOwnproperty(key)) {
//                  obj[key] = value;
//              } else {
//                  obj[key] = [].concat([obj[key], value])
//              }
//          }else {
//              obj[key] = true;
//          }
//      })
//      return obj;
//  }


//  var minimumLengthEncoding = function(words) {
//     let S = ''
//     words = words.sort( (a,b)=>b.length - a.length)
//     for( let i = 0; i < words.length; i++ ){
//         const word = words[i]
//         const index = S.indexOf( word + '#' )
//         if( !~index ) {
//             S += `${word}#`
//         }
//     }
//     return S.length
// };

// Function.prototype.call = function(context) {
//     var context = context || window;
//     context.fn = this;
//     let args = arguments.slice(1);
//     let result = context.fn(...args);
//     delete context.fn;
//     return result;
// }


// Funtion.prototype.apply = function(context, arr) {
//     let context = Object(context) || window;
//     context.fn = this;
//     let result;
//     if(!arr) {
//         result = context.fn();
//     } else {
//         result = context.fn(...arr)
//     }
//     delete context.fn;
//     return result;
    
// }

// function _new(fun) {
//     //创建一个新对象
//     let obj = new Object();
//     //继承函数的原型
//     obj.__proto__ = fun.prototype;
//     //将创建的对象作为this的上下文
//     let res = fun.call(obj);
//     // 如何返回的内容荣是对象  则返回该对象  否则返回新创建的对象
//     return typeof(res) === 'object' ? res : obj;



// }

var maxDistance = function(grid) {
    let maxDis = 0;
    let [island, ocean] = [[],[]];
    for(let i = 0; i < grid.length; i ++) {
        for(let j = 0; j < grid.length; j ++) {
            //遍历出来的每一个island坐标
            if(grid[i][j] === 1) island.push([i,j]);
            if(grid[i][j] === 0) ocean.push([i,j]);
        }
    }
    console.log(island)
    console.log(ocean)
    if(ocean.length === grid.length * grid.length) return -1;
    if(island.length === grid.length * grid.length) return -1;
    for(let x = 0; x < ocean.length; x ++) {
        let args = [];
        let abc;
        for(let y = 0; y < island.length; y ++) {
            abc = Math.abs(ocean[x][0] - island[y][0]) +
             Math.abs(ocean[x][1] - island[y][1]);  
            args.push(abc);

        }
        maxDis = Math.max(Math.min(...args), maxDis)
    }
    return maxDis;
};
// console.log(maxDistance([[0,0,1,1,1],[0,1,1,0,0],[0,0,1,1,0],[1,0,0,0,0],[1,1,0,0,1]]))

var numIslands = function(grid) {
    let row = grid.length;
    if(row === 0) return 0;
    let col = grid[0].length;
    if(col === 0) return 0;
    let num = 0;
    function find(x, y) {
        if(grid[x][y] == "0") return 0;
        //横向遍历
        grid[x][y] = "0";
        if(x - 1 >= 0 && grid[x - 1][y] === "1") find(x - 1, y);
        if(x + 1 < row && grid[x + 1][y] === "1") find(x + 1, y);
        if(y - 1 >= 0 && grid[x][y - 1] === "1") find(x, y - 1);
        if(y + 1 < col && grid[x][y + 1] === "1") find(x, y + 1);
        return 1
    }
    for(let i = 0; i < row; i ++) {
        for(let j = 0; j < col; j ++) {
            if(grid[i][j] == "1") {
                console.log(i, j)
                num += find(i, j)
            }
        }
    }
    return num;

};
// numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","1"]])
var islandPerimeter = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let len = 0;

    function find(x, y) {
        //遭遇边界  果断加一
        if(x - 1 < 0) len ++;
        if(x + 1 > row) len ++;
        if(y - 1 < 0) len ++;
        if(y + 1 > col) len ++;
        //不在边界  判断上下左右是如果为零  果断加一 
        if(x - 1 >= 0 && grid[x - 1][y] === 0) len ++;
        if(x + 1 < row && grid[x + 1][y] === 0 ) len ++;
        if(y - 1 >= 0 && grid[x][y - 1] === 0) len ++;
        if(y + 1 < col && grid[x][y + 1] === 0 ) len ++;
    }

    for(let i = 0; i < row; i ++) {
        for(let j = 0; j < col; j ++) {
            if(grid[i][j] == 1) {
                console.log(i, j)
                find(i, j)
                console.log(len)
            }
        }
    }
    return len;
};
// islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])

// 在边界上的岛屿不是孤立的岛屿 可以认为是海水
// 与边界上的岛屿相邻的岛屿也不是孤立的岛屿 可以认为是海水
// 剩下的都是孤立岛屿 使用深度优先遍历就可以了
// 找到孤立岛屿之后的将这座孤立岛屿认为是海水 下次深度优先遍历的时候就不会访问到
// 因此每座岛屿只访问一次
var closedIsland = function (grid) {
  let _y = grid.length - 1;
  let _x = grid[0].length - 1;
  let dfs = function (y, x) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
      if (y > 0) dfs(y - 1, x);
      if (y < _y) dfs(y + 1, x);
      if (x > 0) dfs(y, x - 1);
      if (x < _x) dfs(y, x + 1);
    }
  }
  for (let y = 0; y <= _y; ++y) {
    dfs(y, 0)
    dfs(y, _x)
  }
  for (let x = 1; x < _x; ++x) {
    dfs(0, x)
    dfs(_y, x)
  }
  let res = 0;
  for (let y = 1; y < _y; ++y) {
    for (let x = 1; x < _x; ++x) {
      if (grid[y][x] === 0) {
        ++res
        dfs(y, x);
      }
    }
  }
  return res;
};

// 函数防抖  你尽管触发一个事件，但是该事件一定是在触发n秒以后才执行，如果在一个事件触发的n秒内又触发了事件，则以新的时间算起；
function debounce(func, wait) {
    let timer;
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            func.apply(context,arguments);
        }, wait)
    }
}

//函数节流  持续触发事件，一段时间内只执行一次；
function throttle(func, wait) {
    let begin = 0;
    return function() {
        let args = arguments;
        let context = this;
        let time = new Date().getTime();
        if(time - begin > wait) {
            func.apply(context, args);
            begin = time;
        }
    }
}

var singleNumber = function(nums) {

    return nums.forEach(item => {
        if(nums.lastIndexOf(item) == nums.indexOf(item)) {
            console.log(item);
            return 1;
        };

    })
};
console.log(singleNumber([2,2,1]))




























