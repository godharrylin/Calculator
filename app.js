import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { preloadCountries, getCountries } from './services/countriesService.js'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// 匯入路由
import indexRouter from './routes/index.js'; // 要加 `.js` 副檔名，ESM 模式必須明確指定副檔名
import { getStatus } from './services/countriesService.js';

// 設定 EJS 模板引擎與目錄
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// 設定靜態資源目錄
app.use(express.static(join(__dirname, 'public')));




//  先產生資料
await preloadCountries();

//  送資料到 index.js
app.use('/index', (req, res, next) =>{
    req.status = getStatus();
    req.countries = getCountries();
    next();
});

// 設定路由
app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/index`);
});

