const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row"; 

    // liタグ生成
    const li = document.createElement("li");
    li.className = "task";
    li.innerText = inputText;

    // 完了ボタン生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    // 完了ボタン実装
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親タグを未完了リストから削除
        deleteFromIncomlpteList(deleteButton.parentNode);

        // 完了リストに追加する要素 
       const addTarget = completeButton.parentNode;
       const text = addTarget.firstElementChild.innerText;
       
        // div以下を初期化
       addTarget.textContent = null;

        // liタグ作成
       const li = document.createElement("li");
       li.innerText = text;

       //  buttonタグ作成  
       const backButton = document.createElement("button");
       backButton.innerText = "戻す";

      //  divタグの子要素に各要素を指定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

     //  完了リストに追加
     document.getElementById("complete-list").appendChild(addTarget); 
    })
     
    // 削除ボタン生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    // 削除ボタン実装
    deleteButton.addEventListener("click", () => {
       deleteFromIncomlpteList(deleteButton.parentNode);
    })

    // 未完了リストに表示するものをdiv以下に追加する
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);

    // 未完了リストから特定の要素を削除
    const deleteFromIncomlpteList = (target) => {
        document.getElementById("incomplete-list").removeChild(target);
    }

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());