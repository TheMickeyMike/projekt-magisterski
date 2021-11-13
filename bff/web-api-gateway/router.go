package main

import (
	fragranceV1 "github.com/TheMickeyMike/projekt-magisterski/bff/web-api-gateway/fragrance/v1"
	"github.com/gin-gonic/gin"
)

func LoadRouter(fragranceV1 *fragranceV1.Handler) *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger(), gin.Recovery())

	status := r.Group("/status")
	{
		status.GET("/ping", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"message": "pong",
			})
		})
	}

	apiv1 := r.Group("/api/v1")
	{
		apiv1.GET("/fragrances", fragranceV1.ListFragrances)
	}

	return r
}
