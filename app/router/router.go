package router

import (
	"echo-sample/app/controller"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Init() *echo.Echo {
	e := echo.New()

	// 不要なスタートバナーを消す
	e.HideBanner = true
	e.HidePort = true

	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.Gzip())

	e.GET("/users", controller.GetUsers)
	e.GET("/users/:id", controller.GetUser)
	e.PUT("/users/:id", controller.UpdateUser)
	e.POST("/users", controller.CreateUser)
	e.DELETE("/users/:id", controller.DeleteUser)

	return e
}