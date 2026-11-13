# plugin-advisor

一個 Claude Code 專用工作資料夾：專門評估在網路上看到的 Claude Code 插件、Skill、
MCP 伺服器或 CLI 工具，**適不適合裝進我的電腦**（M1 MacBook Air、8GB 記憶體）。

## 使用方式

1. 在 Claude 桌面版的 Code 分頁，用這個資料夾開新對話（或在終端機執行 `claude`）。
2. 貼上插件／Skill 的網址或名稱，例如：「幫我評估 https://github.com/xxx/yyy」。
3. Claude 會自動套用 [CLAUDE.md](CLAUDE.md) 裡的評估標準，輸出結論與評分表。

## 檔案說明

| 檔案 | 用途 |
|---|---|
| `CLAUDE.md` | 顧問角色、使用者環境、評估流程與標準、輸出格式 |
| `INSTALLED.md` | 目前已安裝的插件／Skill／工具清單（評估時用來檢查重複與衝突） |

## 評估面向

用途與重複性、資源負擔、相容性（Apple Silicon）、安裝方式（uv / brew / docker / npx）、
安全與權限、Context 成本、維護狀態、移除難度。

## 授權

MIT
