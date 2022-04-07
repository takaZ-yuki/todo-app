package main

import (
	"echo-sample/app/database"
	"echo-sample/app/router"

	"github.com/labstack/echo/v4/middleware"
	log "github.com/sirupsen/logrus"
	lumberjack "gopkg.in/natefinch/lumberjack.v2"
)

func main() {
	e := router.Init()

	// DB接続
	database.Connect()
	sqlDB, _ := database.DB.DB()
	defer sqlDB.Close()

	// アクセスログを出力
	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
    Output: &lumberjack.Logger{
			Filename:   "./logs/access.log",
			MaxSize:    100, // megabytes
			MaxBackups: 10,
			MaxAge:     28,   //days
			Compress:   true,
		},
	}))

	// ログ設定の初期化
	// log.SetLevel(log.InfoLevel)
	log.SetLevel(log.DebugLevel)
	log.SetOutput(&lumberjack.Logger{
		Filename:   "./logs/debug.log",
		MaxSize:    100, // megabytes
		MaxBackups: 10,
		MaxAge:     28,   //days
		Compress:   true,
	})

	// CORS設定追加
	e.Use(middleware.CORS())

		// secure設定追加
	e.Use(middleware.Secure())

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}