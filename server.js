require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/qwen-suggest', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt' });
    }
    try {
        const response = await axios.post(
            'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
            {
                model: 'qwen-plus',
                messages: [
                    { role: 'system', content: '你是一个todo助手，请用一句简短的话扩充用户的todo任务，尽量识别出关键资源和时间。' },
                    { role: 'user', content: prompt }
                ],
                // max_tokens: 30,
                temperature: 0.7
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.DASHSCOPE_API_KEY}`
                }
            }
        );
        // 只返回建议部分
        res.json({ suggestion: response.data.choices?.[0]?.message?.content?.trim() || '' });
    } catch (err) {
        // 打印错误详情
        if (err.response) {
            console.error('AI Error Response:', err.response.data);
        } else {
            console.error('AI Error:', err.message);
        }
        res.status(500).json({ error: 'AI服务调用失败', detail: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});