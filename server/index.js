import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
app.use(bodyParser());

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === "admin" && password === "123456") {
        res.json({ status: true, message: "登录成功", token: "123456" });
    } else {
        res.json({ status: false, message: "登录失败", token: null });
    }
})

app.listen(port, () => {
    console.log(`开启http:localhost:${port}`)
})