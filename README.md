# Soft Friend

## Code use
練習vue的元件、元件溝通等功能

### 一 Vue重點複習
1. props: 在子元件設定prop，父元件經由用此prop傳輸資料給子元件。(在父元件template中，把prop當作attr傳輸給子元件)
2. emit: 在子元件設定的事件中設定 emit (如@click="$emit('hi')") ，在父元件監聽emit出去的參數 (@hi="...")
3. provide/inject: props及 emit只能針對父子元件，provide/ inject 可誇越此限制，實現祖孫溝通，祖provide 孫inject。
4. 元件的建立: global 及 local (分別可見於app.vue 及 MainContent.vue)
5. 複習watch的使用: 可監聽物件，當改變時就去執行程式。(詳見 ToggleSelection.vue)
6. slot: 在slot中可以加入其他html tag，可以當作模板樣式(例如 BaseSection.vue)。若有多個slot則需用name slot，並在使用時外加template，然後加上v-slot="[slot name]"或#[slot name]即可使用 (詳見AddFriend.vue)
7. 動態元件: 可用 <component is="your_component_name"></> 去設定。
8. teleport:  可用<teleport to="html_section"></> 去設定 (html_section 例如 body header ...) 
9. Vue3 draggable:(詳見ShowFriend.vue) 
    - install: npm install --save vuedraggable@next
    - use: [github連結](https://github.com/SortableJS/vue.draggable.next)
    - notice: 不要更改裡面的參數(下圖)，例如element或 myArray等值。
```html
 <draggable 
  v-model="myArray" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  item-key="id">
  <template #item="{element}">
    <div>{{element.name}}</div>
   </template>
</draggable>
```

### 二 css學習
1. input tag 超出範圍，去設定 box-sizing: border-box.
2. 用 position: fixed 去設定 dialog 及 dialog後面的背景 (詳見BaseDialog.vue)
3. 置中 置右: 別忘了可用display: flex 中的 justify-contents 去設定


#### 建立vue cli (需先下載 npm intsall -g @vue/cli)
```
vue create [filename]
```

#### 執行指令
```
npm run serve
```