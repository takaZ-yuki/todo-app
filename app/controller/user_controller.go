package controller

import (
	"echo-sample/app/database"
	"echo-sample/app/domain/model"
	"net/http"

	"github.com/labstack/echo/v4"
	log "github.com/sirupsen/logrus"
)

func GetUsers(c echo.Context) error {
	// ログ出力サンプル
	log.Debugf("This is debug")
	log.Infof("This is info")
	log.Errorf("This is err")

	users := []model.User{}
	database.DB.Find(&users)
	return c.JSON(http.StatusOK, users)
}

func GetUser(c echo.Context) error {
	user := model.User{}
	if err := c.Bind(&user); err != nil {
		return err
	}
	database.DB.Take(&user)

	return c.JSON(http.StatusOK, user)
}

func UpdateUser(c echo.Context) error {
	user := model.User{}
	if err := c.Bind(&user); err != nil {
		return err
	}
	database.DB.Save(&user)
	return c.JSON(http.StatusOK, user)
}

func CreateUser(c echo.Context) error {
	user := model.User{}
	if err := c.Bind(&user); err != nil {
		return err
	}
	database.DB.Create(&user)
	return c.JSON(http.StatusCreated, user)
}

func DeleteUser(c echo.Context) error {
	id := c.Param("id")
	database.DB.Delete(&model.User{}, id)
	return c.NoContent(http.StatusNoContent)
}