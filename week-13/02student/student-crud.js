const { collection } = require("../03user/models/userModel");

// ./02student/student-crud.js
const MongoClient = require("mongodb").MongoClient;
const uri = 'mongodb+srv://admin:1234@testdb.lssxyjo.mongodb.net/testDB?retryWrites=true&w=majority';


const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log('DB Connected');

        // 컬렉션
        const collection = client.db('testDB').collection('students');
        // 추가
        // await collection.insertOne( {name : 'mjkim', age : 25});
        // console.log('입력 완료');
        // 검색
        // const documents = await collection.find( {name : 'mjkim'}).toArray();
        // console.log('문서 검색 : ', documents)
        // 수정
        // await collection.updateOne(
        //   { name : 'mjkim'}, {$set: {age: 25}}
        // );
        // console.log("수정 완료");

        // const updatedDocuments = await collection.find(
        //   { name : 'mjkim'}
        // ).toArray;
        // console.log('수정된 문서 :', updatedDocuments);
        // 삭제
        await collection.deleteOne( { name : 'mjkim'});
        console.log('삭제완료');
        // 연결 종료
        await client.close();
    } catch (err) {
      console.error(err);
    }
  };
  
  run();