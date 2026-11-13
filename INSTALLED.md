# 已安裝的插件／Skill／工具清單

> 最後盤點：2026-11-13。安裝或移除任何東西後請更新這份清單。

## 使用者自行安裝

- 本機插件（`/plugin`）：**無**（官方市集 `claude-plugins-official` 已下載，但未安裝任何插件）
- 自訂 Skill（`~/.claude/skills`）：**無**
- MCP 伺服器（`~/.claude.json`、`claude_desktop_config.json`）：**無**
- claude.ai 帳號插件：**無**
- 待評估：CLAUDE.md 有提到 context7，但尚未安裝

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
