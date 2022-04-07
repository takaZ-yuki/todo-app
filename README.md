## 技術スタック
- フレームワーク: [Echo](https://echo.labstack.com/)
- O/Rマッパ: [GORM](https://gorm.io/ja_JP/)
- ホットリロード機能: [Air](https://github.com/cosmtrek/air)
- Javascript フレームワーク: [React](https://ja.reactjs.org/)
- AltJS: [TypeScript](https://www.typescriptlang.org/)
- JSビルドツール: [ViteJS](https://vitejs.dev/)
- データベース: MySQL
- 環境変数管理: [godotenv](https://github.com/joho/godotenv)
- CSSフレームワーク: [chakra-ui](https://chakra-ui.com/)

## データベース接続情報

- ユーザ名: webuser
- パスワード: webpass
- データベース名: go_mysql8_development
- ポート: 3306

## 起動

```
$ docker-compose up
```

## 終了

```
### コンテナの終了
$ docker-compose down

### コンテナの終了 + データボリュームの削除（= データベースの初期化）
$ docker-compose down -v
```

## 確認方法

### データベースアクセス

```
$ docker-compose exec db mysql -uwebuser -pwebpass -D go_mysql8_development -e "select * from users"

mysql: [Warning] Using a password on the command line interface can be insecure.
+----+--------+--------------------+
| id | name   | email              |
+----+--------+--------------------+
|  1 | Yamada | yamada@example.com |
|  2 | Tanaka | tanaka@example.com |
+----+--------+--------------------+
```

### phpmyadmin

http://localhost:8080/

### APIアクセス

```
### GET
$ curl --location --request GET 'localhost/users'

[{"id":1,"name":"Yamada","email":"yamada@example.com"},{"id":2,"name":"Tanaka","email":"tanaka@example.com"}]
```

```
### GET
$ curl --location --request GET 'localhost:1323/users/1'

{"id":1,"name":"Yamada","email":"yamada@example.com"}
```

```
### PUT
$ curl --location --request PUT 'localhost:1323/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Yamada",
  "email": "update@example.com"
}'

{"id":1,"name":"Yamada","email":"update@example.com"}
```

```
### POST
$ curl --location --request POST 'localhost:1323/users' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Suzuki",
  "email": "suzuki@example.com"
}'

{"id":3,"name":"Suzuki","email":"suzuki@example.com"}
```

```
### DELETE
$ curl --location --request DELETE 'localhost:1323/users/2'
```

### 画面アクセス

- top  
http://localhost/
