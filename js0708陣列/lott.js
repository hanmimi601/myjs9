// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// 威力彩
function lott1() {
    // 第一區:1-38取個
    // 建立存放號碼空陣列
    let lott = [];

    // while
    while (1) {
        if (lott.length == 6) {
            break;
        }

        //   亂數取號碼
        let lottNo = Math.floor(Math.random() * 38) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) { //沒有重複
            lott.push(lottNo); //增加號碼到陣列中
        }
    }

    // 第一個號碼
    // for迴圈寫法
    // let lottNo = Math.floor(Math.random() * 38) + 1;
    // lott.push(lottNo);

    // // 第2個號碼之後，每個號碼都要檢查是否重覆
    // // 因為還要跑五個號碼
    // for (let i = 1; i <= 5; i++) {
    //     // 亂數取號碼
    //     lottNo = Math.floor(Math.random() * 38) + 1;
    //     // 檢查是否重複
    //     // 沒有重複
    //     if (lott.includes(lottNo) == false) {
    //         lott.push(lottNo); //增加號碼到陣列中
    //     } else {
    //         i--; //當號碼重複時，這次的執行次數不算，所以要倒減回來
    //     }
    // }
    // 未排序
    sortBefore.textContent = "排序前號碼" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    // 第二區號碼:1-8取1
    secNo.textContent = "第二區號碼:" + (Math.floor(Math.random() * 8) + 1);

}

// 大樂透
function lott2() {
    // 第一區:1-46取6個
    // 建立存放號碼空陣列
    let lott = [];

    // while
    while (1) {
        // 檢查是已經有6個號碼
        if (lott.length == 7) {
            break;
        }

        //   亂數取號碼
        let lottNo = Math.floor(Math.random() * 49) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) { //沒有重複
            lott.push(lottNo); //增加號碼到陣列中
        }
    }
    // 取出陣列最後一個值，並移除
    secNo.textContent = "特別號:" + lott.pop();

    // 未排序
    sortBefore.textContent = "排序前號碼" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    // 第二區號碼:1-49取1個(不能與第一區重複)
    while (1) {
        let lottNo2 = Math.floor(Math.random() * 49) + 1
        // 檢查是否有重複
        if (lott.includes(lottNo2) == false) {   //沒有重複
            secNo.textContent = "特別號:" + lottNo2;
            break;
        }
    }

}
// 今彩539
function lott3() {
    // 第一區:1-39取5個
    // 建立存放號碼空陣列
    let lott = [];

    // while

    while (1) {
        // 檢查
        if (lott.length == 5) {
            break;
        }

        //   亂數取號碼
        let lottNo = Math.floor(Math.random() * 39) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) { //沒有重複
            lott.push(lottNo); //增加號碼到陣列中
        }
    }
    // 未排序
    sortBefore.textContent = "排序前號碼" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後號碼" + lott;

    // 今彩沒有第二區，所以清除
    secNo.textContent = "";

}