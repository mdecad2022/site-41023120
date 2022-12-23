var tipuesearch = {"pages": [{'title': 'About', 'text': '四設二甲 呂昕叡\xa041023120 \n 倉儲:  https://github.com/mdecad2022/site-41023120 \n 網頁:  https://mdecad2022.github.io/site-41023120/content/index.html \n \n https://stud.cycu.org:8146 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Replit', 'text': '除了將 Github 上的倉儲, git clone 到近端改版外, 也可以利用  Replit , 直接在瀏覽器上以 wsgi 模式, 執行 cmsimde 的動態網站. 如此可以免除在近端執行動態網站所需要的網路協定與 git 指令. 只不過  Replit  只給免費帳號 500 MB 的儲存空間, 過大的倉儲並不適合採用  Replit  執行 cmsimde 的動態網站. \n 使用  Replit  執行 cmsimde 的過程, 需要在 shell 執行: \n git submodule update --init --recursive \n 目的是取下子模組資料, 因為  Replit  與 Github 的連結, 似乎只使用 git clone, 並沒有加上 --recurse-submodules, 使用者必須手動執行. \n 另外則是利用 pip install flask flask_cors bs4 lxml pelican markdown gevent 安裝 cmsimde 所需模組, 與上述近端改版的差異是: 無需安裝  leo  與 pyopenssl, 因為系統是在雲端 Replit 的主機上執行, 目前還無法在  Replit  系統上使用  leo , 也無需自行配置近端伺服器的 SSL. \n 一旦將動態網站配置到  Replit  之後, 可以將動態網頁改版內容, 同步到對應的 Github 倉儲, 主要利用倉儲的  Github Pages  伺服靜態網頁 \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w2', 'text': '簡單說明有關課程的相關規劃與期程安排 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '創建 replit (雲端動態網站) \xa0 \n  Onedrive (需要 5TB 儲存資料, Teams 與 Meet 上課) \xa0 \n Onshape (可以在平板與手機上繪製或檢視零組件) \n 登入 mail2000 \n 下載以下3個程式 \n NX2027.3401_lite \n portable_python_3.10.6 \n CoppeliaSimEdu_4.3.0_rev12 \n \xa0 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '登入Replit \n 在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n git submodule update --init --recursive \xa0 \n pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \xa0 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '\n Login to\xa0 https://mail.nfu.edu.tw \xa0 -\xa0 查看登入 stud.cycu.org 伺服器的帳號密碼, 帳號為 cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到 excel 檔案\xa0 查詢 \xa0stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 \xa0 \n 修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. \xa0 \n 重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0\xa0 cad+學號@stud.cycu.org , 表示要使用 secure shell 遠端登入到 stud.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key \xa0 \n 設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. \xa0 \n 利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. \xa0 \n 對\xa0 server sftp 也可以利用\xa0\xa0 Filezilla portable , 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. \xa0 \n 接下來要下載\xa0\xa0 config \xa0設定檔案,\xa0 以 sftp 放入 stud.cycu.org 主機的 .ssh 目錄中. \xa0 \n 接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0\xa0 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 \n 利用\xa0 git clone --recurse-submodules\xa0\xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 demo \xa0 \n 接著下載\xa0 server.py , 在 Windows 編輯\xa0 server.py , 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. \xa0 \n 登入\xa0 Ubuntu 後, 會使用的指令: pwd 代表 print working directory, clear -\xa0 清除螢幕, cd - 更換目錄, ls -l 列出目錄詳細內容, chmod u+x\xa0 acp \xa0表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. \xa0 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '步驟簡述 \n 先下載 Filezilla portable  設定好站台(比較好用 \n git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \n \xa0 \xa0 \n git config --global user.name "name" \xa0 \n \xa0 \xa0 \n git config --global user.email "email" \xa0 \n 打完會產生.gitconfig \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n \xa0  會產生site-學號 \n git submodule update --init --recursive \xa0 \n \xa0 \n acp 放入倉儲後   \n chmod u+x acp\xa0 \xa0 \n 才可以執行acp \n source acp "提交說明字串" \xa0 \n \xa0 上傳指令 \n \n 下載server.py和config 放入倉儲(server.py要改成自己的 埠號 ) \n \n cd s, cd cmsimde, git pull origin master \xa0 \n \xa0  更新版本(如果有改過密碼要把舊的config刪掉) \n \xa0 \n python3 server.py \xa0 \n \xa0  執行server \n \n 如果server不能執行 \n ps axo pid.comm.user \n 可以查詢到以執行server \n kill -9 111919 \xa0 \n 可以殺掉自己的server \n \n https://stud.cycu.org:8xxx \xa0 進到自己的網頁 \n  8xxx每個人都有專屬的   \n 要把proxy關掉 \n', 'tags': '', 'url': 'w6.html'}, {'title': 'hw', 'text': '零件一練習wink影片 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'hw.html'}, {'title': 'w7', 'text': '老師檢查網頁處理問題 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8~w9', 'text': '期中考 \n 講解畫圖的程式 \n \n', 'tags': '', 'url': 'w8~w9.html'}, {'title': 'w8截圖', 'text': ' Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'w8截圖.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'H2', 'text': '\n 已知  block.prt  中 p8=59, p9=44, 請利用網際表單, 將 p8, p9 都改為 50 之後, 在瀏覽中提供新的 block_new.prt 檔案下載, 並直接在網頁上展示該零件的 STL 格式檔案. \n \n 零件   \xa0 \n \n \n \n \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n \n  存擋表單開始   存擋表單結束   執行與清除按鈕開始   執行與清除按鈕結束   程式執行 ouput 區   Brython 程式執行的結果, 都以 brython_div 作為切入位置   導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n', 'tags': '', 'url': 'H2.html'}, {'title': 'w12', 'text': '考試 \n  editor2 結束  \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w14', 'text': '\n \n \n \n \n Solvespace 零組件繪圖考試 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n (30%)  請根據  w13 one link robot 零組件繪圖與模擬教學影片 , 以 Solvespace 3.1 完成與影片相同連桿與旋轉軸尺寸之 two link robot 零組件繪製後, 壓縮為 .7z 檔案 upload 到個人的  https://stud.cycu.org :8xxxx 網站後, 將繪圖過程以 Wink 製作 mp4 影片後, 加上各階段繪圖說明 tag 後, 嵌入個人的 stud 動態網頁與個人課程 Github Pages 靜態網頁 (HW (H1) 下的 w14 (H2) 下的 Solvespace (H3) 頁面後, 可以得到 Solvespace 零組件繪圖考試分數. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n NX2027 零組件繪圖考試 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n (30%)  請依據 教學影片 中的零組件尺寸與組立條件, 使用 NX2027 繪製 one link robot 零組件後, , 壓縮為 .7z 檔案 upload 到個人的  https://stud.cycu.org :8xxxx 網站後, 將繪圖過程以 Wink 製作 mp4 影片後, 加上各階段繪圖說明 tag 後, 嵌入個人的 stud 動態網頁與個人課程 Github Pages 靜態網頁 (HW (H1) 下的 w14 (H2) 下的 NX (H3) 頁面後, 可以得到 NX 零組件繪圖考試分數. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Onshape 零組件繪圖考試 \n \n \n \n \n \n \n \n \n \n (40%)  請依據 教學影片 中的零組件尺寸與組立條件, 以\xa0Onshape 完成零組件繪圖後, 將各零件 URL 放入 HW (H1) 下的 w14 (H2) 下的 Onshape (H3)\xa0頁面中, 並將組立件以 STL 格式匯出後轉入 Coppeliasim, 在各旋轉軸接處加上 Revolute joint 後, 令各軸以每秒 10 度的速度運轉. 完成後, 請利用 CoppeliaSim 中的模擬影片製作工具轉為 mp4 後將模擬影片上傳至個人 Youtube 帳號下, 並將影片嵌入 HW (H1) 下之 w14 (H2) 下的 Onshape (H3)頁面後, 可以得到 Onshape 零組件繪圖考試分數. \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'Solvespace', 'text': 'solvespace零組件 \n \n \n \n \n \n \n   \n \n \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'NX2027 零組件', 'text': 'NX零組件.7z \n \n \n \n \n \n \n \n   \n \n \n', 'tags': '', 'url': 'NX2027 零組件.html'}, {'title': 'Onshape', 'text': 'Onshape \n', 'tags': '', 'url': 'Onshape.html'}, {'title': 'w15', 'text': 'solvespace2零組件 \n 繪製組合件並組裝 \n \n \n \n \n \n \n   \n \n \n \n 導入CoppeliaSimEdu \n \n \n \n \n \n \n   \n \n \n \n', 'tags': '', 'url': 'w15.html'}]};