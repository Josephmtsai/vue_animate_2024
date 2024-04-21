[Demo](https://josephmtsai.github.io/vue_animate_2024/)

# Github Pages Setting

1. Page Setup default Branch

2. Vite Deploy need add related folder

```
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: process.env.NODE_ENV === 'production' ? '/vue_animate_2024/' : '/',
});

```

3. Github Token add into Secrets

4. Workflow Permission change into _Read and write permissions_

Q:
側邊選單

1. 另提供一個下拉選單，需包含所有種類。從下拉選單中選取任一項目時，等同點擊該項目
   =>使用 Pinia 紀錄 Key =>種類 然後使用 getter 判斷是否有被選取
2. 請實作記憶功能，關閉分頁後再開啟，可以顯示上次選取的項目
   =>使用 LocalStorage 紀錄選取的位置以及項目 (第幾階層以及 Key ) 頁面重新讀取後先去讀取 LocalStorage 再來渲染畫面
3. 請在效能考量下，設計可收合、展開最多一百層的選單
   => 使用一個 Arry 紀錄打開到第幾層 以及第幾個 node  
   如[1, 2, 3 ,5 ] 第一層的第一個 Item ,第二層的第二個 Item ....
   畫面只顯示當下那一層的 Item
