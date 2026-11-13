import type { Register } from 'claude-code'

// 輸入框上方的一排按鈕：不用記指令，按一下就送出 graphify。
export const register: Register = on => {
  on('ui.render', { component: 'AbovePrompt' }, ($, e, next) => {
    // Claude 正在回覆、或有問卷佔用這一列時，讓出位置
    if (e.props.hasSurvey || e.props.isWorking) {
      return next(e)
    }

    const { Box, Button, Text } = $.ui.resolve(e)

    return (
      <Box>
        <Text dimColor>graphify：</Text>
        <Button
          key="build"
          label="產生專案圖"
          onPress={() => void $.prompt.submit({ text: '/graphify .' })}
        />
        <Text> </Text>
        <Button
          key="update"
          label="只更新變動"
          onPress={() => void $.prompt.submit({ text: '/graphify . --update' })}
        />
      </Box>
    )
  })
}
