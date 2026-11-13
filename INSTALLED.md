# 已安裝的插件／Skill／工具清單

> 最後更新：2026-11-13。安裝或移除任何東西後請更新這份清單。

## 使用者自行安裝

| 名稱 | 類型 | 安裝日 | 一句話說明 | 移除方式 |
|---|---|---|---|---|
| modern-web-guidance 0.0.194 | 插件（user scope，來自 claude-plugins-official） | 2026-11-13 | Google Chrome 官方的現代網頁最佳實踐與相容性指引；含 `modern-web-guidance`、`chrome-extensions` 兩個 skill，無 hooks／MCP，常駐約 476 token | `claude plugin uninstall modern-web-guidance@claude-plugins-official` |
| ui-ux-pro-max 2.15.0 | 全域 skill（`~/.claude/skills/ui-ux-pro-max`，npx skills 安裝） | 2026-11-13 | UI 風格、配色、字型、UX 準則的本機搜尋資料庫；腳本只用 Python 標準函式庫、無網路呼叫，3.6MB | 刪除 `~/.claude/skills/ui-ux-pro-max` |
| graphify 0.9.108（PyPI：`graphifyy`） | CLI（uv tool）＋全域 skill（`~/.claude/skills/graphify`） | 2026-11-13 | 把專案轉成互動關係圖（graph.html）與重點報告；程式碼本機解析不耗 token。未啟用常駐 hook；`graphify install` 在全域 `~/.claude/CLAUDE.md` 末尾加了 4 行註冊文字；SKILL.md 約 50KB，觸發時佔 context 較多 | `graphify uninstall` ＋ `uv tool uninstall graphifyy` |
| graphify-button 0.1.0（自製 mod） | 桌面版介面改造（`~/.claude/dev-mods/…/graphify-button`） | 2026-11-13 | 輸入框上方的「🗺️ 產生專案圖」「🔄 只更新變動」按鈕，送出 `/graphify .`；Claude 回覆中自動隱藏；無 hooks 攔截工具 | 刪除該 mod 資料夾 |

- MCP 伺服器（`~/.claude.json`、`claude_desktop_config.json`）：**無**
- 註：`~/.local/bin/claude` 是 2.1.150，比桌面版內建的 2.1.317 舊很多（終端機版需要時可更新）
- claude.ai 帳號插件：**無**
- 註：ui-ux-pro-max 刻意只裝單一 skill，未用插件版（插件版會一併裝 design、slides、brand 等 7 個 skill）

## 評估紀錄

| 名稱 | 日期 | 結論 | 狀態 |
|---|---|---|---|
| Modern Web Guidance | 2026-11-13 | ✅ | 已安裝 |
| UI/UX Pro Max | 2026-11-13 | ✅ | 已安裝 |
| graphify | 2026-11-13 | ⚠️ 只裝 CLI＋skill，不開常駐 hook；用於專案結構圖、找冗餘、callflow 架構圖 | 已安裝 |
| Clawd on Desk | 2026-11-13 | ⚠️ 記憶體已吃緊（swap 2.2GB）、桌面版有完成狀態清不掉的 bug（#1365）；改用內建通知 | 不裝 |
| Claude-Mem | 2026-11-13 | ❌ 與內建記憶重疊、背景負擔重 | 不裝 |
| Stop Slop | 2026-11-13 | ❌ 規則針對英文 | 不裝 |
| Task Observer | 2026-11-13 | ❌ 尚無自訂 skill 可優化 | 不裝 |
| Find Skills | 2026-11-13 | ❌ 會跳過審查直接安裝 | 不裝 |
| context7 | — | CLAUDE.md 有提到但尚未安裝 | 待評估 |

## claude.ai 帳號 Skill（官方內建）

| 名稱 | 一句話說明 |
|---|---|
| docs | 建立可分享、可留言的線上文件 |
| docx | 讀寫、編輯 Word 檔 |
| xlsx | 讀寫、整理 Excel／CSV 試算表 |
| pptx | 製作、讀取 PowerPoint 簡報 |
| pdf | 合併、拆分、擷取文字、OCR、填寫 PDF |
| google-workspace | 編輯雲端硬碟裡的 Google 文件／試算表／簡報 |
| deep-research | 多來源查資料並寫成完整研究報告 |
| skill-creator | 建立、修改、測試自訂 skill |
| computer-use | 截圖並操作 Mac 上的應用程式 |
| chrome-browser | 操作使用者自己的 Chrome（含登入狀態） |
| built-in-browser | 使用桌面版內建的獨立瀏覽器 |
| import-memory | 把其他 AI 助理的記憶匯入 Claude |
| morning | 產生每日晨間簡報，可設工作日自動執行 |

## Claude Code 內建指令

| 名稱 | 一句話說明 |
|---|---|
| code-review | 檢查程式碼變更或 PR 的 bug |
| security-review | 對目前變更做資安檢查 |
| simplify | 精簡變更後的程式碼並直接修改 |
| init | 為專案產生 CLAUDE.md |
| run | 啟動專案 app 確認修改有效 |
| loop | 定時重複執行某個指令 |
| schedule | 設定雲端定時執行的 agent |
| update-config | 修改 settings.json（權限、hooks） |
| fewer-permission-prompts | 把常用唯讀指令加入允許清單 |
| keybindings-help | 自訂快捷鍵 |
| claude-api | Claude API 參考資料 |
| dataviz | 繪製圖表的設計規範 |
| plugin-authoring | 自製 Claude 介面小改造（mod） |
| consolidate-memory | 整理合併 Claude 的記憶檔 |

## 桌面版附帶工具（MCP）

| 名稱 | 一句話說明 |
|---|---|
| Claude in Chrome | 操作真正的 Chrome 瀏覽器 |
| 內建瀏覽器 | App 內的獨立瀏覽器窗格 |
| Claude Docs | 建立、編輯 claude.ai 線上文件 |
| iOS Simulator | 在模擬器上跑、測 iOS app |
| Terminal | 讀取或執行 App 內終端機分頁 |
| Scheduled tasks | 建立本機排程任務 |
| MCP Registry | 搜尋可連接的外部服務 |

## 本機 CLI 工具（重點）

- uv：`~/.local/bin/uv`
- docker：`/usr/local/bin/docker`
- podman：**未安裝**
- node / npx：`/usr/local/bin`（非 nvm 管理）
