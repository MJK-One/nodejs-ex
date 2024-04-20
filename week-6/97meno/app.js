/**
 * 메모(express)
 *
 * http://localhost:3000/public/memo.html
 */

// Express 기본 모듈 불러오기
const express = require('express');
const http = require('http'); 
const path = require('path');

// Express의 미들웨어 불러오기
const bodyParser = require('body-parser');
const static = require('serve-static');

const expressErrorHandler = require('express-error-handler');
const fs = require('fs');

const app = express();
// 포트 설정
app.set('port', process.env.PORT || 3000);

// body-parser 설정
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));

// 라우팅 함수 등록
const router = express.Router();

// 메모 저장을 위한 라우팅 함수
router.route('/process/save').post( (req, res) => {
	console.log('/process/save 호출됨.');
	try {
		let paramAuthor = req.body.author;
                           let paramContents = req.body.contents;
		let paramCreateDate = req.body.createDate;
		
		console.log('작성자 : ' + paramAuthor);
		console.log('내용 : ' + paramContents);
		console.log('일시 : ' + paramCreateDate);

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'}); 
        res.write('<div><p>메모가 저장되었습니다.</p></div>');
        res.write('<div><input type="button" value="다시 작성" onclick="javascripthistory.back()"></div>');
        res.end();
    } catch(err) {
        console.dir(err.stack);
        res.writeHead(400, {'Content-Type':'text/html;charset=utf8'});
        res.write('<div><p>메모 저장 시 에러 발생</p></div>');
        res.end();
    }
});

app.use('/', router);

// 404 에러 페이지 처리
const errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

const server = http.createServer(app).listen(app.get('port'), () => {
  console.log('웹 서버 실행중 -> %s, %s', server.address().address, server.address().port);
});