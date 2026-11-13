import type { Register } from 'claude-code'

// 輸入框上方的一排按鈕：不用記指令，按一下就把 graphify 指令放進輸入框，
// 再按 Enter 送出（等同自己打的指令，斜線指令一定會被執行）。
export const register: Register = on => {
  on('ui.render', { component: 'AbovePrompt' }, ($, e, next) => {
    // Claude 正在回覆、或有問卷佔用這一列時，讓出位置
    if (e.props.hasSurvey || e.props.isWorking) {
      return next(e)
    }

    const { Box, Button, Text } = $.ui.resolve(e)

    const put = async (text: string) => {
      const { isFilled } = await $.prompt.fill({ text })
      $.ui.toast(isFilled ? '已放進輸入框，按 Enter 送出' : `無法放進輸入框，請手動輸入：${text}`)
    }

    return (
      <Box>
        <Text dimColor>graphify：</Text>
        <Button key="build" label="產生專案圖" onPress={() => void put('/graphify .')} />
        <Text> </Text>
        <Button key="update" label="只更新變動" onPress={() => void put('/graphify . --update')} />
      </Box>
    )
  })
}
