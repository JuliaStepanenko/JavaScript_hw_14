// Домашка #14 — DOM, BOM

// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка в консоль :
// - Используйте цикл for..of
// - Вывести общее кол-во элементов в консоль
// - Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль


let list = document.body.firstElementChild.childNodes;
console.log(list);
console.log(" Общее количество элементов в *Коллекции Элементов* " + list.length);
console.log("")


let arrayList = [];
for (let listElement of list) {
    arrayList.push(listElement.textContent);
}

let arrayListOnlyText = arrayList.filter(
    function (item){
        if(item % 2 !== 0 ){
            return item;
        }
        return  null
    }
)

console.log(arrayListOnlyText);

