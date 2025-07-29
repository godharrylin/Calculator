const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs')                       //  告訴Express 要用 ejs 作為樣板引擎
app.set('views', path.join(__dirname, 'views'));    //  設定樣板檔案(ejs)的位置

app.use(express.static(path.join(__dirname, 'public')));    //  設定靜態資源檔位置
app.use('/', indexRouter);  //  路由設定

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});